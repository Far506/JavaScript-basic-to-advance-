console.log("Welcome to the javaScript");
const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("Task one is completed");
    });
};

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task two is completed");
        }, 10000);
    });
};

const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject("Task Three is not completed");
    });
};

const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("Task Four is completed");
    });
};

const callAllTasks = async() => {
    try {
        const t1 = await taskOne();
        console.log(t1);
        const t2 = await taskTwo();
        console.log(t2);
        const t3 = await taskThree();
        console.log(t3);
        const t4 = await taskFour();
        console.log(t4);
    } catch (e) {
        console.log(e);
    }
};