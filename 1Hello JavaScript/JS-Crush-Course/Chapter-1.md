# Table of Contents
# What's JavaScript?
1. A script language that allows to implement complex  features on web pages.
2. Can be said as a programming language for the web. 
3. More interactive web pages,interpreted language and runs on client's side computers.
4. high-level,Interpreted programming language.It makes web pages more interactive.We can use JavaScript to make animations.
5. Variable like a box that store things. There are five types of variables 1.primitive(number, string, boolean, null and undefined) 2.non-primitive(object,array,function).
6. JavaScript keywords are reserved words and they can not be used as variable name and function name.
7. Camel case,SnakeCase and pascal case are the three most common naming conventions.
8. Variables names are case insensitive
# What's let,const?
1. 
# What's Variable? 5 things you need to declare a variable
1. কোনও একটা value যেকোনো সময় কাজে লাগানোর জন্য সংরক্ষণ করার মতো একটা জায়গা হোল variable.

# What's Data type, Numeric, String, Boolean?
```sh
const country='Bangladesh'; //string
const age =52; //number
const isIndependent=true; //boolean
const student={id:121,class:23,name:'Masud'}; //object
function add(num1, num2){       //function
  return num1+num2;
}
const friends=[23,35,33,34,35];  //Array
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof add);
console.log(Array.isArray(friends));


// more
var price =200;
//console.log(typeof price); //number
var price ='100';
// console.log(typeof price); //string
var isHappy=true;
// console.log(typeof isHappy); //boolean
var romantic;
console.log(typeof romantic); //undefined 
```
# JavaScript Keyword, Variable name naming convention
1. 
# Addition, minus,multiply,division & remainder operations in JavaScript(Practical)
```sh
// Simple Mathematical operation in javascript
// Addition
var onionPrice=30;
var eggPrice=32;
var totalPrice =onionPrice+eggPrice;
 console.log(onionPrice);
 console.log(eggPrice);
 console.log(onionPrice+eggPrice);
console.log(totalPrice);
// Minus
var priceDifference=onionPrice-eggPrice;
console.log(priceDifference);
// Multiply
var orangePrice=20;
var quantity=10;
var totalCost=orangePrice*quantity;
console.log(totalCost);
// division
var money=400;
var player=4;
var eachPlayer=money/player;
console.log(eachPlayer);

// remainder
var mangoes =11;
var person =2;
console.log(mangoes/person);
console.log(mangoes%person);
```
# Mathematical operation shorthand
```sh
 //variable delaration
var tomatoPrice=25;
//variable value update
tomatoPrice=30;
console.log(tomatoPrice);

//add something to the previsous value
var price1 =20;
price1 =price1+20; 
// or,
// price1 +=20; //addition to the same variable shorthand
console.log(price1);
var price2 =39;
price2 -=5; //or price2 =price2-5; 
console.log(price2);

//++ means adding 1 to  the existing value which is increament 
var age =24;
age++;
console.log(age);
//-- means deducting 1 to the existing value which is decreament
age--;
console.log(age);
```
# String Concatenation, type conversion parseInt parseFloat
```sh
1. Concatenation
var  price1= 30;
var price2 =32;
var totalPrice=price1+price2;
// console.log(totalPrice); 
var firstName ='jannie';
var lastName ='kim';
var fullName =firstName+ ' ' +lastName;
console.log(fullName); //String concatenation

2. Type conversion parseInt and paseFloat
var price1="31";   
var price2= '10';
var totalPrice =price1 +price2;
console.log(totalPrice);
//or,
var price1="31";   
var price2= 10; //or var price1=31;
var totalPrice =price1 +price2;
console.log(totalPrice);  

 //convert string to number
var price1number=parseInt(price1) //parseInt for int value
console.log(price1number);
//&
var gpa= "3.42";
var gpaNumber =parseFloat(gpa); //parseFloat for float value
console.log(gpaNumber);
```
# toFixed parseFloat value
```sh
//toFixed
var num1 =0.2;
var num2 =0.3;
var sum =num1 + num2;
//sum = sum.toFixed(1); /* how much number I want to see after decimal that have to fixed and that's return  to string value */
sum =parseFloat(sum); //to fixed string value
console.log(sum);
```
# Problem Solving Phase-1

