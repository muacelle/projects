const focusWatch = document.querySelector('.focusWatch .time');
const breakWatch = document.querySelector('.breakWatch .time');

const focusBtn = document.querySelector('#focusbtn');
const stopFocBtn = document.querySelector('#stopfocusbtn');

const cyclesSection = document.querySelector('#register');

// Event Listeners

focusBtn.addEventListener('click', startFocus);
stopFocBtn.addEventListener('click', stopFocus);

// Functions

let secs = 0;
let mins = 0;
let hrs = 0;
let num = 1;
let cyclesArr = [];
let focRegist = '';
let brRegist = '';

function addCycle(num, focusTime, breakTime) {
    cyclesArr.push(
        `<h3 id="cycle0">Cycle ${num}</h3>
        <p id="focustime">Focus time: ${focusTime}</p>
        <p id="breaktime">Break time: ${breakTime}</p>`)
}

function getCycles() {
    return cyclesArr.join('');
}

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
        if (mins < 10) {
            brRegist = `0${hrs}:0${mins}:${secs}`;
        } else {
            brRegist = `0${hrs}:${mins}:${secs}`;
        }
        addCycle(num, focRegist, brRegist);
        cyclesSection.innerHTML = getCycles();
        num++;
    }
    secs = 0;
    mins = 0;
    hrs = 0;
    breakWatch.innerText = '00:00:00';
    interval = setInterval(timerFocus, 1000);
}

function stopFocus() {
    clearInterval(interval);
    if (mins < 10) {
        focRegist = `0${hrs}:0${mins}:${secs}`;
    } else {
        focRegist = `0${hrs}:${mins}:${secs}`;
    }
    secs = 0;
    mins = 0;
    hrs = 0;
    breakInterval = setInterval(timerBreak, 1000);
}