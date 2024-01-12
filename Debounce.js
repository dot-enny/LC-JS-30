const debounce = function(fn, delay) {
    // Keep track of any pending timeout
    let timeoutId = null;
  
    // Return a function that delays the execution of fn
    return function(...args) {
      // Clear any existing timeout to ensure only the latest call proceeds
      clearTimeout(timeoutId);
  
      // Set a new timeout to execute the function after the specified delay
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  
// Example: Debounce console.log to delay logging:
const debouncedLog = debounce(console.log, 100);

debouncedLog('Hello'); // Cancelled (delayed for 100ms)
debouncedLog('Hello'); // Cancelled (previous delay reset)
debouncedLog('Hello'); // Logged at t=100ms (after the delay)