// Comparison Operators are ==, ===, !=, !==, >, <, >=, <=

let person1_age = 25;
let person2_age = 30;
let person3_age = "25";
let person4_is_adult = true;
let person5_is_not_adult = false;  

console.log(person1_age == person2_age); // false
console.log(person1_age != person2_age); // true
console.log(person1_age > person2_age); // false
console.log(person1_age < person2_age); // true
console.log(person1_age >= person2_age); // false
console.log(person1_age <= person2_age); // true

console.log(person1_age == person3_age); // true (loose equality)
console.log(person1_age === person3_age); // false (strict equality)    

console.log(person4_is_adult == person5_is_not_adult); // false
console.log(person4_is_adult != person5_is_not_adult); // true
console.log(person4_is_adult === person5_is_not_adult); // false
console.log(person4_is_adult !== person5_is_not_adult); // true

console.log(5!= "5") // false
console.log(5!== "5") // true