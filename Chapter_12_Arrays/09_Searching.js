let results = ["pass", "fail", "pass", "error", "fail"];

console.log(results.indexOf("fail")); //1
console.log(results.indexOf("skip"));  // -1

// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail")); // fail is mentioned twice so
//last index retunrs fail index which is at last 

// includes — returns boolean
console.log(results.includes("error")); // true