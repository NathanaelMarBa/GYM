window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        document.body.classList.add('header-hidden');
    } else {
        document.body.classList.remove('header-hidden');
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
});

nav.classList.toggle('active');