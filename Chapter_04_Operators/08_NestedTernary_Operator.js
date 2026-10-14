let marks = 45;
let exam_result =  marks >= 75 ? "Distinction" : (marks>=60 ? "FirstClass"
    : (marks>=50 ? "SecondClass" : (marks>=35 ? "Pass" : "Fail")
))

console.log(exam_result); // Pass