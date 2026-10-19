/* Write a Java program that prints a multiplication table for a 
 given number using printf formatting.

Input
5
Output
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50 */

const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
let result = '';
for (let a = 1; a <= 10; a++)
{
    result += `${data} ` + 'x ' + `${a} = ${data * a}\n`;
}
console.log(result);