//How to split, slice, substr, substring, concat, join
//split
const lyrics="tumi bondhu kala pakhi. ami jeno ki bosonter kale tomake bolte parini";
const letter = lyrics.split(""); //letter
const word = lyrics.split(" ");
const sentences= lyrics.split(".");//sentences
// console.log(sentences);

//slice

const lyrics2="tumi bondhu kala pakhi. ami jeno ki bosonter kale tomake bolte parini";
const sentences1= lyrics2.slice(0,10);
const sentences2= lyrics2.slice(5,10);
console.log(sentences2);

//substr

const lyrics3="tumi bondhu kala pakhi. ami jeno ki bosonter kale tomake bolte parini";
const sentences3= lyrics3.substring(5,10);
console.log(sentences3);

//concat

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

//join
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
