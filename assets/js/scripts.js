// General document ready
$(document).ready(function() {
  $('body').addClass('isLoaded');

  // set smoothScroll
  $('a[href^="#"]').smoothScroll({
    offset: -($('header').outerHeight())
  });

  // nav toggle
  $('.header__navtoggle').click(function(e) {
    e.preventDefault();
    $('header').toggleClass('isExpanded');
  });
  $('.menu a').click(function(e) {
    $('header').removeClass('isExpanded');
  });

  $('.js-stick-in-parent').stick_in_parent();
  $('.js-stick-in-main').stick_in_parent({ parent: 'main', inner_scrolling: false, offset_top: 100 });
  $('.js-stick-in-body').stick_in_parent({ parent: 'body' });

});


// Bind sectionScroll to namespaced events 
events = 'scroll resize scrollstart scrollstop';
$(document).on(events, function() { sectionScroll(); });
$(document).ready(function () { sectionScroll(); });

function sectionScroll() {
  scroll = $(window).scrollTop();
  delta = 100000; // big number

  // active section detection
  $('section').each(function(i) {
    scrollpoint = scroll + $(window).outerHeight()/2;
    midpoint = $(this).offset().top + $(this).outerHeight()/2.5;

    if (Math.abs(scrollpoint - midpoint) < delta) {
      delta = Math.abs(scrollpoint - midpoint);

      $('section').removeClass('isActive');
      $('body').attr('data-active-section', i+1);
      $(this).addClass('isActive');

      $('header ul a').removeClass('isActive');
      $('header ul a[href="#' + $(this).attr('id') + '"]').addClass('isActive');
    }
  });

}
