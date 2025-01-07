var myVar = document.querySelector("#Hello");

myVar.addEventListener("mouseover", function() {
    myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout", function() {
    myVar.classList.remove("my-style");
});