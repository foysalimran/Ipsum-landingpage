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