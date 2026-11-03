/* Write a program to check if two strings are anagrams of each other. 
example: "listen" and "silent" are anagrams.
*/

let str1 = "listen";
let str2 = "milent";

let sortedStr1 = str1.split("").sort().join("");
let sortedStr2 = str2.split("").sort().join("");

if (sortedStr1 === sortedStr2) {
    console.log("YES");
} else {
    console.log("NO");
}

/* Using for loop */
let isAnagram = str1.length === str2.length;
let matched = new Array(str2.length).fill(false);

if (isAnagram) {
    for (let i = 0; i < str1.length; i++) {
        let foundMatch = false;

        for (let j = 0; j < str2.length; j++) {
            if (!matched[j] && str1[i] === str2[j]) {
                matched[j] = true;
                foundMatch = true;
                break;
            }
        }

        if (!foundMatch) {
            isAnagram = false;
            break;
        }
    }
}

console.log(isAnagram ? "YES" : "NO");