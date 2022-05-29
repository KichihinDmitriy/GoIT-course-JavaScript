import './sass/index.scss';


const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('input[type="text"]');
const gallery = document.querySelector('.js-gallery');
const spiner = document.querySelector('.spiner');

const toggleSpiner = () => spiner.classList.toggle('visible');

function searchFormSubmit (event) {
    event.preventDefault();

    toggleSpiner();

    const search = searchInput.value;
    console.log(search);

    const logSuccess = data => {
        console.log(data.hits);

        const items = data.hits;
        const markup = items.reduce((markup, item) => markup +
        `<div class="photo-card">
        <img src="${item.webformatURL}" alt="${search}" />
      
        <div class="stats">
          <p class="stats-item">
            <i class="material-icons">thumb_up</i>
            ${item.likes}
          </p>
          <p class="stats-item">
            <i class="material-icons">visibility</i>
            ${item.views}
          </p>
          <p class="stats-item">
            <i class="material-icons">comment</i>
            ${item.comments}
          </p>
          <p class="stats-item">
            <i class="material-icons">cloud_download</i>
            ${item.downloads}
          </p>
        </div>
        </div>`
        , '');
        gallery.innerHTML = markup;

        toggleSpiner();
    }
    
    const logError = err => {
        console.warn(err);
    }
    
    fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=1&per_page=12&key=27707331-e8f0665848429928829c2cdc7`)
    .then(response => {
        if(response.ok) return response.json();
        throw new Error('Error ' + response.statusText);
    })
    .then(logSuccess)
    .catch(logError)

    searchForm.reset();
}

searchForm.addEventListener('submit', searchFormSubmit);