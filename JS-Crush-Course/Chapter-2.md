# Table of Contents

# What's Array?
1. An array in JavaScript is a type of global object used to store multiple values in a single variable.

# Declare Array, array length and array index, indexOf, get and set value by index
1. Declare Array, array length 
 var friendsage = [23, 22, 20, 20];
 var murichanacurFee = [20, 25, 20, 30];
 var name = ["Hila", "Lila", "Mila", "Tila"];
 var oddNumbers = ["1", "3", "5", "7", "9"];
 var vowels = ["a", "e", "i", "o", "u"];
 console.log(friendsage);
 console.log(oddNumbers);
 console.log(name);
 console.log(vowels.length); //length 
2. Array IndexOf
- // array index position findout by value
var bookPackages = ["Hablu", "bolod", "hjem", "ej"];
var bolodindex = bookPackages.indexOf("bolod");  
//or,
console.log(bookPackages.indexOf("bolod"));
var numbers = [12, 21, 22, 44, 44];
console.log(numbers.indexOf(22));

3. Array  get and set value by index
var numbers = [12, 21, 22, 44, 44];
- // get value by index numbers
console.log(numbers[0]);
- // set value by  index numbers or change array value by index
numbers[1] = 100; 
console.log(numbers);

# Add or remove element from array using push,pop 
1. // push element to array
var nakies = ["Hila", "Lila", "Mila", "Tila"];
nakies.push("Pori-Moni");
nakies.push("Katrina");
console.log(nakies);
var friendsage = [23, 22, 20, 20];
friendsage.push(12);
console.log(friendsage);

2. // pop an element from an array
var friendsage = [23, 22, 20, 20];
friendsage.pop();
console.log(friendsage); // remove the last element
lastItem = friendsage.pop();
console.log(lastItem); // get the last element

3. // in javascript Remove first item from an Array and add array element in the beginning
- Remove first item
var friends = ["Anik", "Naim", "Plabon", "Naimur", "Rakib", "Minhaz"];
friends.shift(); 
// console.log(friends); //remove
- add array element in the beginning
var friends = ["Anik", "Naim", "Plabon", "Naimur", "Rakib", "Minhaz"];
friends.unshift("Numan");
console.log(friends);

# Compare variables and Comparison operator
1. // single condition
console.log(5 > 6);
console.log(5 < 6);
console.log(5 == 6);
console.log(5 < 6); 
console.log(5 != 6);
var mylove = 99;  
var yourlove = 100;
console.log(mylove > yourlove);

2. // multi condition
money1>money2 && result1<result && num1>num2
money1>money2 || result1<result2 

# Make conditional decision, if-else, comparison
1. // use of if
var isFoodReady = true;
if (isFoodReady == true) {
  console.log("mama!! I Wil eat now");
}
// or
if (isFoodReady == false) {
  console.log("mama!! I Wil eat now");
}
2. //Use of if (single condition)
var carPrice=1000000;
var myBudget=800000;
//if car price is less than my budget then I will buy the car otherwise I can't buy the car
/*
  here condition is: if(car price is less than my budget){
    execution code: I will buy the car
  }
  else{
    execution code: I can't buy the car
  }
*/
       //Use of if (single condition)
if(carPrice<myBudget){
  console.log('I will buy the car');
}

3. // (multi condition)
var carPrice=1000000;
var myBudget=800000;
var permissionBuyCar=true;
if(carPrice<myBudget || permissionBuyCar==true){
      console.log("I will buy the car");
}

4. // use of if else(single-condition)
if (carPrice<myBudget){
  console.log("I will buy the car");
}
else{
  console.log("I can't buy the car");
}
5. using if else //multi-condition
 if (carPrice<myBudget && permissionBuyCar==true){
        console.log("I will buy the car");
      }
      else{
        console.log("I can't buy the car");
      }
6. More examples:
if (isFoodReady == false) {
  console.log("mama!! I Wil eat now");
} else {
  // console.log("mama!! I Won't eat now");
}

// multi condition
var gotJob = true;
var hasFlat = false;
var hasHouse = true;
var moneySave = 500000;
if ((gotJob == true && moneySave > 200000) || hasHouse == true) {
  console.log("cholo biye kore feli");
} else {
  console.log("Tor kopale biye nai");
}
7. // nested (if ,else if...,if)
var danisPrice = 50;
var butterPrice = 25;
var toastPrice = 10;
var myBudgetPrice = 100;
if (toastPrice < myBudgetPrice) {
  console.log("I can buy toast");
} else if (danisPrice < myBudgetPrice) {
  console.log("I can buy danish");
} else if (butterPrice > myBudget) {
  console.log("I can buy butter");
} else {
  console.log("No,problem I can't buy anything");
}
// or
var packetWell = false;
if (danisPrice < myBudgetPrice) {
  if (packetWell == true) {
    console.log("I will buy");
  } else {
    console.log("I won't buy");
  }
}
