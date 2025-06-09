console.log("Welcome to the DSA repository!");

// Varibale declaration and Initialization
// Using const for constants and let for variables that may change
const a = 10
let b = 20;
b = 30; // Reassigning value to b


const sum = a + b
console.log('sum ', sum);

let firstName = "John";
let lastName = 7;

let fullName = firstName + " " + lastName; // Concatenating strings
// Using template literals for better readability
console.log('Full Name:', fullName);

// TODO: ARRAYS
// * Array is a collection of items stored at contiguous memory locations
// * Arrays can hold multiple values of the same type
// * Arrays are zero-indexed, meaning the first element is at index 0
// * Arrays can be declared using square brackets []
// * Arrays can hold different types of data, including numbers, strings, and objects
// * Array are objects in JavaScript with key(index) starting from 0 to N and value as array values, so they have properties and methods
// * Common array methods include push(), pop(), shift(), unshift(), slice(), splice(), and forEach()


let arr = [1, 2, 3, 4, 5]; // Array declaration
console.log('Array:', arr, arr[0], arr.length); // Accessing first element

let arr1 = [1, 2, 3, 4, 5, "Hello", true, {a: 'object'}, ['array']]; // Array with mixed types
console.log('Mixed Array:', arr1, arr1[7].a, arr1[8][0]); // Accessing elements of mixed array

// TODO: OBJECTS
// * Objects are collections of key-value pairs
// * Objects can hold multiple values of different types
// * Objects are defined using curly braces {}
// * in place of index, we use keys to access values in an object
// * 

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "New York"
    },
    hobbies: ["reading", "traveling", "coding"],
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log('Person Object:', person, person.hobbies[1], person.fullName()); // Accessing object properties

// TODO: FUNCTIONS
// * Functions are reusable blocks of code that perform a specific task
// * Functions can take parameters and return values
// * Functions can be declared using the function keyword or as arrow functions

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log('Greet Function:', greet("Alice")); // Calling function with a parameter

function add(a, b) {
    return a + b; 
}
console.log('Add Function:', add(5, 10)); // Calling function with two parameters

// Arrow function
const multiply = (x, y) => x * y;
console.log('Multiply Function:', multiply(4, 5)); // Calling arrow function with two parameters

// TODO: CONDITIONALS (IF-ELSE)
// * Conditional statements allow you to execute code based on certain conditions
// * Common conditional statements include if, else if, and else
let number = 10;
if (number > 0) {
    console.log('Number is positive');
}
else if (number < 0) {
    console.log('Number is negative');
} else {
    console.log('Number is zero');
}

// Function to check if a number is even or odd
function isEvenOrOdd(num) { 
if (num % 2 === 0) { // % is the modulus operator, which returns the remainder of division
        return `${num} is even`;
    }
    return `${num} is odd`;
}

console.log('Even or Odd:', isEvenOrOdd(-7)); // Calling function to check even or odd

// TODO: LOOPS (FOR, WHILE, DO-WHILE)
// * Loops allow you to execute a block of code multiple times
// * Common loop types include for, while, and do-while

// TODO: For loop to iterate through an array
// * let i = 0 - initialization
// * i < numbers.length - condition
// * i++ - increment
// * numbers[i] - accessing the current element in the array
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(`FOR Number at index ${i}:`, numbers[i]);
}

// TODO: While loop to print numbers from 1 to 5
// * let count = 1 - initialization
// * count <= 5 - condition
// * count++ - increment
let count = 1;
while (count <= 5) {
    console.log('While Count: ', count)
    count++;
}

// TODO DO-WHILE loop to print numbers from 1 to 5
// * The do-while loop executes the block of code at least once before checking the condition
// * The syntax is similar to the while loop, but the condition is checked after the block of code is executed
// * let i = 1 - initialization
// * i <= 5 - condition
// * i++ - increment
let i = 1;
do {    
    console.log('Do-While Count: ', i);
    i++;
}while (i <= 5);

// TODO: Questons
// A fun that returns a count of negative numbers in an array

function countNegatives(arr) {
    let count = 0;
    for (let i=0; i< arr.length; i++) {
        if (arr[i] < 0) count++
    }
    return count;
}

console.log('Count of Negative Numbers:', countNegatives([1, 2, -3, -4, 5])); // Calling function to count negative numbers

// A fun to return largest number in an array
function findLargest(arr) {
    let largest = -Infinity; // ? Initialize largest to the smallest possible value
    // let largest = arr[0] // ? Alternatively, Initialize largest to the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if current element is greater
        }
    }
    return largest;
}

// A fun to return second largest number in an array

function secondLargest(arr) {
  if (arr.length < 2) return null
  let largest = -Infinity
  let secLargest = -Infinity
  for (let i=0; i< arr.length; i++) {
    if (arr[i] > largest) {
      secLargest = largest
      largest = arr[i]
    } 
    else if (arr[i] > secLargest && arr[i] !== largest) {
      secLargest = arr[i]
    }
  }

  return secLargest
}

let array = [3,7,4,2,5,7,6,3,7,99,77,55,3,3,67567,56,7,67]
let result = secondLargest(array)

console.log(result)

// TODO: LOOP WITHIN A  

// * loop runs 25 times
for(let i = 0; i < 5; i++) {
    console.log(`Outer Loop Iteration: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`  Inner Loop Iteration: ${j}`);
    }
}


for (let i = 0; i < 5; i++) {
    console.log(`Outer Loop Iteration: ${i}`);
    for (let j = 0; j < i; j++) {
        console.log(`  Inner Loop Iteration: ${j}`);
    }
}

