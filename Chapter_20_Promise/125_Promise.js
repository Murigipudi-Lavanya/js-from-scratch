let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");
});

testRun.then(function (data) { // Resolve
    console.log(data);
}).catch(function (error) { // Reject
    console.log(error);
});