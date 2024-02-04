function throttle(fn, t) {
    // Flag to track if a call is currently throttled
    let isThrottled = false;
    // Store arguments for queued calls
    let nextArgs = null;

    // Return a new function that handles throttling logic
    return (...args) => {
        // Helper function to execute queued calls and manage throttling
        const helper = () => {
            // If there are queued arguments:
            if (nextArgs) {
                // Execute the original function with queued arguments
                fn(...nextArgs);
                // Mark as throttled again
                isThrottled = true;
                // Clear queued arguments
                nextArgs = null;
                // Schedule the helper again for potential future calls
                setTimeout(helper, t);
            } else {
                // No queued calls, reset throttling flag
                isThrottled = false;
            }
        };

        // If a call is currently throttled:
        if (isThrottled) {
            // Queue the arguments for later execution
            nextArgs = args;
        } else {
            // Execute the function immediately
            fn(...args);
            // Mark as throttled
            isThrottled = true;
            // Schedule the helper to handle potential queued calls
            setTimeout(helper, t);
        }
    };
};


const log = (...args) => {
    console.log("Function called with args:", args);
};
const throttledLog = throttle(log, 1000); // 1-second throttle interval
// Time 0:
console.log("Time 0:");
throttledLog(1, 2); // Executes immediately
// Output: Function called with args: [1, 2]

// Time 0.3 (simulated):
setTimeout(() => {
    console.log("Time 0.3:");
    throttledLog(3, 4); // Queued
}, 300);

// Time 0.7 (simulated):
setTimeout(() => {
    console.log("Time 0.7:");
    throttledLog(5, 6); // Queued
}, 700);

// Time 1:
// Helper function executes the first queued call
// Output: Function called with args: [3, 4]

// Time 2:
// Helper function executes the second queued call
// Output: Function called with args: [5, 6]
