let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

/*
map() transforms each array item into a corresponding item in a new array
reduce() combines all elements of an array into a single value
*/

let totalScores = scores.map(student =>
    student.reduce((sum, score) => sum + score, 0));
/*
In (sum, score), sum is the accumulated result so far, and score is the current item. 
The final 0 is the starting value for sum.
*/

console.log(totalScores); // Output: [253, 175, 275]  