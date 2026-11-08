/* 
Pyramid Doom is a term used to describe a situation in programming 
where multiple nested callbacks lead to code that is difficult to read 
and maintain. This often occurs in asynchronous programming, 
where each callback depends on the result of the previous one, 
creating a "pyramid" shape in the code structure.
*/
function step1(callback) {
    console.log("Open browser");
    callback();
}

function step2(callback) {
    console.log("Navigate to page");
    callback();
}

function step3(callback) {
    console.log("Click button");
    callback();
}

function step4(callback) {
    console.log("Click button");
    callback();
}

step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                console.log("Done!");
            });
        });
    });
});