let a ={
    status: "pass",

};

let b = {...a}; // b is a shallow copy of the object a
b.status = "fail"; // This modifies the status property of the b object 
// but not the a object

console.log(b.status); // Output: fail
console.log(a.status); // Output: pass