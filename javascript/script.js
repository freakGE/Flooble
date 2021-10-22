const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
// const window = document.createElement('.window');



hamburger.addEventListener('click', () => {
    header.classList.toggle('show');
    // header.appendChild('window');
    header.classList.toggle('window');
})