const arr = [1, 2, 1, 3, 2];
let output = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (arr.indexOf(arr[i]) === i) {
        output.push(`${arr[i]} appears ${count} times`);
    }
}

console.log(output.join("\n"));