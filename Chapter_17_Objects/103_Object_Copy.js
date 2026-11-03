let a ={
    status: "pass",

};

let b = a; // b is a reference to the same object as a
b.status = "fail"; // modifying the status property of the object through b

console.log(b.status); // Output: fail
console.log(a.status); // Output: fail