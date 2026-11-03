/* Write a program to count the number of vowels and consonants in a given 
string. */

const str = "Hello World";
// Write your solution here
let vowels = ["a","e","i","o","u"];
let vowelsCount = 0;
let consonantsCount = 0;
let text = str.replace(/\s/g, "");

for (let i = 0; i < text.length; i++){
    if (vowels.includes(text[i].toLowerCase())){
        vowelsCount += 1;
    }
    else {
        consonantsCount += 1;
    }
}
console.log(`Vowels: ${vowelsCount}` + " " + `Consonants: ${consonantsCount}`);
