const input = document.querySelector("input");
const p = document.querySelector("p");


//copy
input.addEventListener("copy", function() {
    p.innerText = "you have copied";
});



//cut
input.addEventListener("cut", function() {
    p.innerText = "you have cut";
});



//paste
input.addEventListener("paste", function() {
    p.innerText = "you have pasted";
});