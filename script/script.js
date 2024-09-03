// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

const carousel = document.querySelector('.carousel_container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  currentIndex = index;
}

// Initial slide
showSlide(0);

// Previous button
const prevBtn = document.createElement('button');
prevBtn.textContent = 'Previous';
prevBtn.addEventListener('click', () => {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
});
carousel.appendChild(prevBtn);

// Next button
const nextBtn = document.createElement('button');
nextBtn.textContent = 'Next';
nextBtn.addEventListener('click', () => {
  showSlide((currentIndex + 1) % slides.length);
});
carousel.appendChild(nextBtn);