const join = function (arr1, arr2) {
    // Combine the two arrays into a single array
    const combinedArray = arr1.concat(arr2);
    // Create an object to store merged objects based on their id
    const merged = {};
    // Iterate through the combined array
    combinedArray.forEach((obj) => {
        // Extract the id from each object
        const id = obj.id;
        // Check if the id is encountered for the first time
        if (!merged[id]) {
            // If it's the first occurrence, create a new object for that id
            merged[id] = { ...obj };
        } else {
            // If the id has been encountered before, 
            // merge the existing object with the new one
            merged[id] = { ...merged[id], ...obj };
        }
    });
    // Convert the merged object back into an array and sort it based on the id
    const joinedArray = Object.values(merged);
    joinedArray.sort((a, b) => a.id - b.id);
    // Return the final merged and sorted array
    return joinedArray;
};
