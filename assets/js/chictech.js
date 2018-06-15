$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $.getJSON("../assets/js/chictech_questions.json", function(data) {
     var faqTemplate = Mustache.render($('#faqTemplate').html(), data);
    $('#accordion').html(faqTemplate);
    });


    $.getJSON("../assets/js/chictech_schedule117.json", function(data) {
      var schedule117Template = Mustache.render($('#eventTemplate').html(), data);
    $('#agenda117').html(schedule117Template);
    });


    $.getJSON("../assets/js/chictech_schedule118.json", function(data) {
      var schedule118Template = Mustache.render($('#eventTemplate').html(), data);
    $('#agenda118').html(schedule118Template);
    });
});
