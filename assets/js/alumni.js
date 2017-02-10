$(document).ready(function() {
    $.getJSON("../assets/js/alumni.json", function(data) {
        var template = Mustache.render($('#alumniTemplate').html(), data);
        $('#featuredAlumni').html(template);
    });
});
