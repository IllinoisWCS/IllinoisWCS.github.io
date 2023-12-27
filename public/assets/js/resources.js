$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $.getJSON("../assets/js/resources.json", function(data) {
     $("#internshipsList").html(Mustache.render($("#resourceTemplate").html(), data.internships));
    $("#scholarshipsList").html(Mustache.render($("#resourceTemplate").html(), data.scholarships));
    $("#conferencesList").html(Mustache.render($("#resourceTemplate").html(), data.conferences));
    $("#communitiesList").html(Mustache.render($("#resourceTemplate").html(), data.communities));
    $("#othersList").html(Mustache.render($("#resourceTemplate").html(), data.influencers));


    });

});
