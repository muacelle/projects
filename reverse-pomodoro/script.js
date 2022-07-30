// DOM Manipulation

const focusWatch = document.querySelector('.focusWatch .time');
const breakWatch = document.querySelector('.breakWatch .time');

const focusBtn = document.querySelector('#focusbtn');
const stopFocBtn = document.querySelector('#stopfocusbtn');

const cycle = document.querySelector('#cycle0');
const focusTime = document.querySelector('#focustime');
const breakTime = document.querySelector('#breaktime');


// Event Listeners

focusBtn.addEventListener('click', startFocus);
stopFocBtn.addEventListener('click', stopFocus);

// Functions

let secs = 0;
let mins = 0;
let hrs = 0;
let num = 1;

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
        cycle.innerText = 'Cycle 0' + num;
        num++;
        if (mins < 10) {
            breakTime.innerText = `Break time: 0${hrs}:0${mins}:${secs}`
        } else {
            breakTime.innerText = `Break time: 0${hrs}:${mins}:${secs}`
        }
    }
    secs = 0;
    mins = 0;
    hrs = 0;
    breakWatch.innerText = '00:00:00';
    interval = setInterval(timerFocus, 1000);
}

function stopFocus() {
    clearInterval(interval);
    cycle.innerText = 'Cycle 0' + num;
    if (mins < 10) {
        focusTime.innerText = `Focus time: 0${hrs}:0${mins}:${secs}`
    } else {
        focusTime.innerText = `Focus time: 0${hrs}:${mins}:${secs}`
    }
    secs = 0;
    mins = 0;
    hrs = 0;
    breakInterval = setInterval(timerBreak, 1000);
}