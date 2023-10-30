var height; //Declares variables which can be re-declared
let height; //Declares variable but alos prevent it from bring re-declared somewhere else in the program

console.log("Whatever you want to print");
//This gets printed in the Console tab of Inspect Element window when you open the HTML file to which this js file is linked to
height=100;
console.log(height);
height=200;
console.log(height);
//Prints 100 and 200 in the next line but throws error as var and let both are there.