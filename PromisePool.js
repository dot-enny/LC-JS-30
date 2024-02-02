function promisePool (promises, limit) {
    return new Promise((resolve) => {
        let i = 0;
        let inProgress = 0;

        const callback = () => {
            if (i === promises.length && inProgress == 0) resolve();

            while (i < promises.length && inProgress < limit) {
                promises[i++]()
                    .then(() => {
                        inProgress--;
                        callback();
                    });
                inProgress++;
            };
        };

        callback();
    });
};

// const sleep = (t) => new Promise(res => setTimeout(res, t));
// promisePool([() => sleep(500), () => sleep(400)], 1)
//     .then(console.log) // After 900ms