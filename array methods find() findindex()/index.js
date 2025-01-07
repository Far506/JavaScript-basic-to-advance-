//find(callback, value) rerturn the value of the first element that pass certain condition
//findIndex(callback, value) return the index of the first element that pass certain condition

/*let numbers = [3, 39, 45, 12, 64];

const evenNumber = (value, index, array) => {
    if (value % 2 === 0)
        return value;

}

let firstEvenNumber = numbers.find(evenNumber);
let firstEvenNumberIndex = numbers.findIndex(evenNumber);
console.log(firstEvenNumber)
console.log(firstEvenNumberIndex)*/




const students = [{
        id: 101,
        gpa: 4.00
    },
    {
        id: 102,
        gpa: 4.5
    },
    {
        id: 103,
        gpa: 3.9
    },
    {
        id: 104,
        gpa: 2.00
    }
]

console.log(students.find(x => x.gpa > 4))