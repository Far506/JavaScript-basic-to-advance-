var len = document.querySelectorAll(".myButton").length;

for (var i = 0; i < len; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function() {

        var text = this.innerHTML;
        document.querySelector("#hi").innerHTML = text + " is clicked";
    })
}