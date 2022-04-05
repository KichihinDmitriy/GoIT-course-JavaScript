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