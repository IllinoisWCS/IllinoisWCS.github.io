var requestURL = 'http://script.google.com/macros/s/AKfycbw4xxn9dJktu0RVJlCGQ6mIGld9BTzqc24P0bvNMWkB_SC-vmw/exec';

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
        $('#stats').html('<p>Loading...</p>');
    } else {
        $('#stats').html('<p>Please enter a valid netid.</p>');
    }
    return false;
}

$(function() {
    $('#points-form').submit(getPoints);
});
