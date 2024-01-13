// Custom implementation for executing promises in parallel
const promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        if (functions.length < 1) {
            resolve([]); // Handle empty input
            return;
        };

        const result = new Array(functions.length).fill(null); // Prepare result array
        let resolvedCount = 0; // Track resolved promises

        functions.forEach((func, idx) => {
            func()
                .then((res) => {
                    result[idx] = res; // Store resolved value at corresponding index
                    resolvedCount++;
                    if (resolvedCount === functions.length) resolve(result); // Resolve when all promises are done
                })
                .catch((err) => {
                    reject(err); // Reject if any promise fails
                });
        });
    });
};

// Leveraging built-in Promise.all() for parallel execution
Promise.all(functions)
    .then(results => {
        // All promises resolved successfully, results array contains values in original order
        console.log(results);
    })
    .catch(error => {
        // One or more promises rejected, handle the error
        console.error(error);
    });
