//Error handling - try, catch, finally
// The throw statement -> craete custom errors

document.querySelector("#checkButton").addEventListener("click", function() {
    var num = document.querySelector("#numTextField").value;

    try {
        if (num < 10) {
            throw "input is too low";
        } else if (num > 20) {
            throw "input is too high";
        }

    } catch (err) {
        console.log(err);
    }
})