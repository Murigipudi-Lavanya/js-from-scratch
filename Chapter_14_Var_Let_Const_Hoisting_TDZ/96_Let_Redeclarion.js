let testName = "Login Test";
//let testName = "Signup Test"; // Redeclarion not allowed with let
//var testName = "Search Test"; // Redeclarion not allowed with let
testName = "Search Test"; // Re-assignment allowed with let
if(true){
    let testName = "Inside Block Test"; // Can Redeclare Block scope variable
    console.log(testName);
}
console.log(testName); 