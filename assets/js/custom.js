/*------------------------------------------------------------------
jQuery document ready
-------------------------------------------------------------------*/
$(document).ready(function () {
	"use strict";

	// Pricing switcher button
	$(".switcher__button").on('click', function(e) { 
	    $(".switcher__button").toggleClass('switcher__button--enabled');
		$(".pricing__value").removeClass('pricing__value--hidden');
		$(".pricing__value").toggleClass('pricing__value--show pricing__value--hide');	
	});
});


$('#nav').onePageNav({
currentClass: 'current',
changeHash: false,
scrollSpeed: 50,
filter: '',
easing: 'swing',
begin: function() {
	//I get fired when the animation is starting
},
end: function() {
	//I get fired when the animation is ending
},
scrollChange: function($currentListItem) {
	//I get fired when you enter a section and I pass the list item of the section
}
});