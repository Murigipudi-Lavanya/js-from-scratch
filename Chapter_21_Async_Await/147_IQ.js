console.log("A");
async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
test();
console.log("D");

/*
1) console.log("A") runs first.
2) test() starts, so console.log("B") runs.
3) await Promise.resolve() pauses test() and schedules the remaining part of it to continue later—even though the promise is already resolved.
4) Execution continues outside test(), so console.log("D") runs.
5) The paused function resumes, and console.log("C") runs.
*/