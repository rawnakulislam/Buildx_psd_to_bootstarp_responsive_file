$(function () {

    //    mixitup
    var mixer = mixitup('.gallary');

    //    slick
    $('.slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true

    });

    //      count
    $('.counterre').counterUp({
        delay: 30,
        time: 7000
    });
    //wow
    new WOW().init();

    //==== back tot top
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    //===== Sticky
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navigation").removeClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo-2.png");
        } else {
            $(".navigation").addClass("sticky");
            $(".header-three .navigation img").attr("src", "images/logo.png");
        }
    });


    //        venobox
    $('.venom').venobox({
        framewidth: '700px',
        spinner: 'wave'
    });









});
