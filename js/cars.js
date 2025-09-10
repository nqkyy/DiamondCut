

const topNewSlider = () => {
    const topNewImgList = document.querySelector(".top-new-img-list");
    const topNewSlideButtons = document.querySelectorAll(".top-new-slide-button");
    
    topNewSlideButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("Button clicked");
            const topNewDirection = button.id === "prev-slide" ? -1 : 1;
            const topNewScrollAmount = topNewImgList.clientWidth * topNewDirection; 
            topNewImgList.scrollBy({ left: topNewScrollAmount, behavior: "smooth" });
        });
    });
};

window.addEventListener("load", topNewSlider);

const topUsedSlider = () => {
    const topUsedImgList = document.querySelector(".top-used-img-list");
    const topUsedSlideButtons = document.querySelectorAll(".top-used-slide-button");
    
    topUsedSlideButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("Button clicked");
            const topUsedDirection = button.id === "prev-slide" ? -1 : 1;
            const topUsedScrollAmount = topUsedImgList.clientWidth * topUsedDirection; 
            topUsedImgList.scrollBy({ left: topUsedScrollAmount, behavior: "smooth" });
        });
    });
};

window.addEventListener("load", topUsedSlider);

const newButton = document.getElementById('new');
const usedButton = document.getElementById('used');

newButton.addEventListener('click', () => {
    document.getElementById('new-slider').scrollIntoView({ behavior: 'smooth' });
});

usedButton.addEventListener('click', () => {
    document.getElementById('used-slider').scrollIntoView({ behavior: 'smooth' });
});
