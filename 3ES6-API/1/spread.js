/* Spread operator, array max, copy arrays */
// what's spread Operators
/* 
 Spread operator বেবহার করে আমরা arrays/objects এর element গুলোকে access করে কিছু কাজ করতে পারি । 
 1. একটা array/object এর element copy করে অন্য array/object এ রাখতে পারি ।
 2. দুইটা arrays/object কে জোরা লাগাতে পারি ।
 3. একটা arrays থেকে height & lowest value বের করে আনতে পারি।
 4. একটা array/object এর value বাদ দিইয়ে অন্য value গুলোকে destructure করতে পারি।  
*/
const max=Math.max(12,134,34,65);
// console.log(max);
const numbers=[23,12,43,54,45]; 
const largest=Math.max(...numbers);
console.log(...numbers); // we set ... to get number from array
console.log(largest);

const num2=[...numbers];
num2.push(333);
console.log(num2);
const num3=[12,1212,12, ...numbers, 12122,111,122233];
console.log(num3);