'use strict';
/*
// task 1

const menuItems = document.querySelectorAll('.item');
console.log(`In the list ${menuItems.length} categories.`);

const categoriesArray = [...menuItems]
    .map(category =>
    `Категория: ${category.children[0].textContent}
Количество элементов: ${category.children[1].children.length}`)
    .join("\n");

console.log(categoriesArray);

// task 2

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const parentForIngredient = document.querySelector('#ingredients');

  const newListOfIngredients = ingredients.reduce((acc, ingredient) => acc + `<li>${ingredient}</li>`, '');

  parentForIngredient.innerHTML = newListOfIngredients;

// task 3

  const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryMarkupHTML = document.querySelector('#gallery');

  const createGalleryItem = ({url, alt}) =>
  `<li><img src='${url}' alt='${alt}' width = 300 height = 200></li>`;

  const galleryMarkup = images.reduce((acc, image) => acc + createGalleryItem(image), '');

  galleryMarkupHTML.insertAdjacentHTML('afterbegin', galleryMarkup);
*/
// task 4

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

// task 5

