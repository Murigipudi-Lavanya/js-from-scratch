// Standard Function
/* function multiply(a, b) {
  return a * b;
} */

// Function Expression
const multiply = function(a, b) {
  return a * b;
};

/* After a function expression has been stored in a variable, 
 the variable can be used as a function: */

 let result = multiply(10, 5);
 console.log(result);