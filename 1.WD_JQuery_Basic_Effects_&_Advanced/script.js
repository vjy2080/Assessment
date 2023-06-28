// Get the current date
const date = new Date();

// Format the date to a string representation
const fullDate = date.toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
});

// Display the formatted date in an element with id "date"
document.getElementById("date").innerHTML = fullDate;

// Function to display the current time
function showTime() {
    // Get the current time
    const time = new Date();

    // Extract the hour, ensuring it is in 12-hour format
    const hour = (time.getHours() % 12) || 12;

    // Extract the minutes and pad with leading zero if necessary
    const minute = time.getMinutes().toString().padStart(2, "0");

    // Extract the seconds and pad with leading zero if necessary
    const second = time.getSeconds().toString().padStart(2, "0");

    // Create a string representation of the current time
    const currentTime = hour + ":" + minute + ":" + second + (hour < 12 ? " AM" : " PM");

    // Display the current time in an element with id "clock"
    document.getElementById("clock").innerHTML = currentTime;
}

// Call the showTime function every second to update the displayed time
setInterval(showTime, 1000);
