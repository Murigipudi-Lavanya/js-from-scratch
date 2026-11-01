/*
 TDZ - Temporary Dead Zone - Is the period between extering a scope 
 and the line where a let, const or class variable is declared. During 
 this period the variable exists but is uninitialized accessing it throws a 
 Reference Error

*/
{
    console.log(a); // Reference error
    let a = 10;
}
// ReferenceError: Cannot access 'a' before initialization

// Enter Block
//  ↓
// a is created ✅
// if a -> var-> undefined
// if a -> let -> no value
// a has NO value yet ❌ 

// console.log(a) // Error TDZ (let, const), Var => undefined

// let a = 10;
//     ↓
// a = 10 ✅