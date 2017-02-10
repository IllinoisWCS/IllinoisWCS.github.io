$(document).ready(function() {
	var shuffle = function(array) {
		for (var n = 0; n < array.length - 1; n++) {
			var k = n + Math.floor(Math.random() * (array.length - n));

			var temp = array[k];
			array[k] = array[n];
			array[n] = temp;
		}
	};

	$.getJSON("../assets/js/alumni.json", function(data) {
	  var template = Mustache.render($('#alumniTemplate').html(), data);
	$('#alumniSlideshow .carousel-inner').html(template);
	var template2 = Mustache.render($('#alumniCarouselIndicatorTemplate').html(), data);
	$('.carousel-indicators').html(template2);
	$('#alumniSlideshow .carousel-inner .item').first().addClass('active');
	$('.carousel-indicators .indicator').first().addClass('active');
	//shuffle(featuredAlumni.featured);
  });

});
