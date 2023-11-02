"use strict"; //This statement forces the compiler to behave according to modern Javascript Standards

var height; //Declares variables which can be re-declared
//Treats blocks like {} as normal and remains as global variable if delcareed inside them
//BUTTT Works like local if declared between functions

let height; //Declares variable but alos prevent it from bring re-declared somewhere else in the program
//Treats blocks{} separately and becomes local variables if declared inside the block 

console.log("Whatever you want to print",height," this");
//This gets printed in the Console tab of Inspect Element window when you open the HTML file to which this js file is linked to
//For concatenation,we can use either + or ,
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

function TestFunction()
{
    console.log("TestFunction has been called");
}

//This is called *Variable Shadowing*,ie global and local variables can be declared with the same name.
//Whenever the variable is used inside the block/function,the local value is used. 
let  counter  =  100;
console.log(counter);  //  ->  100
{
       counter  =  200;
       //if let counter=200 ,then outside console.log will print 100
       console.log(counter);  //  ->  200
}
console.log(counter);  //  ->  200


/*This is called Hoisting.Whenever we declare a variable somewhere else in a prog.,the 
interpreter first goes through the program and places all the declarations of the variables 
at the starting of the program.THIS WORKS ONLY WITH VAR.
If we use let or const instead of var height,we'll get ReferenceError for the first log.*/
var height = 180;
console.log(height); // -> 180
console.log(weight); // -> undefined
var weight = 70;//If this is not there ,the previous statement gives ReferenceError:weight not defined.
console.log(weight); // -> 70

