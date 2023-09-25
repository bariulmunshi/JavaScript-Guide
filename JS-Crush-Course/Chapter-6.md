- What I learnt from previous Chapter-1 to Chapter-5
- variable,array,condition,loop,function,object
# Table of Contents
# Why Problem solving?
1. /* Problelm-1: The Standard height of a volleyball player is 7 feet. Jim wants to join the volleyball team, so decided to measure his height to see if he meets the standard. Calculate his height in feet.
input: Jim heiht 84 inch  */
```sh
function inchToFeet(inches){
  // console.log('Jim height in inch:',inches);
  const result=inches/12;
  return result;
}
const jimInches=84;
const jimFeet=inchToFeet(jimInches); 
```

2. /* Problem-2: Peter's school teacher asked him to write a program that would return true if a number is even and false  if a number is odd. Help Peter write the program.
Input: 98 and 117 */
 
 ```sh
 function numberCheck(num){
  if(num%2==0){
    return true;
  }
  else{
    return false;
  }
}
const firstNum=numberCheck(98);
console.log(firstNum);
const secondNum=numberCheck(117);
console.log(secondNum); 
 ```
3. /* Problem-3: Year check is leap year or not
Formula: If year is divisible by 4 then it will be leap year other not */
 ```sh
 function isLeapYear(year){
  if(year%4==0){
    console.log(year,'is Leap Year');
  }
  else{
    console.log(year,'is Not Leap Year');
  }
}

isLeapYear(1936);
isLeapYear(1934) 
 ```
 4. /* Problem-4: Write a function findSum() that will take the array[5,7,8,10,45,35] as the input parameter and will return Sum of all numbers of an array  */
 ```sh
 function findOddSum(arr) {
    let sum = 0;  
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
  }
  const arr = [5, 7, 8, 10, 45, 35];
  const oddSum = findOddSum(arr);
  console.log(oddSum); // Output: 110 (5 +8+10+ 45 + 35 = 110)
 ```
 5. /* Problem-5: Write a function findOddSum() that will take the array[5,7,8,10,45,35] as the input parameter and will return the  sum   of the odd numbers  */
```sh
function findOddSum(arr) {
  let sum = 0;  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const arr = [5, 7, 8, 10, 45, 35];
const oddSum = findOddSum(arr);
console.log(oddSum); // Output: 92 (5 + 7 + 45 + 35 = 92)
```
6. Problem-6: // Find out value of 5! & 6! Using function and for loop by multiple call
```sh
function getFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
let firstFactorialNumber = 5;
let valueFactorialOfMy = getFactorial(firstFactorialNumber);
console.log("factorial value of 5 is:", valueFactorialOfMy);
let secondFactorialNumber = 7;
let valueFactorialOfHer = getFactorial(secondFactorialNumber);
console.log("factorial value of 6 is:", valueFactorialOfHer);
```
7. // Find out value of 5! & 6! Using function and while loop by multiple call
 ```sh
 function getFactorial(value) {
  let result = 1;
  let i = 1;
  while (i <= value) {
    result = result * i;
    i++;
  }
  return result;
}
const myFactorial = 5;
const myFactorialresult = getFactorial(myFactorial);
console.log("Value of 5! is:", myFactorialresult);
const herFactorial = 6;
const herFactorialresult = getFactorial(herFactorial);
console.log("Value of 6! is:", herFactorialresult);
 ``` 
8. // For loop reverse factorial counting
 ```sh
 function getFactorial3(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
let myfactorialValue1 = 5;
let myfactorialValueresult1 = getFactorial3(myfactorialValue1);
console.log("Value of 5! reverse is:", myfactorialValueresult1); 
 ```
9. String comparison using toLowerCase toUpperCase
```sh
 const unserName='blackPink';
const unserInput='blackPinK';
console.log(unserInput.toUpperCase()); //for make value uppercase
console.log(unserInput.toLowerCase()); //for make value lowercase
if(unserName.toLowerCase==unserInput.toLowerCase){
  console.log('valid user');
}
else{
  console.log('Invalid User');
} 
```
10. Apply Search includes, indexOf, startswith, endswith
```sh
1. Example-1:includes
// JavaScript String includes()
let text = "Hello world, welcome to this universe.";
let result = text.includes("world");
console.log(result); 
2. Example-2:includes
const lyrics="tumi bondhu kala pakhi ami jeno ki bosonter kale tomake bolte parini";

const searchString ='PakhI';
// const doesExist=lyrics.includes('pakhi');
// const doesExist=lyrics.includes('Pakhi');
// const doesExist =lyrics.includes(searchString);
/* const lyricsLowerCase =lyrics.toLowerCase();
const searchStringLowerCase =searchString.toLowerCase();
const doesExist=lyricsLowerCase.includes(searchStringLowerCase); */
// console.log(doesExist);
// or
const doesExistOneLine=lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);

2. Example-3:all together
const lyrics="tumi bondhu kala pakhi ami jeno ki bosonter kale tomake bolte parini";

const searchString ='PakhI';
// const doesExist=lyrics.includes('pakhi');
// const doesExist=lyrics.includes('Pakhi');
// const doesExist =lyrics.includes(searchString);
/* const lyricsLowerCase =lyrics.toLowerCase();
const searchStringLowerCase =searchString.toLowerCase();
const doesExist=lyricsLowerCase.includes(searchStringLowerCase); */
// console.log(doesExist);
// or
const doesExistOneLine=lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExistOneLine);

// IndexOf
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('nai'));
console.log(lyrics.indexOf('tumi'));

if(lyrics.indexOf('sada')!=-1){
    console.log('sada found');
}
else{
    console.log('sada not found');
};
// startWith output=true or false
console.log(lyrics.startsWith('tumi'))

// endWith output=true or false
const fileName='mybiodata.pdf';
const otherFile='mypic.png';
console.log(fileName.endsWith('.pdf'))
```
11. How to split, slice, substr, substring, concat, join
```sh
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

```
12. write a function that will take 3 numbers will return the max number using math.min and math.max
```sh
function findMax(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
const maxNum = findMax(13, 79, 45);
console.log(maxNum); // Output: 79 
```
13. Who is the tallest? Find the max number in an array
```sh
function maxInArray(number) {
  let largest = number[0];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const heights = [121, 124, 125, 164, 156, 164];
const tallest = maxInArray(heights);
console.log("tallest person is:", tallest);
```
14. Reverse a string and Reverse words in a sentence
```sh
// Reverse a string and Reverse words in a sentence
 
//Reverse a string
/* function reverseString(text){
  let reversed='';
  for(let i=text.length-1; i>=0;i--){
    const element=text[i];
    reversed=reversed+element;
    console.log(element,reversed);
  }
  return reversed;
}
const myString= 'I am a good boy';
const reversed=reverseString(myString);
console.log('Reversed output string:',reversed); */ 

// Reverse words in a sentence
 /* function reversedWords(str){
  const words=str.split(' ');
  const result=[];
  for(let i=words.length-1; i>=0; i--){
    const element=  words[i];
    result.push(element);
  }
  console.log(result);
}
const myString= 'I am a good boy';
reversedWords(myString);  */
```
15. Fibonnacci series problem
```sh
const fibo =[0,1];
for (let i=2; i<=10; i++){
  fibo[i]=fibo[i-1]+ fibo[i-2];
}
console.log(fibo);
```
