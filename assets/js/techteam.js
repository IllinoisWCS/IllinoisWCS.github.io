$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $.getJSON("/assets/js/techteam_recommendations.json", function(data) {
      var recTemplate = Mustache.render($('#recTemplate').html(), data);
      $('#accordionTT').html(recTemplate);
    });

    $.getJSON("/assets/js/techteam_links.json", function(data) {
      var linksTemplate = Mustache.render($('#ttlinkTemplate').html(), data);
      $('#linksList').html(linksTemplate);
    });
});
