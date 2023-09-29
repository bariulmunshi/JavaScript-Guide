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
