/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(values => values[0] + values[1]);
};
  
// USAGE
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2)
  .then(sum => console.log(sum)) // Output: 7
  .catch(error => console.error("Error:", error));
