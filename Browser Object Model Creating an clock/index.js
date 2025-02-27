const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener("click", startClock);

function startClock() {

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds;

    message.textContent = time;
    setInterval(startClock, 1000);
}

function formatTime(value) {
    if (Value < 10) {
        value = "0" + value;
    }
    return value;
}