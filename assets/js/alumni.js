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
				"involvement": "2010-2011 Member, 2012-2014 Secretary",
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
			},
			{
				"name": "Emily Tran",
				"degree": "Bachelor's in Computer Science",
				"grad": "May 2015",
				"involvement": "2014-2015 President, 2013-2014 Vice President",
				"where": "Program Manager at Microsoft",
				"img": "assets/img/alumni/emilytran.jpg",
				"i": 3
			},
			{
				"name": "Deepti Gupta",
				"degree": "Bachelor's in Computer Science",
				"grad": "May 2015",
				"involvement": "2014-2015 Treasurer",
				"where": "Software Engineer at PayPal",
				"img": "assets/img/alumni/deeptigupta.jpg",
				"i": 4
			},
			{
				"name": "Anne Dailidonis",
				"degree": "Bachelor's in Computer Science",
				"grad": "May 2014",
				"involvement": "2013-2014 Mentoring Director",
				"where": "Analyst at JP Morgan Chase",
				"img": "assets/img/alumni/annedailidonis.jpeg",
				"i": 5
			},
			{
				"name": "Gergana Slavova",
				"degree": "Bachelor's in Computer Science",
				"grad": "May 2005",
				"involvement": "Mentoring Chair, Tech Team Chair, Vice President, Co-President",
				"where": "Software Engineer at Intel Corporation in Champaign, IL",
				"img": "assets/img/alumni/gerganaslavova.jpg",
				"i": 6
			},
			{
				"name": "Fernanda (Mendes) Richnak",
				"degree": "Bachelor's in Computer Science",
				"grad": "May 2010",
				"involvement": "2009-2010 President",
				"where": "Program Manager at Microsoft",
				"img": "assets/img/alumni/fernandarichnak.png",
				"i": 7
			},
			{
				"name": "Yalan (Maya) Meng",
				"degree": "Bachelor's in Computer Science",
				"grad": "May 2015",
				"involvement": "2013-2014 Tech Team Director",
				"where": "Software Engineer at Google San Francisco",
				"img": "assets/img/alumni/mayameng.jpg",
				"i": 8
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
