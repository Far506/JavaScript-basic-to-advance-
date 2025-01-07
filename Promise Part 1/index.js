console.log("Welcome to JavaScript");

//how to create a promise- pending, resolve, reject

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("completed promise 1");
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("completed promise 2");
    }, 2000);
});

Promise.race([promise1, promise2]).then((res) => console.log(res));
console.log("end");