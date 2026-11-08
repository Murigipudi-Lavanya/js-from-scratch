// All resolves scenario
let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");


Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All checks:", results);
})


/* 2 resolve and 1 reject scenario
Promise.all if it has a reject, it will not resolve and will 
immediately go to the catch block.
*/
Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
])
    .then(function (r) { console.log(r); }) 
    .catch(function (err) { console.log("Failed:", err); });