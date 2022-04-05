'use strict';

// task 1

const name = 'Генератор защитного поля';
let price = 1000;

console.log('Выбран ' + name + ', цена за штуку ' + price + ' кредитов');

price = 2000;

console.log('Выбран ' + name + ', цена за штуку ' + price + ' кредитов');

// task 2

const total = 100;
const ordered = 50;

if (total >= ordered) {
    console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
    console.log("На складе недостаточно твоаров!");
}

// task 3

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt('Please enter you password:');
console.log(password);

if (null) {
    message = 'Отменено пользователем!';
}

if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (password === null) {
    message = 'Отменено пользователем!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);

// task 4

const credits = 23580;
const pricePerDroid = 3000;
let totalPrise;

const amount = prompt('How many droids do you want to buy?');

if (amount === null) {
    console.log('Отменено пользователем!')
} else {
    console.log(totalPrise = Number(amount) * (Number(pricePerDroid)));
}

if (totalPrise > credits) {
    console.log('Недостаточно средств на счету!')
} else {
    console.log('Вы купили ' + amount + ' дроидов, на счету осталось ' + (Number(credits) - totalPrise) + ' кредитов.');
}

// task 5

const countryChina = 'China';
const countryChile = 'Chile';
const countryAustralia = 'Australia';
const countryIndia = 'India';
const countryJamaica = 'Jamaica';

let message;

const deliveryCountry = prompt('Select your country for delivery:');

switch (deliveryCountry.toLowerCase()) {
    case countryChina.toLowerCase():
    message = 'Delivery to China will cost 100 credits';
    break;

    case countryChile.toLowerCase():
    message = 'Delivery to Chile will cost 250 credits';
    break;

    case countryAustralia.toLowerCase():
    message = 'Delivery to Australia will cost 170 credits';
    break;

    case countryIndia.toLowerCase():
    message = 'Delivery to India will cost 80 credits';
    break;

    case countryJamaica.toLowerCase():
    message = 'Delivery to Jamaica will cost 120 credits';
    break;

    default:
    message = 'Delivery not available in your country';
}

alert(message);

// task 6

let total = 0;
let input;

while (input !== null) {
    input = prompt('Please enter a number:')
    total += Number(input)
}

alert(total);