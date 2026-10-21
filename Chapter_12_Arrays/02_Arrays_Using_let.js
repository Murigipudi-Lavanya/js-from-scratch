let browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
console.log(browsers[0]); // Output: Chrome
console.log(browsers[2]); // Output: Safari
console.log(browsers[-1]); // Output: undefined
console.log(browsers[5]); // Output: undefined
console.log(browsers.length); // Output: 5

console.log(typeof(browsers)); // Output: object

/*  When we use let to declare an array then [-1] is not a valid index  
and will return undefined. 

In order to use negative indexing, we can use the at() method.
*/

console.log(browsers.at(-1)); // Output: Opera
