//array destructure
/*let numbers = [20, 40, 30, 60, 90]
let [num1, num2, ...z] = numbers
console.log(z)*/




//swap variables
/*x = 30, y = 40;
[x, y] = [y, x]
console.log(x)
console.log(y)*/




//object destructure
/*const studentInfo = {
    id: 101,
    fullName: 'Farhan Hasin',
    gpa: 5.00
}
const { id, fullName } = studentInfo

console.log(id)
console.log(fullName)*/




//nested object destructure
/*const studentInfo = {
    id: 101,
    name: 'Farhan Hasin',
    gpa: 5.00,
    languages: {
        native: 'Bangla',
        international: 'English',
        Only_speaking: 'Hindi',
        Only_reading: 'Arabic'
    }
}
const { fullName, languages } = studentInfo
console.log(languages.Only_reading)*/




//destructuring function parameters

const studentInfo = ({ id, fullName }) => {
    console.log(`${id}, ${fullName}`)

}

const student = {
    id: 101,
    fullName: "Farhan Hasin"
}
studentInfo(student)