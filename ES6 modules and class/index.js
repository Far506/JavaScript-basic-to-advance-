/*import { message } from './myModule.js'

console.log(message)*/




//class
/*class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

}
let s1 = new Student(101, "Farhan");
console.log(s1.id);
console.log(s1.name);*/




/*class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    set studentName(name) {
        this.name = name;
    }
}
let s1 = new Student(101, "Farhan");
console.log(s1.id);
console.log(s1.name);

s1.studentName = "Dhrubo";
console.log(s1.name)*/




class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    set studentName(name) {
        this.name = name;
    }
    get studentInfo() {
        return this.id + " " + this.name;
    }
}

let s1 = new Student(101, "Dhrubo");
console.log(s1.studentInfo)