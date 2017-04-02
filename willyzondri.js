//<![CDATA[
/*
  Load CSS
*/
function loadCSS(e, t, n) { 
  "use strict";
   var i = window.document.createElement("link"); 
   var o = t || window.document.getElementsByTagName("script")[0]; 
   i.rel = "stylesheet"; i.href = e; 
   i.media = "only x";
   o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" })
}
loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css"); 
//]]>
//<![CDATA[

//Fixed Header
$(document).ready(function() {

var  mn = $("#fixed-header");
    mns = "sticky";
    hdr = $('#fixed-header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
      if (jQuery('#wpadminbar').length){
        $('#fixed-header').addClass('awesome');
      }
  } else {
    mn.removeClass(mns);
  }
});

   });
//]]>

//<![CDATA[

//Mobile Navigation
$(function() {
  var menuVisible = false;
  $('#show-menu').click(function() {
    if (menuVisible) {
      $('.navbar-center').addClass('hide-nav');
      $('.navbar-center').removeClass('visible-nav'); 
      menuVisible = false;
      return;
    }
    $('.navbar-center').addClass('visible-nav');
    $('.navbar-center').removeClass('hide-nav'); 
    menuVisible = true;
  });
});

$(function() {
  var searchVisible = false;
  $('#show-search').click(function() {
    if (searchVisible) {
      $('.navbar-search').addClass('hide-nav');
      $('.navbar-search').removeClass('visible-nav'); 
      searchVisible = false;
      return;
    }
    $('.navbar-search').addClass('visible-nav');
    $('.navbar-search').removeClass('hide-nav'); 
    searchVisible = true;
  });
});
//]]>
