import './styles.css';
const debounce = require('lodash.debounce');
import itemSample from './item.hbs';
import generalSample from './general.hbs';


const inputJs = document.querySelector('.input-js');

const debouceFn = function (e) {
    const name = e.target.value;

    const logSuccess = (data) => {

        const listCountries = document.querySelector('.js-countries');

        if (listCountries.hasChildNodes()) {
            listCountries.innerHTML = '';
        }

        function buildListCountries(items) {
            const markup = items.map(item => itemSample(item)).join('');
            listCountries.insertAdjacentHTML('beforeend', markup);
        }

        function buildListCountriesGeneral (item) {
            const markup = item.map(item => generalSample(item)).join('');
            listCountries.insertAdjacentHTML('beforeend', markup);
        }

        if (data.length > 10) {
            buildListCountries(data);
            alert('Too many matches found. Please enter a more specific query!');
        } else if (data.length > 1) {
            buildListCountries(data);
        } else if (data.length = 1) {
            buildListCountriesGeneral(data);
        }
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