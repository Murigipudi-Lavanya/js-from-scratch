/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/


let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.

let undefinedValue; // This is an undefined literal assigned to the variable 'undefinedValue'.

console.log(nullValue);
console.log(undefinedValue);

console.log("Datatype of nullValue is:" + typeof(nullValue) );
console.log("Datatype of undefinedValue is:" + typeof(undefinedValue) );    
