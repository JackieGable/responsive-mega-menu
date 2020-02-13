$(function(){
  'use strict'

  feather.replace();

  $('.header-nav .with-sub').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('show');
    $(this).parent().siblings().removeClass('show');
  })

  // Closing dropdown menu of navbar menu
  $(document).on('click touchstart', function(e){
    e.stopPropagation();

    // closing nav sub menu of header when clicking outside of it
    if(window.matchMedia('(min-width: 992px)').matches) {
      var navTarg = $(e.target).closest('.header-nav .nav-item').length;
      if(!navTarg) {
        $('.header-nav .show').removeClass('show');
      }
    }

    // show/hide main menu for smaller screens
    if(window.matchMedia('(max-width: 1199px)').matches) {
      var a = $(e.target).closest('.header-nav').length;
      var b = $(e.target).closest('.header-menu').length;
      if(!a && !b) {
        $('body').removeClass('show-menu');
      }
    }
  })


  $('.header-menu a').on('click touchstart', function(e){
    e.preventDefault();
    $('body').toggleClass('show-menu');
  });
})
