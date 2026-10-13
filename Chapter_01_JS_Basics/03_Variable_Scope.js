/* 
TODO : 1: Create a fucntion by declaring the variables using keyword let and check 
the scope by calling the function outside the function block.

T0DO : 2: Create a fucntion by declaring the variables using keyword var and check    
the scope by calling the function outside the function block.

let - Block scoped 
var - Function scoped
const - Block scoped
*/

let x = 5; // Global Scope variable
var _globalVar = 10; // Global Scope variable

let myFucnctionLet = function(){
    let y = 10 // Local Scope variable
   // x = 1
   let x = 2
   //let y = 1 // let does NOT allow Re-declaration in the same scope
    console.log("Inside the function myFucnctionLet: " + x);
    
    if (true) {
        let x = 20; // Block Scope variable
        console.log("Inside the block: " + x);

         y = 15 
        console.log("Inside the block: " + y);
    }
}
console.log("Before calling the function myFucnctionLet: " + x);
myFucnctionLet();
console.log("After calling the function myFucnctionLet: " + x);
// console.log("Outside the function myFucnctionLet: " + y); // This will throw an error because y is not defined outside the function block.


let myFucnctionVar = function(){
    var y = 10 
    _globalVar = 1
    var y = 0 // VAR allows Re-declaration in the same scope
    
    console.log("Inside the function myFunctionVar: " + _globalVar);
     y = 20; // updated the y value
     console.log("Inside the block: " + y);
     console.log("Inside the block: " + y);
   
}

myFucnctionVar();
var a = 3 // VAR allows Re-declaration in the same scope
var a= 4 // VAR allows Re-declaration in the same scope