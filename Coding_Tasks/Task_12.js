/* Write a program to remove duplicate characters from a given string. */

str = "Hello World";
let output = [];

for (let i = 0; i < str.length; i++){
    if (!output.includes(str[i])){
        output.push(str[i]);
    }
}
console.log(output.join(""));