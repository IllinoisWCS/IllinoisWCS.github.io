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

  var featuredAlumni = {
    "featured": [
      {
        "name": "Julia Syi",
        "id": "juliasyi",
        "degree": "Bachelor's in Computer Science",
        "grad": "May 2014",
        "involvement": "2010-2011 member, 2012-2014 Secretary",
        "where": "Program Manager at Microsoft",
        "img": "/assets/img/alumni/juliasyi.jpg"
      },
      {
        "name": "Lavanya Iyer",
        "id": "lavanyaiyer",
        "degree": "Bachelor's in Computer Science",
        "grad": "May 2014",
        "involvement": "2012-2014 President",
        "where": "Technology Analyst at Goldman Sachs",
        "img": "/assets/img/alumni/lavanyaiyer.jpg"
      },
      {
        "name": "Kamilah Taylor",
        "id": "kamilahtaylor",
        "degree": "Master's in Computer Science",
        "grad": "2010",
        "involvement": "2007-2008 member, 2008-2010 Grad Representative",
        "where": "Software Engineer at LinkedIn",
        "img": "/assets/img/alumni/kamilahtaylor.jpg"
      },
      {
        "name": "Emily Tran",
        "id": "emilytran",
        "degree": "Bachelor's in Computer Science",
        "grad": "May 2015",
        "involvement": "2014-2015 President, 2013-2014 Vice President",
        "where": "Program Manager at Microsoft",
        "img": "/assets/img/alumni/emilytran.jpg"
      },
      {
        "name": "Deepti Gupta",
        "id": "deeptigupta",
        "degree": "Bachelor's in Computer Science",
        "grad": "May 2015",
        "involvement": "2014-2015 Treasurer",
        "where": "Software Engineer at PayPal",
        "img": "/assets/img/alumni/deeptigupta.jpg"
      },
      {
        "name": "Anne Dailidonis",
        "id": "annedailidonis",
        "degree": "Bachelor's in Computer Science",
        "grad": "May 2014",
        "involvement": "2013-2014 Mentoring Director",
        "where": "Analyst at JP Morgan Chase",
        "img": "/assets/img/alumni/annedailidonis.jpeg"
      },
      {
        "name": "Gergana Slavova",
        "id": "gerganaslavova",
        "degree": "Bachelor's in Computer Science",
        "grad": "May 2005",
        "involvement": "Mentoring Chair, Tech Team Chair, Vice President, Co-President",
        "where": "Software Engineer at Intel Corporation in Champaign, IL",
        "img": "/assets/img/alumni/gerganaslavova.jpg"
      },
      {
        "name": "Fernanda Richnak",
        "id": "fernandarichnak",
        "degree": "Bachelor's in Computer Science",
        "grad": "May 2010",
        "involvement": "2009-2010 President",
        "where": "Program Manager at Microsoft",
        "img": "/assets/img/alumni/fernandarichnak.png"
      }
    ]
  };

  //shuffle(featuredAlumni.featured);

  var template = Mustache.render($('#alumniTemplate').html(), featuredAlumni);
  $('#featuredAlumni').html(template);
});