var c = document.getElementById("myCanvas");

var context = c.getContext("2d");

context.lineWidth = 3;
context.strokeStyle = "black";
context.strokeRect(10, 10, 380, 280);

context.fillStyle = "green";
context.fillRect(12, 12, 376, 276);

var centerX = (c.width / 2);
var centerY = (c.height / 2);

context.beginPath();
context.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
context.fillStyle = "red";
context.fill();
context.stroke();