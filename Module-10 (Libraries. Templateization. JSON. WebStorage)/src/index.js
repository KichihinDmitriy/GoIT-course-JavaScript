import items from './menu.json';
import itemSample from './item.hbs';

import './styles.css';

const listMenuItems = document.querySelector('.js-menu');

function buildItemSample (items) {
    const markup = items.map(item => itemSample(item)).join('');

    listMenuItems.insertAdjacentHTML('beforeend', markup);
}

buildItemSample(items);

const bodyTheme = document.querySelector('body');
const themeSwitch = document.querySelector('#theme-switch-toggle');

const themeSwitchToggle = (checked) => {
    localStorage.setItem('checkboxValue', checked);
    if (checked) {
        bodyTheme.classList.remove('light-theme');
        bodyTheme.classList.add('dark-theme');
    } else {
        bodyTheme.classList.remove('dark-theme');
        bodyTheme.classList.add('light-theme');
    }
};

themeSwitch.addEventListener('change', () => themeSwitchToggle(themeSwitch.checked));