/*var i = 2;
var sum = 0;

while (i <= 100) {
    sum = sum + i;
    i = i + 2;
}

document.write(sum);
document.write("<h1> The End </h1")*/


var i = 1;
var sum = 0;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write("  " + i);
        sum = sum + i;
    }
    i = i + 1;
}

document.write(" sum " + sum);
document.write("<h1>The End</h1>")