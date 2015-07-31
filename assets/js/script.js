$(document).ready(function() {
    $('div.memberImage').hover(function(event) {
        $(this).children().css('visibility', 'visible');
    }, function(event) {
        $(this).children().css('visibility', 'hidden');
    });

    $("#slideshow").carousel({
        interval: 4000
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});