// Function to greet a person:
function greet(greeting, name) {
    console.log(greeting + ", " + this.name + "!"); 
    // Accessing name property using this
}

// Using apply to set this and pass arguments:
const person = { name: "Lance" };
greet.apply(person, ["Hello"]); // Output: Hello, Lance!
// Here, `this` within greet() refers to the person object, 
// and arguments are passed from the array.
