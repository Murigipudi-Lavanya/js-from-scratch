let api_response = null;
let result = api_response ?? "{}";
console.log(result);

let name = undefined;
let text = "missing";
let r = name ?? text; // nullish coalescing operator it will return the right hand 
// side value if the left hand side value is null or undefined
console.log(r);

let color_name = "Red";
let color_code = color_name ?? "#000"; // nullish coalescing operator it will 
// return the left hand

console.log(color_code);

let color1_name = null;
let color1_code = color1_name ?? "00"; // nullish coalescing operator it will 
// return the left hand
console.log(color1_code);