/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flattenedMatrix = matrix.flat();
// Result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const nestedArray = [1, [2, [3, [4, 5]]]];
const flattenedArray = nestedArray.flat(2);
// Result: [1, 2, 3, 4, 5]

// THE FLAT METHOD TAKES AN ARGUMENT WHICH SPECIFIES THE 'DEPTH'
// TO WHICH THE ARR SHOULD BE FLATTENED

const nestedData = { user: { details: { name: 'John', age: 25 } } };
const flattenedData = Object.values(nestedData).flat();
// Result: ['John', 25]
// HOW IT WORKS UNDER THE HOOD

const flat = function (arr, n) {
    if (n == 0) return arr;
    const flattenedArr = [];
    const flattenArr = (innerArr, depth) => {
        for (const item of innerArr) {
            if (typeof item === 'object' && depth < n) {
                flattenArr(item, depth + 1);
            } else {
                flattenedArr.push(item);
            };
        };
        return flattenedArr;
    };
    return flattenArr(arr, 0);
};
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let depth = 1;
console.log(flat(arr, depth));
