/* n = 3
 *
 * *
 * * * 
 
[
 (0,0), (0,1), (0,2)
 (1,0), (1,1), (1,2)
 (2,0), (2,1), (2,2)
 ]

 Right Hand Pattern
 (0,0)
 (1,0) (1,1)
 (2,0) (2,1) (2,2)

 i>=j for * position and i<=j for space position
*/
let n =3;
for (let i=0; i<n; i++)
{
   for (let j=0; j<=i; j++){
    process.stdout.write("* ");
   }
   process.stdout.write("\n");
}