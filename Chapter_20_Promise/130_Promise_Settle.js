// In this scenario no need to catch for reject
Promise.allSettled([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")
]).then(results => console.log(results));

/* Output: 
[
  { status: 'fulfilled', value: 'OK' },
  { status: 'rejected', reason: 'DB DOWN' },
  { status: 'fulfilled', value: 'OK' }
] */  