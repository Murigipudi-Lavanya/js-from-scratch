// An object reference lets a function change the same object.
let student = {
    name: "Mia",
    score: 80
};

function giveBonus(person) {
    person.score = 100;
}

giveBonus(student);

console.log(student.score); // Output: 100

// JavaScript passes the object reference by value.
// So changing its property affects the shared object, but reassigning
// the parameter itself does not replace the original variable.