let fruits = ["apple", "cherry", "banana"];
let inFruits = new Array ("kiwi", "avacado", "dragon fruit");

console.log (fruits);
console.log (inFruits);


// type checking
console.log (typeof fruits);
console.log (typeof inFruits);

// accessing elements by value
console.log (fruits [0]);

// length of array
console.log (fruits [fruits.length]);

// changing value of an array element
fruits [0] = "blueberry";

// add new item to the end of the array
fruits.push("new item");

// add new item to the beginning of the array
fruits.unshift("first item");

// remove the last value of the array
fruits.pop();


