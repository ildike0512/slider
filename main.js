'use strict';
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = 
    document.querySelectorAll('.pictures');

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1){
            slideIndex = slides.length
        }
    const dots =
    document.querySelector('.dot'); 

        for (let slide of slides){
            slide.style.display = 'none';
         }

         /* for (let dot of dots){
             dot.style.replace ('active', '');
         }  */

         slides[slideIndex-1].style.display = 'block';

} 