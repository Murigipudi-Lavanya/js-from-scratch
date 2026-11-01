// Let is block scoped

let b = 20; // Global Scope
console.log(b); //  20

function printHello(){
        console.log("Hello TheTestingAcademy!");
        let b = 30; // Local Scope
        console.log(b); // 30
        if(true){
            let b = 5;
            console.log(b); // 5 here the b scope is only for this if block
        }
        console.log("let ->",b);   // 30 becasue let is block scoped
}

printHello();