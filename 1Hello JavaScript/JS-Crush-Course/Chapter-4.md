- What I learnt from previous chapter-1 to chapter=3?
- `variable,array,condition,loop`
- function parameters value is is available within the function
# Table of Contents
# what's function? 
1. A block of code
2. A set of Statements(subprogram/block of code) that performs a task when it's called.
3. Maintains a relationship with input and output
# Everything you need to know about return from a function
```sh
// Structure of the function
/* function functionName(parameters){
  //function body
  //return
} 
var returnedvalue =functionName{parameters value} // there function called to the variable ,,,
*/

//example:
/* function getAverage(assignment1,assignment2,assignment3){ //here arguments/parameters are assignment1,assigment2,assignment3
  console.log('Three numbers:',assignment1,assignment2,assignment3);
  const total=assignment1+assignment2+assignment3;
  const average=total/3;
  return average; 
}
var averageOfThree=getAverage(23,26,23); //averageOfThree get the return value after perform two task(1.set parameter value, 2.call function to the variable)
console.log('Three number average:',averageOfThree);
 */

/* Four format Function code: of javascript there one is (no return no parameter) and another is (has return no parameter) and another is (no return has parameter) and last one is (has parameter has return)
Example below: */
        //1. No return, no parameters:
function greet() {
  console.log('Hello!');
}
// call the function
greet(); // output: 'Hello!'

     /*   //2. Has return, no parameters:
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
// call the function
const randomNum = getRandomNumber();
console.log(randomNum); // output: a random number between 0 and 9 */

/*        //3. No return, has parameters:
function greet(name) {
  console.log(`Hello, ${name}!`);
}
// call the function
greet('Alice'); // output: 'Hello, Alice!' */

      /* //4. Has return, has parameters:
function sum(a, b) {
  return a + b;
}
// call the function
const result = sum(3, 5);
console.log(result); // output: 8 */

```
# Declare a Function, call function, function vs loop
1. // function declaration, multiple declaration & call function
```sh
function startFan() {
  console.log("walk to the switch ");
   console.log("press the switch");
}
startFan();  //call function
console.log("Let's play video Game");
console.log("Let's go to the market ");
startFan();
startFan();
```
2. //set single parameter
```sh
function bringSingara1(moneys){
  console.log(moneys);
  console.log('Mama den'); 
}
bringSingara1(100);
```
# Add Function parameter, handle multiple parameters
```sh
function bringSingara(taka) {
  console.log("singara er jonno dise", money); //  console.log("singara er jonno dise", taka); 
  console.log("Mama singara den");
  var singaraPrice = 10;
  var singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}
var money = 100;
var singara = bringSingara(money);
console.log("ei nen singara", singara);

//more
function sum(a,b,c,d,e){
  console.log(a,b,c,d,e);
  var sum=a+b+c+d+e;
  console.log(sum);
}
sum(12,12,23,34)
// or 
 function sum(a,b,c,d,e){
  console.log(a,b,c,d,e);
  var sum=a+b+c+d+e;
  console.log(sum);
}
sum(12,12,23,34,1)
```
# Addition and multiplication with Function
```sh
// Simple addition with function
//example-1:
function add(num1, num2) {
  const sum=num1+num2;
  return sum;
}
const result1 =add(12,12);
const result2 =add(13,13);
console.log(result1,result2);

//example-2
function add(number1, number2) {
  console.log("Entered two numbers:", number1, number2);
  var result = number1 +number2;
 console.log(result);
}
add(39,32);

//example-3:
// addition of two numbers by using function with return
/* function addTwoNumbers(number1, number2) {
  console.log("Entered two numbers:", number1, number2);
  var total = number1 + number2;
  return total;
}
var firstNumber = 25;
var secondNumber = 25;
// var result = addTwoNumbers(firstNumber, secondNumber);
// console.log("Total  after Addition of Two numbers:", result);
// or
console.log("Total  after Addition of Two numbers:",addTwoNumbers(firstNumber, secondNumber)); */

//example-4:
// multiplication of two numbers by using function
 /* function multiplyTwoNumbers(number1, number2) {
  console.log("Entered two numbers:", number1, number2);
  var result = number1 * number2;
  return result;
}
var firstNumber = 10;
var secondNumber = 10;
var resultOfTwoNumbers = multiplyTwoNumbers(firstNumber, secondNumber);
console.log("Total  after Multiplication of Two numbers:", resultOfTwoNumbers);  */

```