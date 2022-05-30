/*----------------------------------------------------
Initialize Swiper
-----------------------------------------------------*/
var swipert = new Swiper ('.how-works-titles', {
spaceBetween: 1,
centeredSlides: true,
slidesPerView: 'auto',
touchRatio: 1,
slideToClickedSlide: true
}); 
var swiperc = new Swiper ('.how-works-content', {
direction: 'horizontal',
effect: 'slide'
}); 

swipert.controller.control = swiperc;
swiperc.controller.control = swipert;