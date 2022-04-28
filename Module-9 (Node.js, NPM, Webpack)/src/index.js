'use strict';

const shortid = require('shortid');
console.log(shortid.generate());

const addFn = (a, b) => a + b;
console.log(addFn(10, 50));

class Car {
    constructor(value = 100) {
        this.value = value;
    }

    showValue() {
        console.log(this.value);
    }
}

const mazda = new Car(10000);

const messageModule = require('./message');
console.log(messageModule);
console.log(messageModule.getMessage());

import exportMessage from './message.js';
console.log(exportMessage());