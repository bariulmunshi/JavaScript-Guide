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
 