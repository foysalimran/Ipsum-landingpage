/**
 * Table of contents
 * -----------------------------------
 * 1. HEADER STICKY
 * 2. NAVBAR ADD CLASS
 * 3. NAV COLLAPSE
 * 4. FIXED HEADER
 * 5. HERO VIDEO
 * 6. OVERVIEW ADD CLASS
 * 7. OVERVIEW SCROLL
 * 8. PRICING TOGGLER
 * 9. HOW IT WORKS SLIDER
 * 10. TESTIMONIAL SLIDER
 * 11. COUNTER UP
 * 12. AJAX MAILCHIMP SUBSCRIBE
 * 13. LOCAL SUBSCRIPTION
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
  PATH.HeaderOnePageNav = function () {
    $(".scroll").onePgaeNav({
      activeClass: "active",
      wrapper: "#onepage-nav",
      navStop: 50,
      navStart: 200,
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

  /******************** 4. FIXED HEADER ********************/
  PATH.HeaderFixed = function () {
    var varHeaderFix = $(window).scrollTop() >= 60,
      $navbar = $(".navbar");
    if (varHeaderFix) {
      $navbar.addClass("navbar_fixed");
    } else {
      $navbar.removeClass("navbar_fixed");
    }
  };

  /******************** 5. HERO VIDEO ********************/
  PATH.HeroVideo = function () {
    $(".js-modal-btn").modalVideo();
  };

  /******************** 6. OVERVIEW ADD CLASS ********************/
  PATH.OverviewScrollNav = function () {
    $(".olink").onePgaeNav({
      activeClass: "active",
      wrapper: "#nav",
      navStop: 100,
      navStart: 200,
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

  /******************** 12. AJAX MAILCHIMP SUBSCRIBE ********************/
  PATH.ajaxChimp = function () {
    $("#subscribe-mailchimp").ajaxChimp({
      callback: mailchimpCallback,
      url: "http:////unitetheme.us12.list-manage.com/subscribe/post?u=5e0141c017272ff01c6c3a091&amp;id=335f7c3601", // Replace your mailchimp post url inside double quote "".
    });

    function mailchimpCallback(resp) {
      var error_msg = $("#subscribe-mailchimp").find(".error-msg");
      var success_msg = $("#subscribe-mailchimp").find(".success-msg");

      if (resp.result === "success") {
        error_msg.fadeOut(200);
        success_msg.html(resp.msg).fadeIn(200);
      } else if (resp.result === "error") {
        success_msg.fadeOut(200);
        error_msg.html(resp.msg).fadeIn(200);
      }
    }
  };
  /******************** 13. LOCAL SUBSCRIPTION ********************/
  PATH.localSubs = function () {
    $("#subscribe").submit(function (e) {
      e.preventDefault();
      var email = $("#subscriber-email").val();
      var dataString = "email=" + email;

      function isValidEmail(emailAddress) {
        var pattern = new RegExp(
          /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
        );
        return pattern.test(emailAddress);
      }

      if (isValidEmail(email)) {
        $.ajax({
          type: "POST",
          url: "assets/subscribe/subscribe.php",
          data: dataString,
          success: function () {
            $(".success-msg").fadeIn(1000);
            $(".error-msg").fadeOut(500);
            $(".hide-after").fadeOut(500);
          },
        });
      } else {
        $(".error-msg").fadeIn(1000);
      }

      return false;
    });
  };

  /******************** DOCUMENT READY FUNCTION ********************/
  $(function () {
    PATH.MenuClose();
    PATH.HeaderOnePageNav();
    PATH.HeaderSticky();
    PATH.HeroVideo();
    PATH.OverviewScrollNav();
    PATH.PricingToggler();
    PATH.HowWorksSlide();
    PATH.TestimonialSlide();
    PATH.CounterUp();
    PATH.ajaxChimp();
    PATH.localSubs();
  });

  /******************** WINDOW ON SCROLL FUNCTION ********************/
  $(window).on("scroll", function () {
    PATH.HeaderFixed();
  });

  /******************** WINDOW ON LOAD FUNCTION ********************/
  $(window).on("load", function () {});
})(jQuery);
