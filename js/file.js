/* global $, smoothScroll , Typed, WOW */
 new WOW().init();
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

$('.popularFood-en').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 2000,
    cssEase: 'linear',
    rtl: true,
    arrows:false,
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

 Typed.new(".introE", {
            strings: [
                "Our experience of more than 8 years in the provision of rations...",
                "Our experiences have lasted for decades...",
                
            ],
            typeSpeed: 100,
            loop: true,
            loopCount: null
        });

