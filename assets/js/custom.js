/**
 * Table of contents
 * -----------------------------------
 * 1. HEADER STICKY
 * 2. NAVBAR ADD CLASS
 * 3. NAV COLLAPSE
 * 4. NAV SMOOTH SCROLL
 * 5. FIXED HEADER
 * 6. OVERVIEW ADD CLASS
 * 7. OVERVIEW SCROLL
 * 8. PRICING TOGGLER
 * 9. HOW IT WORKS SLIDER
 * 10. TESTIMONIAL SLIDER
 * 11. COUNTER UP
 *
 * DOCUMENT READY FUNCTION
 * WINDOW ON SCROLL FUNCTION
 * WINDOW ON LOAD FUNCTION
 */

(function ($) {
  "use strict";
  var PATH = {};

  /******************** 1. HEADER STICKY ********************/
  PATH.HeaderSticky = function () {
    $(".navbar-toggler").on("click", function (a) {
      a.preventDefault(), $(".navbar").addClass("navbar_fixed");
    });
  };

  /******************** 2. NAVBAR ADD CLASS ********************/
  PATH.NavbarAddClass = function () {
    var btns = $(".navbar-nav .nav-item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("current");
        current[0].className = current[0].className.replace(" current", "");
        this.className += " current";
      });
    }

    var distance = $(window).scrollTop();
    $("section").each(function (i) {
      if ($(this).position().top <= distance + 250) {
        $(".navbar-nav li.current").removeClass("current");

        $(".navbar-nav li").eq(i).addClass("current");
      }
    });
  };

  /******************** 3. NAV COLLAPSE ********************/
  PATH.MenuClose = function () {
    $(".navbar-nav .nav-link").on("click", function () {
      var toggle = $(".navbar-toggler").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse("hide");
      }
    });
  };

  /******************** 4. NAV SMOOTH SCROLL ********************/
  PATH.HeaderScroll = function () {
    $('.navbar a[href*="#"]:not([href="#"])').on("click", function () {
      var PathName =
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") ||
        location.hostname == this.hostname;
      if (PathName) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 65,
            },
            1000
          );
          return false;
        }
      }
    });
  };

  /******************** 5. FIXED HEADER ********************/
  PATH.HeaderFixed = function () {
    var varHeaderFix = $(window).scrollTop() >= 60,
      $navbar = $(".navbar");
    if (varHeaderFix) {
      $navbar.addClass("navbar_fixed");
    } else {
      $navbar.removeClass("navbar_fixed");
    }
  };

  PATH.HeroVideo = function () {
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    $('#heroModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
    $('#heroModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc); 
    })
    };

  /******************** 6. OVERVIEW ADD CLASS ********************/
  PATH.OverviewAddClass = function () {
    var btns = $(".overview__sidebar li");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("current");
        current[0].className = current[0].className.replace(" current", "");
        this.className += " current";
      });
    }

    var distance = $(window).scrollTop();
    $(".overview__content").each(function (i) {
      if ($(this).position().top <= distance + 250) {
        $(".overview__sidebar li.current").removeClass("current");

        $(".overview__sidebar li").eq(i).addClass("current");
      }
    });
  };

  /******************** 7. OVERVIEW SCROLL ********************/
  PATH.OverviewScroll = function () {
    $('.overview__sidebar a[href*="#"]:not([href="#"]').on(
      "click",
      function () {
        var PathName =
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") ||
          location.hostname == this.hostname;
        if (PathName) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html,body").animate(
              {
                scrollTop: target.offset().top - 65,
              },
              1000
            );
            return false;
          }
        }
      }
    );
  };

  /******************** 8. PRICING TOGGLER ********************/
  PATH.PricingToggler = function () {
    $(".switcher__button").on("click", function (e) {
      $(".switcher__button").toggleClass("switcher__button--enabled");
      $(".pricing__value").removeClass("pricing__value--hidden");
      $(".pricing__value").toggleClass(
        "pricing__value--show pricing__value--hide"
      );
    });
  };

  /******************** 9. HOW IT WORKS SLIDER ********************/
  PATH.HowWorksSlide = function () {
    var howWorksTitles = new Swiper(".how-works-titles", {
      spaceBetween: 1,
      centeredSlides: true,
      slidesPerView: "auto",
      touchRatio: 1,
      slideToClickedSlide: true,
    });
    var howWorksContent = new Swiper(".how-works-content", {
      direction: "horizontal",
      effect: "slide",
    });

    howWorksTitles.controller.control = howWorksContent;
    howWorksContent.controller.control = howWorksTitles;
  };

  /******************** 10. TESTIMONIAL SLIDER  ********************/
  PATH.TestimonialSlide = function () {
    var testimonialSlider = new Swiper(".clients-slider", {
      slidesPerView: 3,
      spaceBetween: 18,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  };

  /******************** 11. COUNTER UP  ********************/
  PATH.CounterUp = function () {
    jQuery(document).ready(function ($) {
      $(".counter").counterUp({
        delay: 10,
        time: 1000,
      });
    });
  };

  /******************** DOCUMENT READY FUNCTION ********************/
  $(function () {
    PATH.MenuClose();
    PATH.HeaderScroll();
    PATH.HeaderSticky();
    PATH.PricingToggler();
    PATH.HowWorksSlide();
    PATH.TestimonialSlide();
    PATH.HeroVideo();
  });

  /******************** WINDOW ON SCROLL FUNCTION ********************/
  $(window).on("scroll", function () {
    PATH.HeaderFixed();
    PATH.NavbarAddClass();
    PATH.OverviewAddClass();
   
  });

  /******************** WINDOW ON LOAD FUNCTION ********************/
  $(window).on("load", function () {
    PATH.OverviewScroll();
    PATH.CounterUp();
  });
})(jQuery);
