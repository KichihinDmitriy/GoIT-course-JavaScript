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

// task 1

const Account = function (login, email) {
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function() {
    console.log(this);
}

const mango = new Account ('Mangozedog', 'mango@dog.woof');
mango.getInfo();

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo();

// task 2

const User = function ({name, age, followers}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
}

User.prototype.getInfo = function() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
}

const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });

  mango.getInfo();

  const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });
  
  poly.getInfo();

// task 3

const Storage = function ([...items]) {
    this.items = items;
}

Storage.prototype.getItems = function() {
    console.table(this.items);
}

Storage.prototype.addItem = function(addProduct) {
    this.items.push(addProduct);
}

Storage.prototype.removeItem = function(removeProduct) {
    const removeIndex = this.items.indexOf(removeProduct);
    delete this.items[removeIndex];
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);

  storage.getItems();

  storage.addItem('Дроид');
  console.table(storage.items);

  storage.removeItem('Пролонгер');
  console.table(storage.items);

// task 4

class StringBuilder {
    constructor(_value) {
        this._value = _value;
    }

    get value() {
        return this._value;
    }

    append(str) {
        this._value = this._value + str;
    }

    prepend(str) {
        this._value = str + this._value;
    }

    pad(str) {
        this._value = str + this._value + str;
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);

// task 5

class Car {

    /*
     * Добавляю статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */

    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }
  
    /*
     * Конструктор получает объект настроек.
     *
     * Добавляю свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */

    constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
  
    /*
     * Добавляю геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */

    get _price() {
        return this.price;
    }

    set _price(price) {
        this.price = price;
    }
  
    /*
     * Добавляю код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */

    turnOn() {
        this.isOn = true;
    }
  
    /*
     * Добавляю код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
  
    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */

    accelerate(value) {
        if (value <= this.maxSpeed) {
            this.speed += value;
        }
    }
  
    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */

    decelerate(value) {
        if ((this.speed - value) > 0) {
            this.speed -= value;
        }
    }
  
    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */

    drive(hours) {
        if (this.isOn = true) {
            this.distance = hours * this.speed;
        }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 30, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000