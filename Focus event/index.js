const input = document.querySelector("input");
input.addEventListener("blur", function(e) {
    //input.style.backgroundColor = "yellow";
    //input.style.padding = "3rem";
    // console.log("blur is occured");
    //console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
});

input.addEventListener("focus", function() {
    // console.log("focus is occured");
    //input.style.backgroundColor = "red";
    //input.style.padding = "4rem";
});




/*input.addEventListener("focusin", function() {
    console.log("focusin is occured");
});

input.addEventListener("focusout", function() {
    console.log("focusout is occured");
});*/