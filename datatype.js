console.log("Welcome to console");
document.write("Hello everyone");

// data type in javascript
var general; // undefined
console.log(typeof general);
general=null; //object
console.log(typeof general);
general=4; //number
console.log(typeof general);
general="hi" //string
console.log(typeof general);
general=false;// boolean
console.log(typeof general);
general=[4,5,6,7]; // Array object
console.log(typeof general);
console.log(general[3]);
console.log(general[4]);
console.log(2+3); //+ acts as addtion
//prompt method to take some value 
// as input from the user
var num1=prompt("Enter some value");
// By default type of the value that is 
// written in a prompt is string
console.log(num1+9); 
//output of above statement will be 39
//But what if we want to add these two
//number than we can use parInt method.
console.log(parseInt(num1)+9);
console.log("File changed");