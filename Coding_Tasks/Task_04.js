const [a, b, c] = [5,5,3];

if (a === b && b === c && a===c) {
    console.log( "Equilateral");
}
else if (a === b || b === c || a === c) {
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}