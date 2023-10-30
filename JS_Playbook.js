"use strict"; //This statement forces the compiler to behave according to modern Javascript Standards

var height; //Declares variables which can be re-declared
//Treats blocks like {} as normal and remains as global variable if delcareed inside them

let height; //Declares variable but alos prevent it from bring re-declared somewhere else in the program
//Treats blocks{} separately and becomes local variables if declared inside the block 

console.log("Whatever you want to print");//This gets printed in the Console tab of Inspect Element window when you open the HTML file to which this js file is linked to

height=100;
console.log(height);
height="Hello"
console.log(height);
//Prints 100 and 200 in the next line but throws error as var and let both are there.

const weight="Less"; // This is right,you can't re-declare weight="More" or some thing
/*
const heeight;
heeight=3; 

This is NOT valid
*/
let a=1;
{
    //This is a block.variable b is defined only till the bracket is closed
    let b=3;
    console.log(a+b);

}
