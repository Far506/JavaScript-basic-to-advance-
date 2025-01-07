//spread operator
/*function addNumbers(x, y, z) {
    return x + y + z;
}

let number1 = [1, 2, 3]
let number2 = [4, 5, 6]
let numbers = [...number1, ...number2]
console.log(numbers)*/



//object by using spread operator
let p1 = {
    name: "Farhan Hasin",
    age: 24
}

let p2 = {
    nationality: `Bangladeshi`,
    occupation: `Student`
}

let p = {...p1, ...p2 }
console.log(p)