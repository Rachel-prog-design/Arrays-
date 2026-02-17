// Exercise 1: array initialization and property Access
const productCategories = ["Electronics", "Clothing", "Books", "Home & Kitchen", "Books", "Toys & Games"];

//a
console.log(productCategories[0]); 
//b
console.log(productCategories[productCategories.length - 1]);
//c
console.log(productCategories.length);
//d
productCategories[1] = "pen";

//e
console.log(productCategories);

// Exercise 2: Apush, pop, shift, i=unshift, splice

let inventory = ["10", "20", "30", "40"];
//a
inventory.push("40");
console.log(inventory);
//b
inventory.pop();
console.log(inventory);
//c
inventory.shift();
console.log(inventory);
//d
inventory.unshift("0");
console.log(inventory);
//e
inventory.splice(1, 1, 25, 35);
console.log(inventory);

// Exercise 3: Shallow Copying of Arrays and the refernce trap
//a
const originalScores = [90, 85, 78]

//b
//The spread operator in Java 
//

//c
const referenceCopy = originalScores;
console.log(referenceCopy);
//d
const spreedCopy = [...originalScores]; // creates a new array with the same elements 
//e
referenceCopy[0] = 100;
console.log("Original Scores:", originalScores);
console.log("Reference Copy:", referenceCopy);

// Exercise 4: finding elements by Index and Value

const studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];
//a 
// the indexof, lastindexof = i the fiest cindition is successful it will print out true, if not it will print out false
console.log(studentNames.indexOf("Alice"));

//b
console.log(studentNames.lastIndexOf("Alice"));

//c
console.log(studentNames.includes("Charlie"));

//d
console.log(studentNames.includes("Eve"));

// Exercise 5: Advanced Searching with find and findIndex

const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Headphones", price: 199 },
    { id: 4, name: "Smartwatch", price: 299 },
    { id: 5, name: "Tablet", price: 399 }

];

//a
let foundProducts = products.find(product => product .id === 2);
console.log(foundProducts);

//b
let foundIndex = products.findIndex(product => product.price > 1000);
