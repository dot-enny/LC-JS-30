let tasks = [
    { title: 'Task 1', priority: 'Low' },
    { title: 'Task 2', priority: 'High' },
    { title: 'Task 3', priority: 'Medium' }
];
let priorityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };

tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

// Output: [{ title: 'Task 1', priority: 'Low' }, 
// { title: 'Task 3', priority: 'Medium' }, 
// { title: 'Task 2', priority: 'High' }]

// encapsulating the logic into a 
// reusable function, sortBy, which takes an array 
// and a callback function as parameters. 
// The callback function, fn, is applied to
//  each element to determine the sort order.
const sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

let sortedTasks = sortBy(tasks, task => priorityOrder[task.priority]);
