function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function() {
        console.log(this.name);
        console.log(this, age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Farhan Hasin", 24, 3.30, "Bangla, English, Arabic, Hindi");
var student2 = new Student("Shezan Ahmed", 26, 3.00, "Bangla, English, Hindi");
var student3 = new Student("Golam Rafi", 25, 3.70, "Bangla, English, Hindi");

student1.display();
student2.display();
student3.display();