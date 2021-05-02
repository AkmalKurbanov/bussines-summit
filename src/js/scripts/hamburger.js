$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('open');
    $('body').toggleClass('scroll-disabled');
    setTimeout(function () {
      $('.mobile-menu').toggleClass('--open');
    }, 500);
  });
  $('.mobile-menu__close, .mobile-menu__nav a').on('click', function () {
    setTimeout(function () {
      $('.mobile-menu').removeClass('--open');
    }, 500);
    $('body').removeClass('scroll-disabled');
    $('.hamburger').removeClass('open');
  });
});