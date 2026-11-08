/*
Callbacks are functions that are passed as arguments to other functions 
and are executed after some operation has been completed. They are 
commonly used in asynchronous programming to handle events or perform 
actions after a certain task is finished.
*/

function placeOrder(item, callback){
    console.log("Placing an order");
    console.log("Order Placed", item);
    callback();
}

// // First Way
// function CompleteOrderPrint(){
//     console.log("Normal Fn");
// }

// placeOrder("Burger", CompleteOrderPrint);



// // Sencond Way Anonymous Fn
// placeOrder("Burger", function(){
//     console.log("Order is ready!, pick it up!");
// });


// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

test('has title', async ({ page }) => {

});


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });