/**
 * Memoizes a function by caching its results for previously used input values.
 *
 * @param {Function} fn - The function to be memoized.
 * @return {Function} - A new function that behaves like the original function but caches its results.
 */
function memoize(fn) {
    /** Stores the cached results of the function calls. */
    let memoizedCalls = {};
  
    /**
     * Returns a memoized version of the function.
     *
     * @param {...any} args - Arguments to be passed to the memoized function.
     * @return {*} - The result of the memoized function call.
     */
    return (...args) => {
      /**
       * Creates a string representation of the arguments to be used as a cache key.
       */
      let call = JSON.stringify(args);
  
      /**
       * Checks if the result for the given arguments is already cached.
       */
      if (call in memoizedCalls) {
        /** Returns the cached result. */
        return memoizedCalls[call];
      } else {
        /**
         * Calculates the function result, stores it in the cache, and returns it.
         */
        memoizedCalls[call] = fn(...args);
        return memoizedCalls[call];
      }
    };
  };  