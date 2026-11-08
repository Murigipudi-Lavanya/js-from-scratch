let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");
});

testRun.catch(function (error) { // Reject
    console.log(error);
});