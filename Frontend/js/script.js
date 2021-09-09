$(document).ready(function () {
    $('.menu-icon').click(function (e) { 
        e.preventDefault();
        $('.nav').addClass('active');
        $('.cover').addClass('active');
    });

    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.nav').removeClass('active');
        $('.cover').removeClass('active');
    });

    $('.feedback-inner').slick({
        dots: true,
        arrows: false
    });

});