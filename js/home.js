const slideContainer = document.querySelector('.slide-container-featured');
const slide = document.querySelector('.slides');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const interval = 2000;

let slides = document.querySelectorAll('.slide');
let idx = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const width = slides[idx].clientWidth;

slide.style.transform = `translateX(${-width * idx}px)`;

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval);
};

slide.addEventListener('transitionend', () => {
    slides = document.querySelectorAll('.slide');

    if (slides[idx].id === firstClone.id) {
        slide.style.transition = 'none';
        idx = 1;
        slide.style.transform = `translateX(${-width * idx}px)`;
    }
    if (slides[idx].id === lastClone.id) {
        slide.style.transition = 'none';
        idx = slides.length - 2;
        slide.style.transform = `translateX(${-width * idx}px)`;
    }
});

const moveToNextSlide = () => {

    slides = document.querySelectorAll('.slide');

    if(idx >= slides.length-1){
        return;
    }

    idx++;
    slide.style.transform = `translateX(${-width * idx}px)`;
    slide.style.transition = '0.7s';
}

const moveToPrevSlide = () => {

    if(idx <= 0){
        return;
    }

    idx--;
    slide.style.transform = `translateX(${-width * idx}px)`;
    slide.style.transition = '0.7s';
}

slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);

startSlide();
