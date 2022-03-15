'use strict';

// task 1

const logItems = function(array) {
    let message;

    for (let i = 0; i < array.length; i += 1) {
        message = i + 1 + ' - ' + array[i];
        console.log(message);
    }
    return message;
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// task 1 (another solution)

const logItems = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
for (let i = 0; i < logItems.length; i += 1) {
    const message = i + 1 + ' - ' + logItems[i];
    console.log(message);
}

// task 2

const calculateEngravingPrice = function(message, pricePerWord) {
    let total = 0;
    const words = message.split(' ');

    for (const word of words) {
        total += pricePerWord;
    }
    return total;
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));

// task 2 (another solution)

const calculateEngravingPrice = function(message, pricePerWord) {
    const words = message.split(' ');
    const total = words.length * pricePerWord;

    return total;
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));

// task 3

const findLongestWord = function(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (const word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));

// task 4

const formatString = function(string) {
    const maxStringLength = 40;
    let correctString;

    for (const symbol of string) {
        if (string.length <= maxStringLength) {
            correctString = string;
        } else {
            correctString = string.slice(0, 40) + '...';
        }
    }
    return correctString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

// task 5

const checkForSpam = function(message) {
    const forbiddenWords = ['sale', 'spam'];
    let result = false;

    for (const forbiddenWord of forbiddenWords) {
        if (message.toLowerCase().includes(forbiddenWord)) {
            result = true;
        }
    }
    return result;
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));