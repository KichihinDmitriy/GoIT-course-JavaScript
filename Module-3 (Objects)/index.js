'use strict';

// task 1

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

const newNameKey = 'mood';
const newValueKey = 'happy';
user[newNameKey] = newValueKey;

user.hobby = 'skydiving';
user['premium'] = false;

console.log(user);

const keys = Object.keys(user);

for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
}

// task 2

const countProps = function(obj) {
    const keys = Object.keys(obj);
    
    return keys.length;
};

console.log(countProps({}));
  
console.log(countProps({ name: 'Mango', age: 2 }));
  
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// task 3

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};

const keys = Object.keys(tasksCompleted);
console.log(keys);

let max = 0;
let name;

for (const key of keys) {
    console.log(key);
    console.log(tasksCompleted[key]);

    if (tasksCompleted[key] > max ) {
        max = tasksCompleted[key];
        name = key;
    }
}

console.log(max);
console.log(name);

// task 3 (another solution using the function)

const findBestEmployee = function(employees) {
    const keys = Object.keys(employees);
    console.log(keys);

    let max = 0;
    let name;

    for (const key of keys) {
        console.log(key);
        console.log(employees[key]);

        if (employees[key] > max ) {
            max = employees[key];
            name = key;
        }
    }
    return {
        name,
        'tasks completed': max,
    }
}

console.log(
    findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
}));

console.log(
    findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
}));
  
console.log(
    findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}));

// task 4

const countTotalSalary = function(employees) {
    const keys = Object.keys(employees);
    let totalSalary = 0;

    for (const key of keys) {
        totalSalary += employees[key];
    }
    return totalSalary;
};

console.log(countTotalSalary({}));
  
console.log(
    countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
    }));

console.log(
    countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
    }));

// task 5

const users = [
{ name: 'Радар', price: 1300, quantity: 4 },
{ name: 'Сканер', price: 2700, quantity: 3 },
{ name: 'Дроид', price: 400, quantity: 7 },
{ name: 'Захват', price: 1200, quantity: 2 },
];
  
const getAllPropValues = function(users, key) {
    const values = [];

    for (const user of users) {
        if (key in user) {
            values.push(user[key]);
        }
    }
    return values;
};
  
console.log(getAllPropValues(users, 'name'));
  
console.log(getAllPropValues(users, 'quantity'));
  
console.log(getAllPropValues(users, 'category'));

// task 6

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
    let totalPriceProduct = 0;

    for (const product of products) {

        if (product.name === productName) {
            totalPriceProduct = product.price * product.quantity
        }
    }
    return totalPriceProduct;
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));