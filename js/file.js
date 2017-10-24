/* global $, smoothScroll , Typed */

$('.slick').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 2000,
    cssEase: 'linear',
    rtl: true,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
});
$('#carousel').slick({
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed:2500,
    speed: 500,
    variableWidth: true,
    onAfterChange: function(){ 
          var cat = ($('#carousel').slickCurrentSlide()) + 1;
          $('.client-text > li').hide();
          $('.client-text > li:nth-child('+ cat +')').show();
    }
});



  $('.client-text > li').hide();
  $('.client-text > li:first-child').show();

$('.popularFood').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 2000,
    cssEase: 'linear',
    rtl: true,
    arrows:true,
    infinite: true,

});


    // This For Scrolling 
$("html").niceScroll();

    
// For Smooth Scrolling LOl It's birtty GOod
    smoothScroll.init({
        updateURL: false,
        speed: 2000,
        offset: 100,
    });

 Typed.new(".intro", {
            strings: [
                "خبرة دامت اكثر من 8 سنين في تقديم خدمات الاعاشة...",
                "خبراتنا دامت لعقود...",
                
            ],
            typeSpeed: 100,
            loop: true,
            loopCount: null
        });

