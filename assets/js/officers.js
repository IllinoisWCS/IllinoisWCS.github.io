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
          "firstname": "Annie",
          "lastname": "Rong",
          "email": "rong2@illinois.edu",
          "netid": "rong2",
          "year": "Senior",
          "major": "Computer Science, Minor in Art + Design",
          "interests": [
            "Distributed Systems",
            "HCI"
          ],
          "experience": [
            "JPMorgan, Applications Developer Intern, Summer 2013 & 2014",
            "UIUC, CS242 TA, Spring 2015",
            "UIUC, NCSA SPIN Intern, Spring 2015",
            "Twitter, Software Development Intern, Summer 2015"
          ],
          "hobbies": [
            "Binge drinking coffee",
            "Coding",
            "Drawing"
          ],
          "fact": "I still play Neopets more often than I care to admit. ",
          "place": "Urbana, IL",
          "ask": [
            "being a TA for CS 242",
            "interning at JPMorgan Chase + Twitter",
            "doing independent studies with professors"
          ]
        },
        {
          "position": "Vice President",
          "firstname": "Hanna",
          "lastname": "Koh",
          "email": "hxkoh2@illinois.edu",
          "netid": "hxkoh2",
          "year": "Senior",
          "major": "Computer Science, Minor in Business",
          "interests": [
            "Artificial Intelligence",
            "Security",
            "UI/UX"
          ],
          "experience": [
            "Microsoft, Software Engineering Intern, Summer 2015;",
            "Microsoft, Explore Intern, Summer 2014;",
            "UIUC, Independent Study with Professor Heeren, 2014-present;",
            "UIUC, Independent Study with Professor Angrave, 2013-2014"
          ],
          "hobbies": [
            "Playing with dogs",
            "Watching TV",
            "Piano"
          ],
          "fact": "I have a twin sister!",
          "place": "Foster City, CA",
          "ask": [
            "Interning at Microsoft",
            "independent study",
            "studying abroad"
          ]
        }
      ],
      "admin": [
        {
          "position": "Secretary",
          "firstname": "Lily",
          "lastname": "Sellers",
          "email": "lseller2@illinois.edu",
          "netid": "lseller2",
          "year": "Senior",
          "major": "Double Major in CS + Statistics, Psychology",
          "interests": [
            "Artificial Intelligence"
          ],
          "experience": [
            "Foresight ROI, Technical Intern, Summer 2013",
            "Apollo Education Group, Software Intern, Summer 2014",
            "CITES, Helpdesk Consultant, 2014-2015"
          ],
          "hobbies": [
            "Video Games (LoL, Pokemon, various RPGs)",
            "Violin",
            "Playing with the 5 cats that live with me",
            "Sleeping",
            "Pizza"
          ],
          "fact": "I am a black belt in Tae-Kwon-Do, and am also a certified scuba diving instructor.",
          "place": "Barrington, IL",
          "ask": [
            "CS 125",
            "CS 225",
            "CS 233",
            "CS THEORY (173, 373, 473)",
            "CS 423",
            "CS 411",
            "Stats classes",
            "All calc",
            "linear algebra",
            "differential equations"
          ]
        },
        {
          "position": "Treasurer",
          "firstname": "Han",
          "lastname": "Chen",
          "email": "hanchen2@illinois.edu",
          "netid": "hanchen2",
          "year": "Junior",
          "major": "Computer Science",
          "interests": [
            "Data Structures",
            "Algorithms",
            "Security"
          ],
          "experience": [
            "UIUC, CS 225 Teaching Assistant 2014-present"
          ],
          "hobbies": [
            "Playing computer games",
            "Building PCs",
            "Watching Netflix/animes",
            "Sleeping"
          ],
          "fact": "I lived in Canada for 7 months.",
          "place": "Arlington Heights, IL",
          "ask": [
            "TA CS 225 and 205",
            "transfer student",
            "course dev with Cinda Heeren"
          ]
        },
        {
          "position": "Webmaster",
          "firstname": "Emily",
          "lastname": "Chao",
          "email": "elchao2@illinois.edu",
          "netid": "elchao2",
          "year": "Junior",
          "major": "Computer Science",
          "interests": [
            "Full-Stack Web Development",
            "CS Education and Educational Tools",
            "Software Engineering",
            "Data"
          ],
          "experience": [
            "Paycor Inc., IT Application Intern, Summer 2012",
            "P&G, GBS-HRSS IT Intern, Summer 2013",
            "kCura, Software Engineering Intern, Summer 2014",
            "Dow Chemical Company, Systems Intern, School-Year 2014-2015",
            "Intuit, Software Engineering Intern, Summer 2015"
          ],
          "hobbies": [
            "Listening to Music",
            "Singing at the top of my lungs",
            "Reading",
            "Writing",
            "Going Ice Skating",
            "Web Development"
          ],
          "fact": "I have a broken nose that has yet to be fixed. So yes, I need a nose job. :)",
          "place": "West Chester, OH",
          "ask": [
            "TA'ing CS225",
            "working at Research Park",
            "identifying as LGBTQ",
            "working at Intuit",
            "living in WIMSE",
            "being involved in SWE",
            "being a WIE Orientation mentor"
          ]
        },
        {
          "position": "Academic Chair",
          "firstname": "Robin",
          "lastname": "Sturm",
          "email": "rsturm2@illinois.edu",
          "netid": "rsturm2",
          "year": "Junior",
          "major": "Computer Science",
          "interests": [
            "HCI",
            "Data Mining",
            "Security"
          ],
          "experience": [
            "Thomas Jefferson High School, Teaching Assistant, Summer 2011",
            "Capitol Information Group, IT Intern, Summers 2011-2014",
            "University of Illinois, Teaching Assistant, 2015-present",
            "Quantlab Financial, Technology Intern, Summer 2015"
          ],
          "hobbies": [
            "Writing",
            "reading comic books",
            "watching movies and TV shows."
          ],
          "fact": "I have an amazing memory but I waste it all on movie quotes and actors' filmographies.",
          "place": "McLean, VA",
          "ask": [
            "CS233 (class or TAing)",
            "high frequency trading",
            "interning in Texas",
            "working through shyness to talk to recruiters",
            "movies and comic books"
          ]
        },
        {
          "position": "Outreach Chair",
          "firstname": "Brianna",
          "lastname": "Ifft",
          "email": "bifft2@illinois.edu",
          "netid": "bifft2",
          "year": "Junior",
          "major": "Computer Science, Minor in Linguistics",
          "interests": "NLP",
          "experience": [
            "State Farm Research and Development Center, Systems Intern, School Year 2013-2014",
            "Bank of America, Technology Developer and Analyst, Summer 2014"
          ],
          "hobbies": [
            "Running",
            "Cooking",
            "Hanging out with friends and family"
          ],
          "fact": "I have a huge family-between 40 and 50 first cousins!",
          "place": "Forrest, IL",
          "ask": [
            "working in Research Park",
            "interning at Bank of America",
            "courseload and course selection",
            "CS 125",
            "CS 225",
            "the WIMSE LLC",
            "attending GHC",
            "transferring from LAS to Engineering",
            "Grey's Anatomy"
          ]
        },
        {
          "position": "Mentoring Chair",
          "firstname": "Vaishali",
          "lastname": "Khandelwal",
          "email": "vkhande2@illinois.edu",
          "netid": "vkhande2",
          "year": "Junior",
          "major": "Computer Science",
          "interests": [
            "Databases",
            "System Programming"
          ],
          "experience": [
            "Tata Consultancy Services, Developer, Summer 2014",
            "Microsoft, Intern, Summer 2015"
          ],
          "hobbies": [
            "Dancing",
            "Reading",
            "Interacting with new people"
          ],
          "fact": "Dance is my stress buster! I absolutely love dancing, which includes dancing between coding if needed to destress! ",
          "place": "Calcutta, India",
          "ask": [
            "CA for CS 125",
            "interning at Microsoft",
            "switching from CE to CS",
            "TA for ECE 110",
            "choosing easy gen-eds"
          ]
        },
        {
          "position": "Tech Team Chair",
          "firstname": "Sara",
          "lastname": "Akgul",
          "email": "akgul1@illinois.edu",
          "netid": "akgul1",
          "year": "Junior",
          "major": "Computer Engineering",
          "interests": [
            "Embedded Systems",
            "Operating Systems",
            "Security"
          ],
          "experience": [
            "CoreOS, GNU/Linux OS Dev Intern, Summer 2015",
            "Intel, BIOS Development Intern, August 2013 - June 2014",
            "Intel, Analog Verification Intern, June 2012 - January 2013",
            "UIUC, ECE 110 Teaching Assistant, August 2011 - May 2012",
            "AMD, Computer Engineering Co-op, May 2011 - August 2011",
            "Wolfram, Web R&D Intern, December 2010 - April 2011,",
            "Fermilab, Particle Physics Research Mentorship, August 2008 - May 2010",
            "IMSA, ITS Lead Student Hardware Technician, November 2008 - May 2010"
          ],
          "hobbies": [
            "Playing with circuits",
            "developing cool software and hardware",
            "singing",
            "guitar",
            "E&M music",
            "teaching",
            "math",
            "graphic design",
            "competitive dance games",
            "figure skating"
          ],
          "fact": "I currently own and maintain 5 Dance Dance Revolution style arcade machines, which are all privately shared or generate revenue in public venues. I like to play on them too, of course! ",
          "place": "Seattle, WA",
          "ask": []
        },
        {
          "position": "Social Chair",
          "firstname": "Jennifer",
          "lastname": "Cheng",
          "email": "jrcheng3@illinois.edu",
          "netid": "jrcheng3",
          "year": "Junior",
          "major": "Computer Science",
          "interests": [
            "Graphics",
            "Data",
            "HCI"
          ],
          "experience": [
            "BTwin, Test Engineer Intern, July 2014",
            "Software Developer Intern, Dow Chemical Company, Summer 2015"
          ],
          "hobbies": [
            "looking at puppies on the internet",
            "playing cards",
            "baking"
          ],
          "fact": "I like cats but I'm allergic to them :(",
          "place": "Barrington, IL",
          "ask": [
            "summer study abroad in France",
            "summer on campus"
          ]
        },
        {
          "position": "Corporate Chair",
          "firstname": "Corly",
          "lastname": "Leung",
          "email": "cyleung2@illinois.edu",
          "netid": "cyleung2",
          "year": "Sophomore",
          "major": "Computer Science",
          "interests": [
            "Security",
            "Artificial Intelligence"
          ],
          "experience": [
            "State Farm, IT/System Intern, Nov 2013 - Dec 2014",
            "Groupon, Software Engineering Intern, Summer 2015"
          ],
          "hobbies": [
            "Badminton",
            "Napping",
            "Playing the flute"
          ],
          "fact": "I had a British passport, but I have never been to England",
          "place": "Milpitas, CA",
          "ask": [
            "CS196",
            "Admitted/Incoming Student Outreach",
            "CS @ ILLINOIS Splash",
            "Groupon",
            "State Farm",
            "non-profit works",
            "Android"
          ]
        },
        {
          "position": "Publicity Chair",
          "firstname": "Madeline",
          "lastname": "Psenka",
          "email": "psenka2@illinois.edu",
          "netid": "psenka2",
          "year": "Junior",
          "major": "Computer Science ENG",
          "interests": [
            "Big Data",
            "UI/UX",
            "Web Development",
            "Computer Graphics"
          ],
          "experience": [
            "UIUI Micro and Nanotechnology Laboratory, Reserach Intern, Summer 2014",
            "CME Group, Development Intern, Summer 2015",
            "NCSA, Undergraduate Research Assistant, Fall 2015"
          ],
          "hobbies": [
            "Writing",
            "Cooking",
            "Playing Volleyball",
            "Listening to Music",
            "Hanging with Friends"
          ],
          "fact": "I have a mild phobia of fish.",
          "place": "Chicago, IL",
          "ask": [
            "Getting research",
            "workload management",
            "internships",
            "Greek life",
            "apartments",
            "life"
          ]
        },
        {
          "position": "Alumni Chair",
          "firstname": "Manasa",
          "lastname": "Sanka",
          "email": "sanka3@illinois.edu",
          "netid": "sanka3",
          "year": "Sophomore",
          "major": "Computer Science",
          "interests": [
            "Artificial Intelligence",
            "Machine Learning"
          ],
          "experience": [
            "Aarki, Inc, Business Development Intern, Summer 2012",
            "Peel Technologies, Engineering Intern, Summer 2013",
            "Zeta Interactive, Engineering Intern, Summer 2015",
          ],
          "hobbies": [
            "Drawing portraits",
            "singing",
            "piano",
            "tennis",
            "reading books",
            "biking",
            "writing"
          ],
          "fact": "I love singing obnoxiously in empty elevators and pretending nothing happened when someone enters. ",
          "place": "Cupertino, CA",
          "ask": [
            "Interning at a startup",
            "taking CS 173 and 225",
            "writing",
            "What not to do as a freshman 101"
          ]
        },
        {
          "position": "Grad Chair",
          "firstname": "Namrata",
          "lastname": "Prabhu",
          "email": "nprabhu2@illinois.edu",
          "netid": "nprabhu2",
          "year": "Grad",
          "major": "B.S/M.S Computer Science",
          "interests": "Computer Vision",
          "experience": [
            "UIUC, Undergrad TA for CS 173",
            "Grad TA for CS 242",
            "Computer Vision Research with Derek Hoeim"
          ],
          "hobbies": [
            "Cooking",
            "Reading",
            "Android development",
            "Volunteering"
          ],
          "fact": "I do math in my head using an imaginary abacus.",
          "place": "Bangalore,India",
          "ask": [
            "graduate school",
            "interning at a startup",
            "computer vision",
            "research",
            "abacus math"
          ]
        }
      ]
    };

    var output = Mustache.render($('#officerTemplate').html(), officers);
    $('#allOfficers').html(output);
});
