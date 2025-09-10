const slideContainer = document.querySelector('.slide-container');
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

// Showroom gallery-carousel
document.addEventListener("DOMContentLoaded", () => {
    const showroomSections = document.querySelectorAll(".showroom-section");

    showroomSections.forEach(section => {
        const sliderScrollbar = section.querySelector(".slider-scrollbar");
        const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
        const imageList = section.querySelector(".img-list");
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

        const updateThumbPosition = () => {
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            const scrollRatio = imageList.scrollLeft / maxScrollLeft;
            const thumbPosition = scrollRatio * maxThumbPosition;
            scrollbarThumb.style.left = `${thumbPosition}px`;
        };

        scrollbarThumb.addEventListener("mousedown", (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollbarThumb.offsetLeft;

            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                let newThumbPosition = thumbPosition + deltaX;
                const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
                
                const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                scrollbarThumb.style.left = `${boundedPosition}px`;
                imageList.scrollLeft = scrollPosition;
            };

            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        });

        imageList.addEventListener("scroll", updateThumbPosition);

        updateThumbPosition();
    });
});

const showroomButton = document.getElementById('showroom-button');

showroomButton.addEventListener('click', () => {
    document.getElementById('showrooms').scrollIntoView({ behavior: 'smooth' });
});

