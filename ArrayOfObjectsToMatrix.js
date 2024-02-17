function jsonToMatrix(arr) {

	// use set to avoid duplicate keys
	const keySet = new Set();

	// get keys from objects at all levels of nesting
	for (const obj of arr) {
		getKeys(obj, "");
	};
	
	// convert keySet to array in order to call the sort method
	const keys = Array.from(keySet).sort();
	// initailize the result matrix with the first row as the array of keys
	const resultMatrix = [keys];

	for (const obj of arr) {
		// a new list of key: value pairs is initiated for every object
		// and passed into the scope of the getValues function so it can be updated within it
		const keyToVal = {};
		getValues(obj, "", keyToVal)
		// after calling the getValues function on an object
		// the keyToVal object is now updated to a list of key: value pairs that has no nested objects
		// every nested value can now be directly accessed without iterating nested objects]
		// this flattening of the object is handled within the getValues function
		// create a row of values update the resultMatrix after generating row
		const row = [];
		for (const key of keys) {
			row.push(keyToVal[key] ? keyToVal[key] : "");
		}
		resultMatrix.push(row);
	};

	return resultMatrix;

	// helper functions

	function getKeys(obj, path) {
		for (const key in obj) {
			// store chain of keys caused by nested objects as a path to the value
			const newPath = path ? `${path}.${key}` : key;
			if (isObject(obj[key])) {
				getKeys(obj[key], newPath);
			} else {
				keySet.add(newPath);
			}
		};
	};

	function getValues(obj, path, keyToVal) {
		// reconstruct current object as a new
		// list of key: value pairs that has no nesting;
		// each key is generated recursively  
		// by checking every nested object and updating the key o create
		// a chain of keys that forms a path that
		// can read the value at the deepest level without the need to iterate
		// then assiging the value at the deepest level to the path that has been generated.
		// This allows every nested value to be brought to the highest level
		// and let's us access nested values directly when creating a row of values in the matrix
		for (const key in obj) {
			const newPath = path ? `${path}.${key}` : key;
			if (isObject(obj[key])) {
				getValues(obj[key], newPath, keyToVal);
			} else {
				keyToVal[newPath] = obj[key];
			}
		}
	};

	function isObject(obj) {
		// check for null --- becuase null is typeof object
		return obj !== null && typeof obj === 'object'
	};
};

const testObj = [
	[7, 8],
	{ a: 1, b: { a: 'b1', b: 'b2'} },
];

console.log(jsonToMatrix(testObj))
jsonToMatrix(testObj)
/** final look of keyToVal object used to create row 
 	{ a: 1, 'b.a': 'b1', 'b.b': 'b2' }
	
	// result matrix
 	[ 
	  [ '0', '1', 'a', 'b.a', 'b.b' ],
	  [ 7, 8, '', '', '' ],
	  [ '', '', 1, 'b1', 'b2' ] 
	] 
*/
