// Functions

// Regular Function
// Regular functions are the most common type of function in JavaScript. They are defined using the `function` keyword and can be declared with or without a name.

// Syntax:
function functionName(parameters) {
    // function body
    return value;
}

// Example:
function add(a, b) {
    return a + b;
}

console.log(add(3, 4)); // Output: 7


// Arrow Function
// Arrow functions, introduced in ES6, provide a concise syntax for writing functions. They do not have their own `this` value, which makes them particularly useful for writing short functions and for callbacks.

// Syntax:
const functionName = (parameters) => {
    // function body
    return value;
}

// Example:
const multiply = (a, b) => a * b;

console.log(multiply(3, 4)); // Output: 12


// Function Expression
// A function expression defines a function inside an expression. The function can be anonymous or named. Unlike function declarations, function expressions are not hoisted.

// Syntax:
const functionName = function(parameters) {
    // function body
    return value;
};

// Example:
const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(7, 4)); // Output: 3


// Conditions

// if-else Condition
// The `if-else` statement is used to execute code based on a condition. If the condition is true, the `if` block is executed; otherwise, the `else` block is executed.

// Syntax:
if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}

// Example:
let hour = 10;

if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}
// Output: Good morning!


// Switch Case
// The `switch` statement evaluates an expression and matches the expression's value to a case clause, executing the associated block of code.

// Syntax:
switch(expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    default:
        // code to be executed if expression doesn't match any case
}

// Example:
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("End of the work week!");
        break;
    default:
        console.log("Midweek!");
}
// Output: Start of the week!


// Loops

// for Loop
// The `for` loop repeats a block of code a specified number of times. It includes three optional expressions: initialization, condition, and final expression.

// Syntax:
for (initialization; condition; finalExpression) {
    // code block to be executed
}

// Example:
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}
// Output: Iteration 0, Iteration 1, Iteration 2, Iteration 3, Iteration 4


// for...of Loop
// The `for...of` loop iterates over iterable objects like arrays, strings, maps, and sets, executing the code block for each element.

// Syntax:
for (variable of iterable) {
    // code block to be executed
}

// Example:
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
    console.log(fruit);
}
// Output: apple, banana, cherry


// while Loop
// The `while` loop executes a block of code as long as the specified condition is true.

// Syntax:
while (condition) {
    // code block to be executed
}

// Example:
let i = 0;

while (i < 3) {
    console.log(`Iteration ${i}`);
    i++;
}
// Output: Iteration 0, Iteration 1, Iteration 2


// do...while Loop
// The `do...while` loop is similar to the `while` loop, but it executes the code block once before checking the condition.

// Syntax:
do {
    // code block to be executed
} while (condition);

// Example:
let i = 0;

do {
    console.log(`Iteration ${i}`);
    i++;
} while (i < 3);
// Output: Iteration 0, Iteration 1, Iteration 2


// for...in Loop
// The `for...in` loop iterates over the enumerable properties of an object, executing the code block for each property.

// Syntax:
for (variable in object) {
    // code block to be executed
}

// Example:
const person = { name: "Shahood", age: 25 };

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output: name: Shahood, age: 25


// Data Types

// String
// Strings are sequences of characters used to represent text.

// Syntax:
let stringName = "string value";

// Example:
let name = "Shahood";
console.log(name); // Output: Shahood


// Number
// Numbers in JavaScript represent both integer and floating-point values.

// Syntax:
let numberName = numericValue;

// Example:
let age = 25;
let price = 19.99;
console.log(age);   // Output: 25
console.log(price); // Output: 19.99


// Boolean
// Booleans represent logical values: `true` or `false`.

// Syntax:
let booleanName = trueOrFalse;

// Example:
let isDeveloper = true;
console.log(isDeveloper); // Output: true


// Operators

// Arithmetic Operators
// Arithmetic operators are used to perform arithmetic operations.

// Example:
let sum = 10 + 5;          // Addition
let difference = 10 - 5;   // Subtraction
let product = 10 * 5;      // Multiplication
let quotient = 10 / 5;     // Division
let remainder = 10 % 3;    // Modulus

console.log(sum);          // Output: 15
console.log(difference);   // Output: 5
console.log(product);      // Output: 50
console.log(quotient);     // Output: 2
console.log(remainder);    // Output: 1


// Comparison Operators
// Comparison operators compare two values and return a boolean result.

// Example:
let isEqual = 10 == 10;      // Equal to
let isNotEqual = 10 != 5;    // Not equal to
let isStrictEqual = 10 === 10; // Strictly equal to
let isGreater = 10 > 5;      // Greater than
let isLess = 10 < 5;         // Less than

console.log(isEqual);        // Output: true
console.log(isNotEqual);     // Output: true
console.log(isStrictEqual);  // Output: true
console.log(isGreater);      // Output: true
console.log(isLess);         // Output: false


// Logical Operators
// Logical operators are used to combine multiple conditions.

// Example:
let andOperator = true && false; // AND
let orOperator = true || false;  // OR
let notOperator = !true;         // NOT

console.log(andOperator); // Output: false
console.log(orOperator);  // Output: true
console.log(notOperator); // Output: false


// Assignment Operators
// Assignment operators assign values to variables.

// Example:
let x = 10;     // Assign
x += 5;         // Add and assign (x = x + 5)
x -= 5;         // Subtract and assign (x = x - 5)
x *= 5;         // Multiply and assign (x = x * 5)
x /= 5;         // Divide and assign (x = x / 5)
x %= 5;         // Modulus and assign (x = x % 5)

console.log(x); // Output: 0 (after all operations)
