$(document).ready(function () {
  setTimeout(function () {
    $('.header').addClass('fixed');
  }, 700);
  $('.header .logo').addClass('wow fadeInLeftBig');
  $(window).scroll(function () {
    var sticky = $('.header'),
      scroll = $(window).scrollTop();

    if (scroll >= headerHeight) sticky.addClass('shadow');
    else sticky.removeClass('shadow');
    if (scroll >= headerHeight) {
      $('.scroll-top').addClass('scroll');
    } else {
      $('.scroll-top').removeClass('scroll');
    }
  });


});



let headerHeight = $('.header').outerHeight();
document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});