// Countdown timer

const CountdownTimer = function ({selector, targetDate}) {
    setInterval(() => {
    const CurrentDate = new Date();
    const time = targetDate - CurrentDate;

    const zero = function(value) {
        return value < 10 ? `0${value}` : value;
    };

    const days = zero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = zero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = zero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = zero(Math.floor((time % (1000 * 60)) / 1000));

    const timerId = document.querySelector(selector);

    if(time < 0) {
        timerId.innerText = 'EXPIRED DATE';
    } else {
    timerId.querySelector('span[data-value="days"]').innerText = days;
    timerId.querySelector('span[data-value="hours"]').innerText = hours;
    timerId.querySelector('span[data-value="mins"]').innerText = mins;
    timerId.querySelector('span[data-value="secs"]').innerText = secs;
    }
    }, 1000);
};

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 28, 2022'),
});

// new CountdownTimer({
//     selector: '#timer-2',
//     targetDate: new Date('May 23, 2022'),
// });