let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms")
    }), 500
});

let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 500ms")
    }), 100
});

Promise.race([slowServer, fastServer]).then(function (winner) {
    console.log("Winner:", winner);
})