/* A callback is a function passed 
as an argument to another function. 
This technique allows a function to
 call another function. A callback function
  can run after another function has finished. */
//print: hello, world using callback function
function greet(name, callback) {
    const greeting =`hello, ${name}`;
    callback(greeting);
}
function logMessage(message){
    console.log(message);
}

greet("world",logMessage);