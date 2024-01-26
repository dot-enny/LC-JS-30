/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = function(obj) {
    const dfs = (obj) => {
        if (!obj) return false;
        if (typeof obj !== 'object') return obj;

        if (Array.isArray(obj)) {
            let newArr = [];
            for (const item of obj) {
                let res = dfs(item);
                if (res) newArr.push(res);
            };
            return newArr;
        };

        const newObj = {};

        for (const key in obj) {
            let res = dfs(obj[key]);
            if (res) newObj[key] = res;
        };
        return newObj;
    };
    return dfs(obj);
};