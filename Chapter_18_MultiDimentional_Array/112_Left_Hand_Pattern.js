/* 
 *****
 ****
 ***
 **
 *
 
left Hand Triangle Pattern
there are n rows and n columns in the pattern. The number of stars in each
row is equal to n - i, where i is the current row index (starting from 0).
The number of spaces in each row is equal to i, which is the current row 
index.

*/
let n=5;
for (let i=0; i<n; i++){
    for(let j=0; j<n-i; j++){
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}