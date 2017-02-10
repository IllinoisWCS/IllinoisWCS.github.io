$(document).ready(function() {
    $.getJSON("../assets/js/officers.json", function(data) {
        var output = Mustache.render($('#officerTemplate').html(), data);
        $('#allOfficers').html(output);
    });
});
