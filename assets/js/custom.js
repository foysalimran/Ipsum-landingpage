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

  /******************** 1. NAVBAR FIXED ********************/
  PATH.navbarFixed = function () {
    if ($(".sticky_nav").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll) {
          $(".sticky_nav").addClass("navbar_fixed");
        } else {
          $(".sticky_nav").removeClass("navbar_fixed");
        }
      });
    }
  };

  /******************** 2. NAVBAR ********************/
  PATH.HeaderNav = function () {
    $("#navbar01").headerNav({
      currentClass: "current",
      changeHash: false,
      scrollSpeed: 50,
      easing: "swing",
    });
  };


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

  /******************** 4. ONE PAGE NAV FOR SIDEBAR ********************/
  PATH.OnePageNav = function () {
    $("#nav").onePageNav({
      currentClass: "current",
      changeHash: false,
      scrollSpeed: 50,
      easing: "swing",
    });
  };


  /* Document ready function */
  $(function () {
    PATH.PricingToggler();
    PATH.OnePageNav();
    PATH.HeaderNav();
  });

  /* Window on scroll function */
  $(window).on("scroll", function () {
    PATH.navbarFixed();
  });

  /* Window on load function */
  $(window).on("load", function () {});

})(jQuery);
