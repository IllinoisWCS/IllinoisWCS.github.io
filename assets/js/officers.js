$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var officers = {
        "prez": [
        {
          "position": "President",
          "firstname": "Corly",
          "lastname": "Leung",
          "email": "cyleung2@illinois.edu",
          "netid": "cyleung2",
          "year": "",
          "major": "",
          "interests": [],
          "experience": [],
          "hobbies": [],
          "fact": "",
          "place": "",
          "ask": []
        },
        {
          "position": "Vice President",
          "firstname": "Vaishali",
          "lastname": "Khandelwal",
          "email": "vkhande2@illinois.edu",
          "netid": "vkhande2",
          "year": "",
          "major": "",
          "interests": [],
          "experience": [],
          "hobbies": [],
          "fact": "",
          "place": "",
          "ask": []
        }
      ],
      "admin": [
          {
            "position": "Secretary",
            "firstname": "Shannon",
            "lastname": "Strum",
            "email": "sstrum2@illinois.edu",
            "netid": "sstrum2",
            "year": "",
            "major": "",
            "interests": [],
            "experience": [],
            "hobbies": [],
            "fact": "",
            "place": "",
            "ask": []
          },
          {
            "position": "Treasurer",
            "firstname": "Shivali",
            "lastname": "Patel",
            "email": "supatel2@illinois.edu",
            "netid": "supatel2",
            "year": "",
            "major": "",
            "interests": [],
            "experience": [],
            "hobbies": [],
            "fact": "",
            "place": "",
            "ask": []
          },
          {
            "position": "Webmaster",
            "firstname": "Sujay",
            "lastname": "Khandekar",
            "email": "khandek2@illinois.edu",
            "netid": "khandek2",
            "year": "",
            "major": "",
            "interests": [],
            "experience": [],
            "hobbies": [],
            "fact": "",
            "place": "",
            "ask": []
          },
          {
            "position": "Corporate Co-Chair",
            "firstname": "Jennifer",
            "lastname": "Cheng",
            "email": "jrcheng3@illinois.edu",
            "netid": "jrcheng3",
            "year": "",
            "major": "",
            "interests": [],
            "experience": [],
            "hobbies": [],
            "fact": "",
            "place": "",
            "ask": []
          },
          {
            "position": "Corporate Co-Chair",
            "firstname": "Erica",
            "lastname": "Lee",
            "email": "nlee16@illinois.edu",
            "netid": "nlee16",
            "year": "",
            "major": "",
            "interests": [],
            "experience": [],
            "hobbies": [],
            "fact": "",
            "place": "",
            "ask": []
          },
          {
            "position": "Mentoring Chair",
            "firstname": "Noel",
            "lastname": "Fortman",
            "email": "nfortma2@illinois.edu",
            "netid": "nfortma2",
            "year": "",
            "major": "",
            "interests": [],
            "experience": [],
            "hobbies": [],
            "fact": "",
            "place": "",
            "ask": []
          },
          {
            "position": "Outreach Chair",
            "firstname": "Brianna",
            "lastname": "Ifft",
            "email": "bifft2@illinois.edu",
            "netid": "bifft2",
            "year": "",
            "major": "",
            "interests": [],
            "experience": [],
            "hobbies": [],
            "fact": "",
            "place": "",
            "ask": []
          },
          {
            "position": "Tech Team Co-Chair",
            "firstname": "Emily",
            "lastname": "Chao",
            "email": "elchao2@illinois.edu",
            "netid": "elchao2",
            "year": "",
            "major": "",
            "interests": [],
            "experience": [],
            "hobbies": [],
            "fact": "",
            "place": "",
            "ask": []
        },
        {
          "position": "Tech Team Co-Chair",
          "firstname": "Berwin",
          "lastname": "Xie",
          "email": "bxie6@illinois.edu",
          "netid": "bxie6",
          "year": "",
          "major": "",
          "interests": [],
          "experience": [],
          "hobbies": [],
          "fact": "",
          "place": "",
          "ask": []
        },
        {
        "position": "Social Chair",
        "firstname": "Shannon",
        "lastname": "Bowman",
        "email": "shannonabo@gmail.com",
        "netid": "sabowma2",
        "year": "",
        "major": "",
        "interests": [],
        "experience": [],
        "hobbies": [],
        "fact": "",
        "place": "",
        "ask": []
        },
        {
          "position": "Publicity Chair",
          "firstname": "Kavya",
          "lastname": "Varghese",
          "email": "kmvargh2@illinois.edu",
          "netid": "kmvargh2",
          "year": "",
          "major": "",
          "interests": [],
          "experience": [],
          "hobbies": [],
          "fact": "",
          "place": "",
          "ask": []
          },
          {
            "position": "Alumni Chair",
            "firstname": "Pooja",
            "lastname": "Welling",
            "email": "pgwelli2@illinois.edu",
            "netid": "pgwelli2",
            "year": "",
            "major": "",
            "interests": [],
            "experience": [],
            "hobbies": [],
            "fact": "",
            "place": "",
            "ask": []
        },
        {
          "position": "Graduate Chair",
          "firstname": "Richa",
          "lastname": "Sehgal",
          "email": "rsehgal2@illinois.edu",
          "netid": "rsehgal2",
          "year": "",
          "major": "",
          "interests": [],
          "experience": [],
          "hobbies": [],
          "fact": "",
          "place": "",
          "ask": []
        }
      ]
    };

    var output = Mustache.render($('#officerTemplate').html(), officers);
    $('#allOfficers').html(output);
});
