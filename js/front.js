$(function () {


    // ------------------------------------------------------ //
    // Masonary
    // ------------------------------------------------------ //
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 0
    });


    // ------------------------------------------------------ //
    //  Off-canvas menu
     // ------------------------------------------------------ //

     $(document).ready(function () {
         $('[data-toggle="offcanvas"]').click(function () {
             $('.row-offcanvas').toggleClass('active')
         });
     });



    // ------------------------------------------------------ //
    // Main slider
    // ------------------------------------------------------ //
    $('#main-slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true
    });

});
