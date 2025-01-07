//synchronous
/*console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
console.log("Task 5");*/

//Asynchronous
const taskOne = () => {
    console.log("Task1");
};

const dataLoading = () => {
    console.log("Task2. Data Loading");
};

const taskTwo = () => {
    setTimeout(dataLoading, 3000);
};
const taskThree = () => {
    console.log("Task 3");

};
const taskFour = () => {
    console.log("Task 4");
};
const taskFive = () => {
    console.log("Task 5");
};

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();