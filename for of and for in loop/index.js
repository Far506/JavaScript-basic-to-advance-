//for...of and for...in



/*const names = ["Farhan", "Hasin", "Dhrubo"]
for (let name of names) {
    console.log(name)
}*/




let students = {
    ID: 201746,
    name: `Farhan Hasin`,
    gpa: 5.00
}

for (let x in students) {
    console.log(`${x} :${students[x]}`)
}