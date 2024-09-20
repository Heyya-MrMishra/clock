// Function to update both analog and digital clocks
function updateClock() {
    const now = new Date();
    
    // Digital clock
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("digital").innerText = `${hours}:${minutes}:${seconds}`;
    
    // Analog clock
    const secondHand = document.getElementById('second');
    const minuteHand = document.getElementById('minute');
    const hourHand = document.getElementById('hour');

    const secondsDeg = ((now.getSeconds() / 60) * 360) ;
    const minutesDeg = ((now.getMinutes() / 60) * 360) + ((now.getSeconds() / 60) * 6) ;
    const hoursDeg = ((now.getHours() % 12) / 12 * 360) + ((now.getMinutes() / 60) * 30) ;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Update clock every second
let interval = setInterval(updateClock, 1000);

// Stop the timer when button is clicked
document.getElementById("button").addEventListener("click", () => {
    clearInterval(interval);
});
