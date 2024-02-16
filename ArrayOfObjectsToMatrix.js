function jsonToMatrix (arr) {
    
    const keySet = new Set();

    for (const obj of arr) {
        getKeys(obj, "");
    };

    const keys = Array.from(keySet).sort();
    const result = [keys];

    for (const obj of arr) {
        const keyToVal = {};
        getValues(obj, "", keyToVal)
        const row = [];
        for (const key of keys) {
            row.push(keyToVal[key] ? keyToVal[key] : "");
        }
        result.push(row);
    };

    return result;

    function getKeys (obj, path) {
        for (const key in obj) {
            const newPath = path ? `${path}.${key}` : key;
            if(isObject(obj[key])) {
                getKeys(obj[key], newPath);
            } else {
                keySet.add(newPath);
            }
        };
    };

    function getValues (obj, path, keyToVal) {
        for (const key of keys) {
            const newPath = path ? `${path}.${key}` : key;
            if(isObject(obj[key])) {
                getValues(obj, newPath, keyToVal);
            } else {
                keyToVal[newPath] = obj[key];
            }
        }
    }

    function isObject (obj) {
        return obj !== null && typeof obj === 'object'
    };
};