let [first, second, third] = [10, 20, 30];

console.log(first); // 10
console.log(second); // 20
console.log(third); // 30

let [a,b, ...rest] = [10,20,30,40,50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // 30,40,50

let [, , thirdonly] = [10, 20,30];
console.log(thirdonly); // 30
