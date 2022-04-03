'use strict';

// Сounter (constructor function)

const Counter = function (initialValue = 0, step = 1) {
    this.value = initialValue;
    this.step = step;
}

Counter.prototype.increment = function () {
    this.value += this.step
}

Counter.prototype.decrement = function () {
    this.value -= this.step
}

const counter = new Counter(0, 10);

const counterValue = document.querySelector('.js-value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

counterValue.textContent = counter.value;

incrementBtn.addEventListener('click', () => {
    counter.increment();
    //console.log('clicked increment');
    //console.log(counter.value);
    counterValue.textContent = counter.value;
});

decrementBtn.addEventListener('click', () => {
    counter.decrement();
    //console.log('clicked decrement');
    //console.log(counter.value);
    counterValue.textContent = counter.value;
});