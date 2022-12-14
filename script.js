// DOM elements
const daysEle = document.querySelector('#days');
const hoursEle = document.querySelector('#hours');
const minutesEle = document.querySelector('#minutes');
const secondsEle = document.querySelector('#seconds');
const panelEle = document.querySelector('.panel');

// daysEle.innerHTML = 25;

const endDate = new Date("December 25 2022");
const endDateInMs = endDate.getTime();


//  tabella in ms
const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

// console.log(diff / dayInMs);

const counterTimer = setInterval(timer, 1000);

function timer(){
    // oggi in ms
    const nowInMs = new Date().getTime();

    const diff = endDateInMs - nowInMs;

    if (diff > 0) {
        daysEle.innerHTML = Math.floor( diff / dayInMs);
        hoursEle.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
        minutesEle.innerHTML = Math.floor((diff % hourInMs) / minuteInMs );
        secondsEle.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);
        
    } else {
        clearInterval(timer);
        panelEle.innerHTML = "<h1>Buona Natale!🎄🎅</h1>"
    }
}

