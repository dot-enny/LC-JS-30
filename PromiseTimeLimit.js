/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// Function to create a time-limited version of an asynchronous function:
const timeLimit = function (fn, t) {
    return async function (...args) { // Return an async function to handle promises
        return new Promise(async (resolve, reject) => { // Create a new promise
            setTimeout(() => reject("Time Limit Exceeded"), t); // Set timeout for rejection
            try {
                const res = await fn(...args); // Await the original function's execution
                resolve(res); // Resolve the promise with the result if successful
            } catch (err) {
                reject(err); // Reject the promise with any errors
            }
        });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded"
 */