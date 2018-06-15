$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $.getJSON("../assets/js/mentoring_pastEvents.json", function(data) {
      var pastEventsTemplate = Mustache.render($('#pastEventsTemplate').html(), data);
      $('#past-events-list').html(pastEventsTemplate);
    });
});
