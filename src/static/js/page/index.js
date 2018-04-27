require(['jquery', 'template', 'handlebars', 'swiper'], function($, template, handlebars, swiper) {
    var swiper = new Swiper('.swiper-container', {
        autoplay: 1000,
        loop: true
    })
    $('.footer .one').on('click', function() {
        $(this).css('color', 'red').siblings().css('color', '#000');
        $('.bodyer').css('display', 'none');
        $('.main').css('display', 'none');
        $('.bodyer1').css('display', 'block');
    })
    $('.footer .two').on('click', function() {
        $(this).css('color', 'red').siblings().css('color', '#000');
        $('.bodyer').css('display', 'none');
        $('.main').css('display', 'none');
        $('.bodyer2').css('display', 'block');
    })
    $('.footer .three').on('click', function() {
        $(this).css('color', 'red').siblings().css('color', '#000');
        $('.bodyer').css('display', 'none');
        $('.main').css('display', 'none');
        $('.bodyer3').css('display', 'block');
    })
    $('.footer .four').on('click', function() {
        $(this).css('color', 'red').siblings().css('color', '#000');
        $('.bodyer').css('display', 'none');
        $('.main').css('display', 'none');
        $('.bodyer4').css('display', 'block');
    })
})