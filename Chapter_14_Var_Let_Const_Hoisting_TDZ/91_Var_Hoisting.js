console.log(greeting); /* Here greeting is not declared but in the next step 
it is declared as var and by default when a variable is declared as var the
default value undefined will be assigned
*/
var greeting = "Hello";
console.log(greeting);


// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"