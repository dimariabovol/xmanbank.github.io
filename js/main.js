$(document).ready(function(){
   menu();
   slider();
});

function menu() {
   $(".burger").on('click', function () {
         var $parent = $(".burger, .menu");
         if ($parent.hasClass('mob-menu')) {
            $parent.removeClass('mob-menu');
         } else {
            $parent.addClass('mob-menu');
         }
   }); 
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".burger, .menu").length) {
         if ($(".burger, .menu").hasClass("mob-menu")) {
            $(".burger, .menu").removeClass("mob-menu");
         }
      }
   });
}

function slider() {
   $('.slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      dotsClass: 'dots'
    });
}