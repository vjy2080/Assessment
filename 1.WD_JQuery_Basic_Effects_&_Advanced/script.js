const date = new Date();
const fullDate = date.toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
});

document.getElementById("date").innerHTML = fullDate

function showTime() {
    const time = new Date();
    const hour = (time.getHours() % 12) || 12;
    const minute = time.getMinutes().toString().padStart(2, "0")
    const second = time.getSeconds().toString().padStart(2, "0")
    const currentTime = hour + ":" + minute + ":" + second + (hour < 12 ? " AM" : " PM");

    document.getElementById("clock").innerHTML = currentTime;
}

setInterval(showTime, 1000);

