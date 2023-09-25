 // JavaScript String includes()
let text1 = "Hello world, welcome to the universe.";
let result = text1.includes("world");
console.log(result); 

// JavaScript String includes() and fixed search string and exiting string lower case then search
let text = "Hello World, welcome to the universe.";
let texts='WOrld';
let teLowerCase = text.toLowerCase();
let tesLowerCase = texts.toLowerCase();
let doesExist=tesLowerCase.includes(tesLowerCase);
console.log(doesExist); 
