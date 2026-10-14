// Pre Increment Operator
let a = 10;
let b = ++a; // x=x+1; then a=x

console.log(b);
console.log(a);

// Post Increment Operator

let c = 10;
let d = c++; // a=x then x=x+1
console.log(d); // 10 
console.log(c); // 11

/*
Operator Type	Syntax	Order of Operations	Resulting Expression Value	Variable Value After
Pre-Increment	++x	    1. Increment x
                        2. Use value	           x + 1	                   x + 1

Post-Increment	x++	    1. Use current value
                        2. Increment x	           Original x	               x + 1. */

let x= 10;
console.log(++x + x); 
console.log(x);

let y = 10;
console.log(++y + y + y++);
console.log(y);

let i = 1;
let result = i++ + ++i;
console.log(result,i );