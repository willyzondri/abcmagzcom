$(function() {
  var menuVisible = false;
  $('#show-menu').click(function() {
    if (menuVisible) {
      $('.navbar-center').css({'display':'none'});
      $('.navbar-search').css({'display':'none'})
      menuVisible = false;
      return;
    }
    $('.navbar-center').css({'display':'block'});
    $('.navbar-search').css({'display':'block'})
    menuVisible = true;
  });
});

if(jQuery("#wpadminbar").length){
	document.write('<style type="text/css">.fixed-header{top:32px;} @media only screen and (max-width: 782px){.fixed-header{top:46px;}} @media only screen and (max-width: 600px){html #wpadminbar{position:fixed;}}</style>');
}
