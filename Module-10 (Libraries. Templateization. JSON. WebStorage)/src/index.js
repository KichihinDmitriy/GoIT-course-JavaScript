import items from './menu.json';
import itemSample from './item.hbs';

import './styles.css';

const listMenuItems = document.querySelector('.js-menu');

function buildItemSample (items) {
    const markup = items.map(item => itemSample(item)).join('');

    listMenuItems.insertAdjacentHTML('beforeend', markup);
}

buildItemSample(items);