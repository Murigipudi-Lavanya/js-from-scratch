// A number is passed to the function as a separate value.
let score = 80;

function giveBonus(points) {
    points = 100;
    console.log(points); // Output: 100
}

giveBonus(score);

console.log(score); // Output: 80