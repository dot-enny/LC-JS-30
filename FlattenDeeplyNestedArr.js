/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
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
