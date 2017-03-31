$(function() {
  var menuVisible = false;
  $('#show-menu').click(function() {
    if (menuVisible) {
      $('.navbar-center').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('.navbar-center').css({'display':'block'});
    menuVisible = true;
  });
});
