$(document).ready(function() {
	var shuffle = function(array) {
		for (var n = 0; n < array.length - 1; n++) {
			var k = n + Math.floor(Math.random() * (array.length - n));

			var temp = array[k];
			array[k] = array[n];
			array[n] = temp;
		}
	};

	var featuredAlumni = $.getJSON("alumni.json", function() {
  console.log( "success" );
 })
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });

	//shuffle(featuredAlumni.featured);

	var template = Mustache.render($('#alumniTemplate').html(), featuredAlumni);
	$('#alumniSlideshow .carousel-inner').html(template);
	var template2 = Mustache.render($('#alumniCarouselIndicatorTemplate').html(), featuredAlumni);
	$('.carousel-indicators').html(template2);
	$('#alumniSlideshow .carousel-inner .item').first().addClass('active');
	$('.carousel-indicators .indicator').first().addClass('active');
});
