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
*/
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

  