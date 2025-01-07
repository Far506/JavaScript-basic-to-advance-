//load
//unload
//resize
//toggle



//load/unload
/*window.addEventListener("load", function() {
    console.log("load");
});

window.addEventListener("unload", function() {
    console.log("unload");
});*/



//scroll
/*window.addEventListener("scroll", function() {
    console.log("scroll");
})*/



//resize
/*window.addEventListener("resize", function() {
    const width = window.outerWidth;
    const height = window.outerHeight;
    console.log(`height: ${height}, width: ${width}`);
});*/



//toggole
/*const details = document.querySelector("details");
details.addEventListener("toggle", function() {
    console.log();
})*/



//toggle for true/false
const details = document.querySelector("details");
details.addEventListener("toggle", function(e) {
    console.log(e.target.open);
});