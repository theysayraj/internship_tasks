let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Display update function
function updateDisplay() {
    let display = document.getElementById("display");
    display.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

// Start function
function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

// Stop function
function stop() {
    clearInterval(timer);
    isRunning = false;
}

// Reset function
function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}