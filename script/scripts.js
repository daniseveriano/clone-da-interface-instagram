let time = 5000;
let currentIndex = 0;
let images = document.querySelectorAll(".carousel__image");
let max = images.length;

const nextImage = () => {
    images[currentIndex].classList.remove("selected");
    currentIndex++;    
    if (currentIndex >= max) {
        currentIndex = 0;
    }
    images[currentIndex].classList.add("selected");
}

const start = () => {
    setInterval(() => {
        nextImage();
    }, time);
}

window.addEventListener("load", start);