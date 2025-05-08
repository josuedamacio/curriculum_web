(function($) {
  "use strict";

  // Smooth scrolling
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function(e) {
    const pathnameMatch = location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '');
    const hostnameMatch = location.hostname === this.hostname;

    if (pathnameMatch && hostnameMatch) {
      let target = $(this.hash);
      target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, 'easeInOutExpo');

        e.preventDefault();
      }
    }
  });

  // Close responsive menu on link click
  $('.js-scroll-trigger').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery);


/** Mismo codigo pero menos legible
 * 
 * (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

 */