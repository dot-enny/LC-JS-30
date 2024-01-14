// 1. Using JSON.stringify() (less efficient, but handles various data types):
function isEmptyJSON(obj) {
  // Stringify and check for empty string representation (length <= 2)
  // because "{}" and "[]" are strings of length 2
  return JSON.stringify(obj).length <= 2;
};

// 2. Using Object.keys() (efficient for objects, 
// does not consider inherited properties):
function isEmptyKeys(obj) {
  // Get an array of object's own property keys and check its length
  return Object.keys(obj).length === 0;
};

// 3. Using a for...in loop (can handle both objects and arrays):
function isEmptyLoop(obj) {
  // Iterate through enumerable properties, return false if any found
  for (const key in obj) {
    return false; // Found a property, not empty
  };
  return true; // No properties found, empty
};

// 4. Direct length check for arrays (most efficient for arrays):
function isEmptyArray(arr) {
  // Directly check the array's length property
  return arr.length === 0;
};

// How not to check for emptiness
// Using 'obj === null' or 'obj === undefined'
// This only checks for those specific values, not for empty objects or arrays.
// Using obj.length === 0: This only works for arrays, not for objects.
// arr == [] might produce unexpected results in such cases due to type coercion.
// arr.length == []: This comparison is incorrect because
// arr.length is a number, while [] is an empty array. 
// They are different data types and cannot be compared directly.
