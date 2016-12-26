$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var faq = $.getJSON("chictech_questions.json", function() {
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

    var faqTemplate = Mustache.render($('#faqTemplate').html(), faq);
    $('#accordion').html(faqTemplate);

    var schedule117 = $.getJSON("chictech_schedule117.json",        function() {
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

    var schedule118 = $.getJSON("chictech_schedule118.json",         function() {
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

    var schedule117Template = Mustache.render($('#eventTemplate').html(), schedule117);
    $('#agenda117').html(schedule117Template);

    var schedule118Template = Mustache.render($('#eventTemplate').html(), schedule118);
    $('#agenda118').html(schedule118Template);
});