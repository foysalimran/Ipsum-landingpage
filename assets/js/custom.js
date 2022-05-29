/**
 * Table of contents
 * -----------------------------------
 * 1. PRICING TOGGLER
 * 2. ONE PAGE NAV FOR SIDEBAR
 *
 */

(function ($) {
"use strict"
var PATH = {};
/******************** 1. PRICING TOGGLER ********************/
PATH.PricingToggler = function () {
	$(".switcher__button").on('click', function(e) { 
		$(".switcher__button").toggleClass('switcher__button--enabled');
		$(".pricing__value").removeClass('pricing__value--hidden');
		$(".pricing__value").toggleClass('pricing__value--show pricing__value--hide');	
	});
}
/******************** 1. ONE PAGE NAV FOR SIDEBAR ********************/
PATH.OnePageNav = function () {
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 50,
		easing: 'swing',
	});
}
	
/* Document ready function */
$(function(){
	PATH.PricingToggler();
	PATH.OnePageNav();
});
	
/* Window on scroll function */
$(window).on("scroll", function () {
	
});
	
/* Window on load function */
$(window).on('load', function () {

});
//
	
})(jQuery);