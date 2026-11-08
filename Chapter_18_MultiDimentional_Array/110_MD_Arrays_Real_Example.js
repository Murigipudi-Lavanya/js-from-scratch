/*
Difference between console.log and process.stdout.write
console.log() adds a new line after each output, while process.stdout.write() does not add a new line after each output. 
This means that if you use console.log() multiple times, each output will be on a new line,
while if you use process.stdout.write() multiple times, the outputs will be on the same line unless you explicitly add a new line character (\n) at the end of the output.   
*/
let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for(let i=0; i<testMatrix.length; i++){
    for(let j=0; j<testMatrix[i].length; j++){
        process.stdout.write(testMatrix[i][j] + " ");
    }

  //  process.stdout.write("\n");
}
