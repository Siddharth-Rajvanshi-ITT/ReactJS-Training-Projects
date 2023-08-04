let testimonials = document.getElementsByClassName("card");
let slideNumber = 0;

console.log(testimonials);

testimonials = Array.from(testimonials);

document.querySelector(".next").addEventListener("click", () => {
    testimonials[slideNumber].hidden = true;

    slideNumber = (slideNumber + 1) % testimonials.length;

    testimonials[slideNumber].hidden = false;

})

document.querySelector(".previous").addEventListener("click", () => {
    testimonials[slideNumber].hidden = true;

    slideNumber = (slideNumber - 1 + testimonials.length) % testimonials.length;

    testimonials[slideNumber].hidden = false;
})

