- What I learnt from previous Chapter-1 to Chapter-5
- variable,array,condition,loop,function,object
# Table of Contents
# Basic Problem solving
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
11. How to split, slice,splice, substr, substring, concat, join
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
//splice 
//step-1:
const friends = [23,24,56,44,233,56,12,11,34,6];
const partial=friends.splice(2,4);
console.log(partial);
console.log(friends);
//step-2:
const friends1 = [23,24,56,44,233,56,12,11,34,6];
const partial1=friends1.splice(2,4,32,'hello world');
console.log(partial1);
console.log(friends1);

//more examples:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
const newFruits=fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

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
16. Remove duplicate items from an array
```sh
const names=['abul','babul','asif','fokir','abul','babul','monir']
function remoteDuplicate(names){
  const unique=[];
  for(let i=0; i<names.length;i++){
    const name=names[i];
    if(unique.includes(name)===false){
      unique.push(name);
    }
  }
  return unique;
}
const uniqueNames=remoteDuplicate(names);
console.log(uniqueNames); 
```
17. foo bar foobar math problem using for loops
```sh
/* 
1.show output from 1-50
2.if the number is divisible by 3 then instead of the number show 'foo'
3.if the number is divisible by 5 then instead of the number show 'bar'
4.if the number is divisible by 3 and 5 both then instead of the number show 'foobar'
 */
 for(let i=1;i<=50;i++){
  if(i%3==0 && i%5==0){
    console.log('foobar');
  }
  else if(i%3==0){
    console.log('foo');
  }
  else if(i%5==0){
    console.log('bar');
  }
  else{
    console.log(i);
  }
} 
```
18. Wood calculation using Function
```sh
/* 

fixed: Per Item Wood Requirements
1. Chair -->3 cft
2. Table --> 10 cft
3. Bed --> 50 cft

vary: Quantity

*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;
    const chairWood=perChairWood+chairQuantity; 
    const tableWood=perTableWood*tableQuantity;
    const bedWood=perBedWood*bedQuantity;
    const totalWood=chairWood+tableWood+bedWood;
    return totalWood;
}   
const totalWood=woodCalculator(2,2,5);
console.log('Total Wood Requirement:',totalWood);
```
19. Find the cheapest phone from an array of phone objects
```sh
const phones = [
    {
        name: 'Samsung',
        camera: '12',
        storage: '32gb',
        price: 3600,
        color: 'red'
    },
    {
        name: 'Walton',
        camera: '10',
        storage: '32gb',
        price: 3000,
        color: 'Green'
    },
    {
        name: 'iphone',
        camera: '16',
        storage: '32gb',
        price: 336000,
        color: 'Silver'
    },
    {
        name: 'Xiaomi',
        camera: '20',
        storage: '32gb',
        price: 3800,
        color: 'white'
    },
    {
        name: 'Samsung',
        camera: '12',
        storage: '32gb',
        price: 4000,
        color: 'red'
    },
    {
        name: 'Oppo',
        camera: '10',
        storage: '32gb',
        price: 3900,
        color: 'Neon'
    },
    {
        name: 'Realme',
        camera: '16',
        storage: '128gb',
        price: 30000,
        color: 'Blue'
    }
]

function cheapestPhone(phones) {
    let cheapest=phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;    
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
```
20. Calculate the total cost of the products in a shopping cart
```sh
const shoppingCart=[
    {
        name:'shoes',
        price:1500,
        quantity:'5'
    },
    {
        name:'shirts',
        price:1000,
        quantity:'2'
    },
    {
        name:'Pants',
        price:1700,
        quantity:'9'
    },
    {
        name:'T-Shirts',
        price:500,
        quantity:'2'
    }
];

function totalCost(products){
    sum=0;
  for(let i=0;i<products.length;i++){
    const product=products[i] 
    const productTotal=product.price*product.quantity;       
    // sum+=product.price;
    sum=sum+productTotal;
  }
  return sum;
}

const expense=totalCost(shoppingCart);
console.log('Total expense today', expense);
```
21. Multi-layer discount price calculation
```sh
/* 
1.If ticket number  less than 100, per  ticket price:100
2.if  ticket number is more than 100, but less than 200. First 100  tickets will be 100/ticket.
rest tickets will be 90tk per pice
3.if you purchase more than 200 tickets
first 100--->100tk
101-200----->90tk
200+--------->70tk
*/
 function ticketPrice(ticketQuantity){
  const first100rate=100;
  const second100rate=90;
  const restTicketrate=70;
  if(ticketQuantity<=100){
    const price=ticketQuantity*first100rate;
    return price;
  }
  else if(ticketQuantity<=200){
    const first100price=100*first100rate;
    const restTicketQuantity=ticketQuantity-100;
    const restTicketPrice=restTicketQuantity*second100rate;
    const totalPrice=first100price+restTicketPrice;
    return totalPrice;
  }
  else{
    const first100price=100*first100rate;
    const second100Price=100*second100rate;
    const restTicketQuantity=ticketQuantity-200;
    const restTicketPrice=restTicketQuantity*restTicketrate;
    const totalCost=first100price+second100Price+restTicketPrice;
    return totalCost;
  }
}
const price=ticketPrice(110);
console.log('Price:',price); 
```
21. Handle unexpected function input parameter error
```sh
/* function add(num1,num2){
  if(typeof num1 !=='number' || typeof num2 !=='number')
  {
    return 'Please enter a number';
  }
  return num1+num2; 
}
const result=add('12',45);
console.log(result); */
```
22. what you can do with JavaScript Object
```sh
const student={
  name:'Bariul',
  id:201-15-3314,
  address:'Mirpur-1,Dhaka,Bangladesh',
  isMarried:false,
  friends:['Hasan','Benu','Rakib','Labib','Rasel'],
  movies: [{name:'No.1',year:2020},{name:'King khan',year:2018}],
  act:function(){
    console.log('Acting like shakib khan');
  },
  car:{
    brand:'tesla',
    price:40000000,
    made:2025,
    manufacturer:{
      name:'tesla',
      ceo:'Elon Mask',
      country:'USA'
    }
  }
}
// console.log(student.car);
console.log(student.act);
student.act()
```

23. For of loop
```sh
const numbers=[323,434,5,6];
// traditional process
for (var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

//for of loops
for (const number of numbers){
    console.log(number);
}
```
24. Find the matching product by searching products
```sh
const phones=  [
    {name:'xiaomi node 7', camera:12,storage:'32gb',price:3600,color:'silver '},
    {name:'Samsung node 11', camera:12,storage:'32gb',price:3500,color:'silver '},
    {name:'iphone node 12', camera:12,storage:'32gb',price:3200,color:'silver '},
    {name:'oppo node 33', camera:12,storage:'32gb',price:3000,color:'silver '},
    {name:'Nokia node 12', camera:12,storage:'32gb',price:3300,color:'silver '},
    {name:'HTC node 2', camera:12,storage:'32gb',price:3100,color:'silver '},
    {name:'Tecno node 1', camera:12,storage:'32gb',price:3900,color:'silver '},
    {name:'Walton node 9', camera:12,storage:'32gb',price:3700,color:'silver '},
  ];
/*  for (const phone of phones){
   console.log(phone);
 } */
  function matchedProduct(phones,search){
    const matched=[];
    for (const phone of phones){
         if(phone.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(phone);
      }
      return matched;
    }
  }
  const result5=matchedProduct(phones,'7');
  console.log(result5);
```