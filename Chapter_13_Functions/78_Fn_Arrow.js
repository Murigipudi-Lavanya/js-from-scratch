// normal function
function greet(name){
    return `Hello, ${name}`;
}

// Expression Function
const greet1 = function(name){
    return `Hello, ${name}`;
}

// Arrow Fn
const greet2 = (name2) => `Hello, ${name2}`;
/* If you want to make a normal function to arrow function. 
 Remove the keyword function, remove the keyword return, 
 remove the curly braces, and use the => */

 console.log(greet("NormalFunction"));

 console.log(greet1("ExpressionFunction"));

 console.log(greet2("ArrowFunction"));