/*function square(x) {
    console.log(`square of ${x}: ${x*x}`);
}

function higherOrderFunction(num, callback) {
    callback(num);
}
higherOrderFunction(6, square);*/

const taskOne = (callback) => {
    console.log("Task1");
    callback();
};

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Task2.Data Loading");
        callback();
    }, 5000);
};

const taskThree = (callback) => {
    console.log("Task3");
    callback();
};

const taskFour = (callback) => {
    console.log("Task4");
    callback();
};

const taskFive = (callback) => {
    console.log("Task5");
    callback();
};

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive(() => {

                });
            });
        });
    });
});