  $('form').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function () {
      $('.modal-window-wrap').addClass('--open');
      $('body').addClass('scroll-disabled');
    });
    return false;
  });

  $('.modal-window__close').on('click', function () {
    $('.modal-window-wrap').removeClass('--open');
    $('body').removeClass('scroll-disabled');
  });