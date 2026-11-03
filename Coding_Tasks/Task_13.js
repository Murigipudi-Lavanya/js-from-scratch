/*Write a program to check if a given string is a palindrome 
(reads the same forwards and backwards). */

const str = "racecar";
let strReverse = str.split("").reverse().join("");
//console.log(strReverse);

if (str == strReverse) {
    console.log("YES")
}
else {
    console.log("NO")
}