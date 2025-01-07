const div = document.querySelector("div");
const p = document.querySelector("p");

p.addEventListener("dragstart", function(e) {
    e.dataTransfer.setData("text", e.target.id);
});

div.addEventListener("dragover", function(e) { // Pass 'e' here
    e.preventDefault();
});

div.addEventListener("drop", function(e) { // Pass 'e' here as well
    e.preventDefault(); // Add this line to prevent default behavior on drop
    let id = e.dataTransfer.getData("text");
    console.log(id);
    div.appendChild(document.getElementById(id));
});