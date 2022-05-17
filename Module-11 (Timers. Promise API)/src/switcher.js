// Color switcher

const colors = [
    '#FFFFFF',
    '#74f5e4',
    '#eae35f',
    '#a300c3',
    '#000ac3',
    '#000000',
];

const randomIntegerFromInterval = (min, max) => {
    const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
    return randomIndex;
};

const buttonStart = document.querySelector('.button-start');
const buttonStop = document.querySelector('.button-stop');
const body = document.querySelector('body');

const timer = () => {
    const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    body.setAttribute('style', `background-color: ${colors[randomIndex]}`);
};

let timerId = null;

const buttonStartFn = function () {
    timerId = setInterval(timer, 1000);
    buttonStart.setAttribute("disabled", "disabled");
};

const buttonStopFn = function () {
    clearInterval(timerId);
    buttonStart.removeAttribute("disabled", "disabled");
};

buttonStart.addEventListener('click', buttonStartFn);
buttonStop.addEventListener('click', buttonStopFn);