- What I learnt from previous chapter-1 to chapter-4
- `Variable,array,condition,loop,function`
# Table of Contents
# what's Object?
1. 
# Declare multiple objects with multiple properties
```sh
var student = {
  id: "201-15-3314",
  name: "Md. Bariul Munshi",
  phone: '01756346427',
  address: "Dhaka",
};

var mobile = {
  color: "black",
  screenSize: "6inch",
  ram: "8gb",
  rom: "128",
  price: "30k",
};

var book = {
  title: "ready to go",
  author: "Bariul",
  price: 240,
  page: 120,
  publisher: "penguin",
};
console.log(student,mobile,book);
console.log(student.name);
console.log(student);
student.id='201-15-3315'
console.log(student);
```

# Difference between array and object
- //array
var friendsAge=[22,1,2,23,31];

- // object
var friendsAge={
  bariul:22,
  hasib:1,
  arafat:2,
  mamun:23,
  kasfi:31
}
#  multiple ways to get and set object property
```sh
var shoppingCart={
  books:3,
  sunglass:1,
  Keyboard:5,
  mouse:1,
  pen:23
}
//when you know the specific property name, use dot notation to get the property value
var penCount=shoppingCart.pen;
// console.log(penCount);
//alternative way to get the property value
var penCount2=shoppingCart['pen'];
// or
var propertyName='mouse';
var propertyValue=shoppingCart[propertyName];
console.log(propertyName, propertyValue);


// to get the all property/key name of object 
var properties=Object.keys(shoppingCart);
// console.log(properties);

// to get the all property/key value name of object 
var propertiesValues=Object.values(shoppingCart);
// console.log(propertiesValues);

//set properties values 
shoppingCart.mouse=29;
console.log(shoppingCart);
shoppingCart["mouse"]=9;
console.log(shoppingCart);
shoppingCart[propertyName]=19;
console.log(shoppingCart);


//More examples
// Get specific object’s  property name syntax:
var computer = {
  prices: "60k",
  processor: "ryzen 3400G",
  monitor: "Bnq",
  ram: "8Gb",
  storage: "1gb",
  ssd: "available 250gb",
  ssdBrand: "HP",
};
console.log(computer.monitor); //more convinient
// or,
var computerMonitor = computer.monitor; 
// console.log(computerMonitor);
// set a object property value
computer.monitor = "samsung"; //more convinient
// or,
// computer["monitor"] = "XIAOMI";
// or,
// var newMonitorUpadatedBrand = "monitor";
// computer[newMonitorUpadatedBrand] = "Asus";
console.log(computer);
```
# Looping through an Object and Object summary
```sh
 var shoppingCart={
  books: 3,
  sunglass:1,
  keyboard:4,
  mouse: 3,
  pen:3,
  shoes:3
  }
  console.log(shoppingCart); // get properties/keys and values from object
   const keys=Object.keys(shoppingCart);
   console.log(keys); //get object properties 
   const values=Object.values(shoppingCart); //get object values
   console.log(values);
  /* 
   for(var i=0;i< keys.length;i++){
    console.log(keys[i]); //get object property
   } */
  
  //  object property and value get together by using loop
   /* for(var i=0;i< keys.length;i++){
     var propertyName=keys[i];
     var propertyValue=shoppingCart[propertyName];
     console.log(propertyName,propertyValue);
   } */
  //  or
  //  for in loop
  for(var propertyName in shoppingCart){
    const value =shoppingCart[propertyName];
    console.log(propertyName,value);
  }
```
