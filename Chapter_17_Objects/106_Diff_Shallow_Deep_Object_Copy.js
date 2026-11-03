/*
In Shallow copy only the top level keys are copied and the nested keys are shared 
with the original object. 
So if we change the nested key in the shallow copy it will affect the original object.

In Deep copy everything is copied and not shared with the original object.

*/

let original = {
  status: "pass",
  details: { score: 10 }
};

let shallowCopy = { ...original }; // Shallow copy of the original object
shallowCopy.status = "fail";
shallowCopy.details.score = 5; // Modifying nested object in shallow copy

console.log(original.status); // Output: pass
console.log(original.details.score); // Output: 5 (nested object is shared)



// Deep copy example
let original1 = {
  status: "pass",
  details: { score: 10 }
};

let deepCopy = structuredClone(original); // Deep copy of the original object
deepCopy.status = "fail";
deepCopy.details.score = 0; // Modifying nested object in deep copy

console.log(original.status); // Output: pass
console.log(original.details.score); // Output: 10 (nested object is not shared)
