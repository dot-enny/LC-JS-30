function areDeeplyEqual (obj1, obj2) {
    if (obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    if (typeof obj1 !== 'object') {
        return obj1 === obj2;
    }
    if (Array.isArray(obj1) || Array.isArray(obj2)) {
        if (String(obj1) !== String(obj2)) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!areDeeplyEqual(obj1[i], obj2[i])) {
                return false;
            }
        }
    } else {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (const key in obj1) {
            if (!areDeeplyEqual(obj1[key], obj2[key])) {
                return false
            }
        }
    }
    return true
};

areDeeplyEqual({ a: 1 }, { a: 1 }); // true
areDeeplyEqual({ a: 1 }, { b: 2 }); // false
areDeeplyEqual({ a: [1, 2] }, { a: [2, 1] }); // false
areDeeplyEqual([1, 2], [1, 2]); // true
areDeeplyEqual([1, 2], { 0: 1, 1: 2}); // false

