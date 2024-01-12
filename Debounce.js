const debounce = function (fn, t) {
    // **Manage timeouts:**
    let timeoutId;

    // **Return the debounced function:**
    return function (...args) {
        // **Clear pending suggestions if new input arrives:**
        clearTimeout(timeoutId);

        // **Schedule suggestions after a pause:**
        timeoutId = setTimeout(() => {
            // **Provide suggestions after the delay:**
            fn(...args);
        }, t);
    };
};
