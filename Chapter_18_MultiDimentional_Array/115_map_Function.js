let scores = [
    [85, 90, 78],   
    [60, 45, 70],  
    [95, 88, 92]    
];

let updatedScores = scores.map(student =>
    student.map(score => score + 5)
);

console.log(updatedScores); // Output: [[90, 95, 83], [65, 50, 75], [100, 93, 97]]    