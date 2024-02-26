let slider = document.querySelector(".testimonial-slider");
let rightArrow = document.querySelector("#right");
let leftArrow = document.querySelector("#left");

slider.addEventListener("wheel", (evt) => {
    evt.preventDefault();

    slider.scrollLeft += evt.deltaY;
    slider.style.scrollBehavior = "auto";
});

rightArrow.addEventListener("click", () => 
{
    // slider.style.scrollBehavior = "smooth";
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft += 500;
});

leftArrow.addEventListener("click", () => 
{
    slider.style.scrollBehavior = "smooth";
    slider.scrollLeft -= 500;
});