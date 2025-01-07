const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function(e) {
    if (e.repeat) {
        alert("do not repeat");
    }
});



//Shows the numbers of keypress
/*textarea.addEventListener("keypress", function() {
    console.log("keypress");
});*/



//Shows shift+which letter has been pressed
/*textarea.addEventListener("keyup", function(e) {
    if (e.shiftKey) {
        console.log("shift+" + e.key);
    }
});*/