
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.menu').fadeIn();
  } else {
    $('.menu').fadeOut();
  }
});
