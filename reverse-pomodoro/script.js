// DOM Manipulation

const focusWatch = document.querySelector('.focusWatch .time');
const breakWatch = document.querySelector('.breakWatch .time');

const focusBtn = document.querySelector('#focusbtn');
const stopFocBtn = document.querySelector('#stopfocusbtn');

// Event Listeners

focusBtn.addEventListener('click', startFocus);
stopFocBtn.addEventListener('click', stopFocus);

// Functions

let secs = 0;
let mins = 0;
let hrs = 0;

function timerFocus() {
    secs++
    if (secs > 59) {
        mins++
        secs = 0;
    }
    if (mins > 59) {
        hrs++
        mins = 0;
    }

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) {
        focusWatch.innerText = `0${hrs}:0${mins}:${secs}`;
    } else {
        focusWatch.innerText = `0${hrs}:${mins}:${secs}`;
    }
}

function timerBreak() {
    secs++
    if (secs > 59) {
        mins++
        secs = 0;
    }
    if (mins > 59) {
        hrs++
        mins = 0;
    }

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) {
        breakWatch.innerText = `0${hrs}:0${mins}:${secs}`;
    } else {
        breakWatch.innerText = `0${hrs}:${mins}:${secs}`;
    }
}

function startFocus() {
    if (secs > 0) {
        clearInterval(breakInterval);
    }
    secs = 0;
    mins = 0;
    hrs = 0;
    breakWatch.innerText = `0${hrs}:0${mins}:${secs}`;
    interval = setInterval(timerFocus, 1000);
}

function stopFocus() {
    clearInterval(interval);
    secs = 0;
    mins = 0;
    hrs = 0;
    breakInterval = setInterval(timerBreak, 1000);
}