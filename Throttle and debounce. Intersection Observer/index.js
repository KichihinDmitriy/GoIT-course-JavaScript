'use strict';

// Throttle

const throttleFn = () => console.log('scroll');
window.addEventListener('scroll', _.throttle(throttleFn, 300));

// Debounce

const inputJs = document.querySelector('.input-js');
const debouceFn = (e) => console.log(e.target.value);
inputJs.addEventListener('input', _.debounce(debouceFn, 300));

// IntersectionObserver

const nav = document.querySelector('.navigation');

const onEntry = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');

            const activeSection = nav.querySelector('.active-section');

            if (activeSection) {
                activeSection.classList.remove('active-section');
            };

            const addActiveSection = nav.querySelector(`section[id="#${sectionId}"]`);
            addActiveSection.classList.add('active-section');
        }
    });
};

const options = {
    threshold: 0.6,
};

const observer = new IntersectionObserver(onEntry, options);

const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    observer.observe(section);
});

// Lazy-load

const lazyLoad = target => {
    const options = {
        rootMargin: '30px 0px',
        threshold: 0.01
    };

    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            // if (entry.isIntersecting) {
            //     const img = entry.target;
            //     const imageUrl = img.dataset.lazy;

            //     img.setAttribute('src', imageUrl);

            //     observer.disconnect();
            // };
        });
    }, options);

    io.observe(target);
};

const images = document.querySelectorAll('.section img');

images.forEach(image => {
    lazyLoad(image);
});