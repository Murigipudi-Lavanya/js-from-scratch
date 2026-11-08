/*
When we promise then at fumction calling .then is used to handle the result of the promise. 
The .then method takes two arguments: a callback function for the resolved
case, and another callback function for the rejected case. In this 
example, we are only handling the resolved case, which is why we only 
provide one function to .then.  

reject is used to handle the case when the promise is rejected, 
which means that the operation failed.
so should handle the error in the catch block the catch block is executed only when 
the promise is rejected.
*/

let apicall = new Promise((resolve, reject) => {

    resolve({ status: 200, body: "User Data" });
});

apicall.then((data) => {
    console.log("Data received: ", data);
});
