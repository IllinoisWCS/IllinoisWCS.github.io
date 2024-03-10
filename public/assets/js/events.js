$(document).ready(function() {
    $.getJSON("../assets/js/events.json", function(data) {
        var output = Mustache.render($('#eventTemplate').html(), data);
        $('#allEvents').html(output);
    });
});
