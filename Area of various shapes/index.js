var a = parseFloat(prompt("Enter a : "));
var base = parseFloat(prompt("Enter base: "));
var height = parseFloat(prompt("Enter height"));

var area = (base * height);
var rectangle = (base * height);
var triangle = (base * (height / 2));
var trapezium = ((a * base * height) / 2);
var kite = (base * (height - 2));

document.write("Area = " + area + "<br>");
document.write("rectangle = " + rectangle + "<br>");
document.write("triangle = " + triangle + "<br>");
document.write("trapezium = " + trapezium + "<br>");
document.write("Kite = " + kite + "<br>");