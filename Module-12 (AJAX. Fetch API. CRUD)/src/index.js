import './styles.css';
const debounce = require('lodash.debounce');
import itemSample from './item.hbs';


const inputJs = document.querySelector('.input-js');

const debouceFn = function (e) {
    const name = e.target.value;

    const logSuccess = (data) => {

        const listCountries = document.querySelector('.js-countries');

        function buildListCountries(items) {
            const markup = items.map(item => itemSample(item)).join('');
            listCountries.insertAdjacentHTML('beforeend', markup);
        }

        buildListCountries(data);
    };

    const logError = err => {
        console.warn(err);
    };
    
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
        if(response.ok) return response.json();
        throw new Error('Error ' + response.statusText);
    })
    .then(logSuccess)
    .catch(logError)
}

inputJs.addEventListener('input', debounce(debouceFn, 500));