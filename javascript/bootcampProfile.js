// javaseript is a object oriented programming language where everything is an object

// Primitive Data Types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (not used in this example)
// 7. BigInt (not used in this example)

// Non-Primitive Data Types also known as objects
// 1. Array
// 2. Object

// string = sequence of characters ("" , '' , ``)
let name = ("Tahaa Tambe")

// number = sequence of digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) (25 = integer , 25.5 = float)
let age = 25

// boolean = `true` or `false`
let isPaid = true

// null = absence of value
let favouriteClass = null

// undefined = variable that has not been assigned a value
let hometown;

// array = a list of values (can be of different data types) 
let skills =  ["html", "css", "javascript"]

// object = a collection of key-value pairs
let studentProfile = {
    name: "Tahaa Tambe",
    age: 25,
    isPaid: true,
    favouriteClass: null,
    hometown: undefined,
    skills: ["html", "css", "javascript"]
}

//print any value to the console
console.log (age); // prints 25

//typeof operator is used to determine the type of a variable
console.log(typeof name); // prints "string"