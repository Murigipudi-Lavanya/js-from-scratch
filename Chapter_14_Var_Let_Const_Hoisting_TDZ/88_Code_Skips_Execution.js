var a = 10;
console.log(a); // 10

function printHello() {
    console.log("Hello TheTestingAcademy");
    var a = 20;
    console.log(a); // 20
    if (true) {
        var a = 30;
        console.log(a); //30
    }
    console.log(a); //30
}
console.log(a); // This line of code is not executed
console.log("This line of code is not executed");

/* This is a function call so once the code executes the function the statements
after the function closure wont get executed
*/
printHello(); 

console.log("This line is executed");
// This line of code is excuted because this statement is after the function call