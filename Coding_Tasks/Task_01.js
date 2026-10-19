// Calculate the letter grade based on a numeric score. 
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.

const data = require('fs').readFileSync(0, 'utf8');

switch (true){
    case data >= 90:
        console.log('A');
        break;
    case data >= 80 && data < 90:
        console.log("B");
        break;
    case data >= 70 && data < 80:
        console.log("C");
        break;
    case data >= 60 && data < 70:
        console.log("D");
        break;
    case data < 60:
        console.log("F");
        break;
}
