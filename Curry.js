// Function to curry a given function
function curry(fn) {
    // Array to store accumulated arguments
    let nums = [];
    // Nested function to handle argument accumulation and execution
    return curried = (...args) => {
        // Append new arguments to the nums array
        nums = [...nums, ...args];
        // Check if all required arguments have been provided
        if (fn.length === nums.length) {
            // Execute the original function with stored arguments
            const res = fn(...nums);
            // Reset nums array for future calls
            nums = [];
            // Return the result
            return res;
        } else {
            // Return the curried function itself for further accumulation
            return curried;
        }
    };
};

const sum = (a, b, c) => a + b + c;

// Create a curried version of the sum function
const currySum = curry(sum);
// Returns a function waiting for the third argument
const partialSum = currySum(1)(2);
// Executes the curried function with all arguments
const result1 = currySum(1)(2)(3); // Output: 6
// Provides two arguments at once
const result2 = currySum(1, 2)(3); // Output: 6
