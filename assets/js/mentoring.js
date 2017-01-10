$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var pastEvents = $.getJSON("mentoring_pastEvents.json", function() {
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

    var pastEventsTemplate = Mustache.render($('#pastEventsTemplate').html(), pastEvents);
    $('#past-events-list').html(pastEventsTemplate);
});
