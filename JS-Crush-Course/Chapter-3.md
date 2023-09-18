 # Table of Contents
 # What's loop?
 # // while loop, debug and understand while loop
 1. Example-1
 ```
  var roastGiven=0;
  while(roastGiven<7){
  console.log( 'Roast den,Please!!')
  console.log(roastGiven);
  // roastGiven=roastGiven+1;
  // roastGiven+=1;
  roastGiven++;}
 ```
# while loops, odd numbers, even numbers print even numbers 
1. Odd numbers
var number = 1;
while (number < 100) {
  console.log(number);
  number += 2;
}
2. Even numbers
var number = 2;
while (number < 100) {
  console.log(number);
  number += 2;
}
# For loop, how for loop works, while vs for loop
1. // while vs for loop
var roastGiven=0;
while(roastGiven<7){
  console.log( 'Roast den,Please!!')
  console.log(roastGiven);
  // roastGiven=roastGiven+1;
  // roastGiven+=2;
  roastGiven++;
}  
// vs
 for (var roastGiven = 0; roastGiven < 7; roastGiven++) {
  console.log(roastGiven);
  console.log("Roast den,Please!!");
} 
2. // short variable
for (i = 0; i < 7; i++) {
  console.log(i);
}
3. //  even number
for (i = 2; i < 100; i += 2) {
  console.log(i);
}
4. // odd number
for (i = 1; i < 100; i += 2) {
  console.log(i);
}
# Run a loop for each element of an array
1. example-1
var number = [23, 2, 3, 233, 2, 3, 222,3, 233, 2, 3,3];
for (i = 0; i < 7; i++) {
  console.log(number[i]);
}
//or
 var number = [23, 2, 3, 233, 2, 3, 2];
for (i = 0; i < 7; i++) {
  element = number[i];
  console.log(element);
}
// or 
var object = ["khatha", "kolom", "apple", "ball"];
for (var i = 0; i < object.length; i++) {
  item = object[i];
  console.log(item);
}
# while and for loop break and continue
1. // loop break
for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
} 
2. // array break and continue
- //break
var numbers = [12, 124, 433, 33, 3, 32, 13, 43, 23, 100, 43];
for (i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  console.log(number);
  if (number > 100) {
    break;
  }
}  
- //continue
var numbers = [12, 124, 433, 33, 3, 32, 13, 43, 23, 100, 43];
for (i = 0; i < numbers.length; i++) {
  var number = numbers[i];

  if (number > 120) {
    continue; 
  }
  console.log(number);
} 

# Understand for and while loop in a reverse way
1. Example-1
/* var num=0;
while(num<10){
  console.log(num);
  num++;
}
 */
var num=10;
while(num>1){
  console.log(num);
  num--;
}