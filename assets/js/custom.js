/**
 * Table of contents
 * -----------------------------------
 * 1. NAVBAR FIXED
 * 2. NAVBAR
 * 3. PRICING TOGGLER
 * 4. ONE PAGE NAV FOR SIDEBAR
 *
 */

 (function ($) {
  "use strict";
   var PATH = {};
   
   /******************** 2. ADD CLASS HEADER ********************/
	PATH.HeaderSticky = function () {
		$(".navbar-toggler").on("click", function (a) {
			a.preventDefault(),
				$(".navbar").addClass("navbar_fixed")
		});
  }
   
   /******************** 3. NAV COLLAPSE ********************/
	PATH.MenuClose = function () {
		$('.navbar-nav .nav-link').on('click', function () {
			var toggle = $('.navbar-toggler').is(':visible');
			if (toggle) {
				$('.navbar-collapse').collapse('hide');
			}
		});
	}

	/******************** 4. NAV SMOOTH SCROLL ********************/
  PATH.HeaderScroll = function () {
		$('.navbar a[href*="#"]:not([href="#"])').on('click', function () {
			var PathName = location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname;
			if (PathName) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 65,
					}, 1000);
					return false;
				}
			}
		});
	}
   
   
  PATH.OverviewScroll = function () {
		$('.overview__sidebar a[href*="#"]:not([href="#"]').on('click', function () {
			var PathName = location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname;
			if (PathName) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 65,
					}, 1000);
					return false;
				}
			}
		});
	}

	/******************** 5. FIXED HEADER ********************/
	PATH.HeaderFixed = function () {
		var varHeaderFix = $(window).scrollTop() >= 60,
		$navbar = $('.navbar');
		if (varHeaderFix) {
			$navbar.addClass('navbar_fixed');
		} else {
			$navbar.removeClass('navbar_fixed');
		}
	}





  /******************** 3. PRICING TOGGLER ********************/
  PATH.PricingToggler = function () {
    $(".switcher__button").on("click", function (e) {
      $(".switcher__button").toggleClass("switcher__button--enabled");
      $(".pricing__value").removeClass("pricing__value--hidden");
      $(".pricing__value").toggleClass(
        "pricing__value--show pricing__value--hide"
      );
    });
  };

// Navbar add class
   
PATH.NavbarAddClass = function () {
  var btns = $(".navbar-nav .nav-item");
  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click",
      function () {
          var current = document
              .getElementsByClassName("current");
          current[0].className = current[0]
              .className.replace(" current", "");
          this.className += " current";
      });
  }
 
 
      var distance = $(window).scrollTop();
      $('section').each(function (i) {
 
          if ($(this).position().top 
              <= distance + 250) {
                
                  $('.navbar-nav li.current')
                      .removeClass('current');
 
                  $('.navbar-nav li').eq(i)
                      .addClass('current');
          }
      });
};
   
   
   // OVERVIEW ADD CLASS
   PATH.OverviewAddClass = function () {
   var btns = $(".overview__sidebar li");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click",
                function () {
                    var current = document
                        .getElementsByClassName("current");
                    current[0].className = current[0]
                        .className.replace(" current", "");
                    this.className += " current";
                });
            }
  

                var distance = $(window).scrollTop();
                $('.overview__content').each(function (i) {
  
                    if ($(this).position().top 
                        <= distance + 250) {
                          
                            $('.overview__sidebar li.current')
                                .removeClass('current');
  
                            $('.overview__sidebar li').eq(i)
                                .addClass('current');
                    }
                });
              };
  /* Document ready function */
  $(function () {
    PATH.PricingToggler();
    PATH.MenuClose();
    PATH.HeaderScroll();
    PATH.HeaderSticky();
  });

  /* Window on scroll function */
  $(window).on("scroll", function () {
    PATH.HeaderFixed();
    PATH.NavbarAddClass();
    PATH.OverviewAddClass();
  });

  /* Window on load function */
   $(window).on("load", function () {
    PATH.OverviewScroll();
  });

 })(jQuery)

