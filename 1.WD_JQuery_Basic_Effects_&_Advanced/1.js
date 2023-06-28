let date = new Date();
let fullDate = date.toLocaleString('en-US', {
    weekday: 'long', // long, short, narrow
    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
});

document.getElementById("date").innerHTML = fullDate

function showTime() {
    const time = new Date();
    const hour = (time.getHours() % 12) || 12;
    const currentTime = hour + ":" + time.getMinutes().toString().padStart(2, "0") + ":" + time.getSeconds().toString().padStart(2, "0") + (hour < 12 ? " AM" : " PM");
  
    document.getElementById("clock").innerHTML = currentTime;
  }
  
  setInterval(showTime, 1000);
  
  