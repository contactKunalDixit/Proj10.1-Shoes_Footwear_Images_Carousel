const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");

const left = document.getElementById("left");
const right = document.getElementById("right");

const SLIDES_COUNT = slides.length;

let current_slide = 0;


right.addEventListener("click", () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }
    updateCarousel();
});


left.addEventListener("click", () => {
    current_slide--;
    if (current_slide < 0) {
        current_slide = SLIDES_COUNT - 1;
    }
    updateCarousel();
});


/*
    ! The offsetWidth property returns the viewable of an element in pixels, including padding, border and scrollbar, but not the margin.

    ! The reason why the "viewable" word is used, is because if the element's content is wider than the actual width of the element, this property will only return the width that is visible\
    
    ! this property is often used along with offsetHeight property.
    */


function updateCarousel() {
    carousel.style.transform = `translateX(${-current_slide *slides[0].offsetWidth}px)`;

console.log(slides[current_slide].getAttribute("data-bg"))

    document.body.style.background = `#${slides[current_slide].getAttribute("data-bg")}`;
}