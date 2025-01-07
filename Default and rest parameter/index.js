//default parameter
/*"use strict"

function message(text = "Hello, this is default parameter") {
    console.log(`${text}`)
}
message();
message("I love to do coding");*/



//rest parameter

"use strict"

function printNumbers(x, y, ...z) {
    console.log(`x = ${x}, y = ${y}, z = ${z}`)
}
printNumbers(20, 30, 40, 70, 90);