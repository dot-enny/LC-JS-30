/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

const cancellable = function(fn, args, t, cancelTimeMs) {
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    const cancelFn = (cancelTimeMs) => {
        setTimeout(() => {
            clearTimeout(timeoutId);
        }, cancelTimeMs)
    }; 

    return cancelFn;
};