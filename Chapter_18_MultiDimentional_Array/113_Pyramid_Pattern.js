/*  
   *
  ***
 *****

 1^2 - 1 --- 1 star
 2^2 - 1 --- 3 stars
 3^2 - 1 --- 5 stars
 */ 
let n = 3;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row = row + "*";
    }
    console.log(row);
}
