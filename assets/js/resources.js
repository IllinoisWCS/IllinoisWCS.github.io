$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var resources = $.getJSON("resources.json", function() {
      console.log("success");
    })
      .done(function() {
        console.log("second success");
    })
      .fail(function() {
        console.log("error");
    })
      .always(function() {
        console.log("complete");
  });

    $("#internshipsList").html(Mustache.render($("#resourceTemplate").html(), resources.internships));
    $("#scholarshipsList").html(Mustache.render($("#resourceTemplate").html(), resources.scholarships));
    $("#conferencesList").html(Mustache.render($("#resourceTemplate").html(), resources.conferences));
});
