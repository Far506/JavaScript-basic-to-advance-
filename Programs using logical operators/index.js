/*var marks = prompt("Enter yout marks :");

if (marks > 100 || marks < 0)
    console.log("Invalid marks");
else if (marks >= 90 && marks <= 100)
    console.log("A+");
else if (marks >= 85 && marks <= 89)
    console.log("A");
else if (marks >= 85 && marks <= 80)
    console.log("B+");
else if (marks >= 75 && marks <= 79)
    console.log("B");
else if (marks >= 70 && marks <= 74)
    console.log("C+");
else if (marks >= 65 && marks <= 69)
    console.log("C");
else if (marks >= 60 && marks <= 64)
    console.log("D+");
else if (marks >= 50 && marks <= 59)
    console.log("D");
else
    console.log("Fail");*/



/*var num1 = prompt("Enter number 1 : ");
var num2 = prompt("Enter number 2 : ");
var num3 = prompt("Enter number 3 : ");

if (num1 > num2 && num1 > num3)
    console.log("Large number =" + num1);

else if (num2 > num1 && num2 > num3)
    console.log("Large number = " + num2);

else
    console.log("Large number = : " + num3);*/



var letter = prompt("Enter a letter: ");

letter = letter.toLocaleLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
    console.log("Vowel");
else
    console.log("Consonant");