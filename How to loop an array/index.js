/*var num = [15, 30, 45, 60, 75];
var sum = 0;

for (var i = 0; i < 5; i++) {
    console.log(num[i]);
    sum = sum + num[i];
}
console.log("sum = " + sum);*/



var num = new Array();

for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Enter a number: "))
}

var sum = 0;
for (var i = 0; i < 5; i++) {
    console.log(num[i]);
    sum = sum + num[i];
}

console.log("sum " + sum);