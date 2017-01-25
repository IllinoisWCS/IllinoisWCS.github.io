$(document).ready(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
  var shuffle = function(array) {
    for (var n = 0; n < array.length - 1; n++) {
      var k = n + Math.floor(Math.random() * (array.length - n));

      var temp = array[k];
      array[k] = array[n];
      array[n] = temp;
    }
  };

  $.getJSON("/assets/js/alumni.json", function(data) {
    console.log(data);
    var template = Mustache.render($('#alumniTemplate').html(), data);
  $('#featuredAlumni').html(template);
  });
});