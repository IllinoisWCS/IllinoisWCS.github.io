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
				"img": "assets/img/alumni/juliasyi.jpg"
			},
			{
				"name": "Lavanya Iyer",
				"degree": "Bachelor's in Computer Science",
				"grad": "May 2014",
				"involvement": "2012-2014 President",
				"where": "Technology Analyst at Goldman Sachs",
				"img": ""
			}
		]
	};

	//shuffle(featuredAlumni.featured);

	var template = Mustache.render($('#alumniTemplate').html(), featuredAlumni);
	$('#featuredAlumni').html(template);
});
