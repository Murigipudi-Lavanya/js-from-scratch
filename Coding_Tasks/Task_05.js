const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

// Task is to print Fullname of all the users using map function

let usersFirstName = users.map(x => x.firstName + " " + x.lastName);

console.log(usersFirstName)

/* Use Filter to Print object having marks greater than 60 
 and rollNumber greater than 15. */

let student =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];

let result = student.filter(x=> x.marks >60 && x.rollNumber>=15)

console.log(result)

/* Task 3 List of all firstName from array whose age is more than 30 
1. use filter to check for the age condition 
2. use map to get the firstname  */

let result_FirstName = users.filter((x)=>x.age>30).map((x)=>x.firstName);

console.log(result_FirstName)
