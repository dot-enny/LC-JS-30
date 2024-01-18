/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let grouped = {};
    for (const item of this) {
        const key = fn(item);
        grouped[key] = grouped[key] || [];
        grouped[key].push(item);
    };

    return grouped;
};

/**
 * const arr = [ {"id":"1"}, {"id":"1"}, {"id":"2"} ];
 * arr.groupBy(item => item.id);
 * { 
 *  "1": [{"id": "1"}, {"id": "1"}],    
 *  "2": [{"id": "2"}] 
 *  }
 */
