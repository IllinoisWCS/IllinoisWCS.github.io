$(document).ready(function() {
	var shuffle = function(array) {
		for (var n = 0; n < array.length - 1; n++) {
			var k = n + Math.floor(Math.random() * (array.length - n));

			var temp = array[k];
			array[k] = array[n];
			array[n] = temp;
		}
	};

	var featuredAlumni = {
		"featured": [
			{
				"name": "Julia Syi",
				"degree": "Bachelor's in Computer Science",
				"grad": "May 2014",
				"involvement": "2010-2011 member, 2012-2014 Secretary",
				"where": "Program Manager at Microsoft",
				"img": "assets/img/alumni/juliasyi.jpg",
				"i": 0
			},
			{
				"name": "Lavanya Iyer",
				"degree": "Bachelor's in Computer Science",
				"grad": "May 2014",
				"involvement": "2012-2014 President",
				"where": "Technology Analyst at Goldman Sachs",
				"img": "assets/img/alumni/lavanyaiyer.jpg",
				"i": 1
			},
			{
				"name": "Kamilah Taylor",
				"degree": "Master's in Computer Science",
				"grad": "2010",
				"involvement": "2007-2008 member, 2008-2010 Grad Representative",
				"where": "Software Engineer at LinkedIn",
				"img": "assets/img/alumni/kamilahtaylor.jpg",
				"i": 2
			}
		]
	};

	//shuffle(featuredAlumni.featured);

	var template = Mustache.render($('#alumniTemplate').html(), featuredAlumni);
	$('#alumniSlideshow .carousel-inner').html(template);
	var template2 = Mustache.render($('#alumniCarouselIndicatorTemplate').html(), featuredAlumni);
	$('.carousel-indicators').html(template2);
	$('#alumniSlideshow .carousel-inner .item').first().addClass('active');
	$('.carousel-indicators .indicator').first().addClass('active');
});
