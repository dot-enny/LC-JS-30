/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce1 = function(nums, fn, init) {
    let result = init; 
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    };
    return result;
};
const reduce2 = function(nums, fn, init) {
    return nums.reduce(fn, init)
};