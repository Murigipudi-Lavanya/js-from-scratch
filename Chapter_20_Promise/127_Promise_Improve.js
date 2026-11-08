function openBrowser() {
    return new Promise((resolve, reject) => {
        resolve('Browser Opened');
    });
}

function gotoLogin() {
    return new Promise((resolve, reject) => {
        resolve('Login Page Opened');
    });
}

function enterCredentials() {
    return new Promise((resolve, reject) => {
        resolve('Credentials Entered');
    });
}

function clickLogin() {
    return new Promise((resolve, reject) => {
        resolve('Logged in successfully');
    });
}

openBrowser()
    .then(() => gotoLogin())
    .then(() => enterCredentials())
    .then(() => clickLogin())
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

  // output Logged in successfully as we are resolving all the promises 
  // successfully. If any of the promises were to reject, 
  // the catch block would handle the error.  