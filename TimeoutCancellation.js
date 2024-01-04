/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

const cancellable = function(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    const cancelFn = () => {
        clearTimeout(timeoutId);
    }; 

    return cancelFn;
};