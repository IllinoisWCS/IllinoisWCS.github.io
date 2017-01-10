$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var recommendations = $.getJSON("techteam.json", function() {
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

    var recTemplate = Mustache.render($('#recTemplate').html(), recommendations);
    $('#accordionTT').html(recTemplate);

    var links = $.getJSON("techteam2.json", function() {
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

    var linksTemplate = Mustache.render($('#ttlinkTemplate').html(), links);
    $('#linksList').html(linksTemplate);
});
