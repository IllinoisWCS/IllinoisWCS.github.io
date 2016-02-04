var requestURL = 'https://script.google.com/a/macros/illinois.edu/s/AKfycbwSzrQxspuOMiXKZLFdbQDUFm3jI1cYcfAcpeM87DM/dev';

var getPoints = function() {
    var netid = $('#netid').val();
    if (netid.length > 0) {
        $.ajax({
            url: requestURL,
            type: 'get',
            data: 'netid=' + encodeURIComponent(netid),
            success: function(data) {
                var template = Mustache.render($('#pointTemplate').html(), data);
                $('#stats').html(template);
            },
            error: function(error) {
                $('#stats').html('<p>Something went wrong. Please let us know. We are sorry for the inconvenienc.</p>');
            }
        });
    } else {
        $('#stats').html('<p>Please enter a valid netid.</p>');
    }
}