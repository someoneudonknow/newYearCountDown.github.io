let days = document.getElementById('t-d');
let hours = document.getElementById('t-h');
let minutes = document.getElementById('t-m');
let seconds = document.getElementById('t-s');

const countDate = new Date('January 1, 2023 00:00:00').getTime();

function countDown(){
    let now = new Date().getTime();
    let gap = countDate - now;
    let s = 1000;
    let m = s * 60;
    let h = m * 60;
    let d = h * 24;

    secondsLeft = Math.ceil((gap % m) / s);
    daysLeft = Math.ceil(gap / d);
    minutesLeft = Math.ceil((gap % h) / m);
    hoursLeft = Math.ceil((gap % d) / h);

    days.innerText = daysLeft;
    hours.innerText =  hoursLeft;
    minutes.innerText = minutesLeft;
    seconds.innerText = secondsLeft;
}

setInterval(function(){
countDown();
},1000);







