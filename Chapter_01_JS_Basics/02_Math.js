let add =  3 + 9;
console.log("Adding numbers:" + add)

var subtract = 9 - 3;
console.log("Subtracting numbers:" + subtract)

const multiply = 3 * 9;

// Checking what happens when we try to reassign a value to a const variable

//multiply = multiply + 3; Type error conat assign a value to a const variable
console.log("Multiplying numbers:" + multiply)

let divide = 9 / 3;
console.log("Dividing numbers:" + divide)

var remainder = 9 % 3;
console.log("Remainder of numbers:" + remainder)    


// Using functions to add and subtract numbers

let addintNumbers = function(num1, num2){
    return num1 + num2;
}
console.log("Adding two numbers using function:" + addintNumbers(3, 9))

const subtractNumbers = function(num1, num2){
    return num1 - num2;
}
console.log("Subtracting two numbers using function:" + subtractNumbers(9, 3))