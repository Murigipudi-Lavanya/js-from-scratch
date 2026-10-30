let scores = [45, 82, 91, 60, 73];

let grades = scores.map(i => i > 70 ? "Pass" : "Fail");
console.log(grades);
/*
i = 45 > 70 -> Fail
    82 > 70 -> Pass
    91 > 70 -> Pass 
    60 > 70 -> Fail
    73 > 70 -> Pass

    output -> [Fail, Pass, Pass, Fail, Pass]
*/

// Filter
let passing = scores.filter(s => s >= 70);

/*
s = 45 >= 70 -> Fail
    82 >= 70 -> Pass
    91 >= 70 -> Pass 
    60 >= 70 -> Fail
    73 >= 70 -> Pass
*/
console.log(passing); // output 82 91 73