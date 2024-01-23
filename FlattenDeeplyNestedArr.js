/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flattenedMatrix = matrix.flat();
// Result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// THE FLAT METHOD TAKES AN ARGUMENT WHICH SPECIFIES THE 'DEPTH'
// TO WHICH THE ARR SHOULD BE FLATTENED
const nestedArray = [1, [2, [3, [4, 5]]]];
const flattenedArray = nestedArray.flat(2);
// Result: [1, 2, 3, 4, 5]

const authors = {
    author1Posts: [ { title: 'JavaScript' }, { title: 'ES6' } ],
    author2Posts: [ { title: 'Node.js' }, { title: 'React' } ],
};
const allPosts = Object.values(authors).flat();
// [ { title: 'JavaScript' }, { title: 'ES6' }, { title: 'Node.js' }, { title: 'React' } ]

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
