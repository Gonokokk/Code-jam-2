/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
// Input dates
const note = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.',
    'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
];
let slideIndex = 1;

// Add checkbox event to localstorage
const inpChck = document.querySelector('input');
inpChck.addEventListener('click', (e) => {
    if (e.target.checked) {
        localStorage.setItem('check', true);
    }
});

// Control on the keyboard
addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
        plusSlides(-1);
    }
});

addEventListener('keydown', (event) => {
    if (event.keyCode === 39) {
        plusSlides(1);
    }
});

addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        const close = document.querySelector('.slideshow-container');
        close.style.display = 'none';
    }
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Remove timer
const timerId = setTimeout(showSlides, 5000);
if (localStorage.getItem('check') === 'true') {
    clearTimeout(timerId);
}

// Create slides
const mainField = document.querySelector('.slideshow-container');
for (let i = 0; i < note.length; i++) {
    const fieldSlides = document.createElement('div');
    fieldSlides.className = 'mySlides';
    const notify = document.createElement('p');
    notify.textContent = note[i];
    fieldSlides.appendChild(notify);
    mainField.appendChild(fieldSlides);
}

// Control creating and show slides
function showSlides(n) {

// Create visible of the buttons and indicators
    const btn = document.querySelectorAll('.btn');
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove('btn');
    }

    // Hide or visible effects
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
