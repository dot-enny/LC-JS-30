function jsonStringify (obj) {
    if (typeof obj === null || typeof obj === undefined) {
        return String(obj);
    }
    // arrays []
    if (Array.isArray(obj)) {
        const values = obj.map((item) => jsonStringify(item));
        return `[${values.join(',')}]`
    }
    // objects {}
    if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        const keyValPairs = keys.map((key) => `"${key}":${jsonStringify(obj[key])}`);
        return `{${keyValPairs.join(',')}}`;
    }
    // strings ""
    if (typeof obj === 'string') {
        return `"${String(obj)}"`
    }
    return String(obj); // booleans and numbers
};

console.log(jsonStringify({ name: "Bob", age: 30 })); // Expected: "{\"name\":\"Bob\",\"age\":30}"
console.log(jsonStringify([1, 2, 3])); // Expected: "[1,2,3]"