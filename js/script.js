$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock'); /*блочим прокрутку при открытии меню*/
   })
})

$(window).resize(function (event) {
   adaptive_function();
})
function adaptive_header(w, h) {
   var headerMenu = $('.header__menu');
   var headerNav = $('.header__nav');
   if (w < 450) {
      if (!headerNav.hasClass('done')) {
         headerNav.addClass('done').appendTo(headerMenu);
      }
   } else {
      $.each($('.header__nav'), function (index, val) {
         if ($(this).hasClass('mid__nav-righ')) {
            if ($(this).hasClass('done')) {
               $(this).removeClass('done').appendTo($('.header__mid'));
            }
         } else {
            if ($(this).hasClass('done')) {
               $(this).removeClass('done').prependTo($('.header__mid'));
            }
         }
      });
   }
}
function adaptive_function() {
   var w = $(window).outerWidth();
   var h = $(window).outerHeight();
   adaptive_header(w, h);
}
adaptive_function();