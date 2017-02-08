$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

  $.getJSON("../assets/js/officers.json", function(data) {
    var output = Mustache.render($('#officerTemplate').html(), data);
    $('#allOfficers').html(output);
  });

});
