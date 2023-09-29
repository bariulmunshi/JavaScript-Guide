//var can be redeclare and reassign
var age = 23;
var age = 25; //redeclare available
age = 26; // reassign available
console.log(age);

//let can be re assign but not redeclare
let age1 = 23;
// let age1=24; //can't redeclare
age1 = 34; // can be re assign
console.log(age1);

//constant can't be redeclare and reassaign
const age2 = 23;
//  const age2=43; // can't be redeclare
//  age=32; can't be re assign
console.log(age2);

console.log(5); // Using the numeric literal 5
console.log("Hello"); // Using the string literal "Hello"
console.log(true); // Using the boolean literal true

const number = 5; // Assign the value 5 to the variable 'number'
console.log(number); // Use the 'number' variable to log the value
