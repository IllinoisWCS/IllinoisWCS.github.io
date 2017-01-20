$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var officers = {
        "admin": [
            {
              "position": "President",
              "firstname": "Corly",
              "lastname": "Leung",
              "email": "cyleung2@illinois.edu",
              "netid": "cyleung2",
              "year": "Senior",
              "major": "Computer Science",
              "interests": [
                 "Data Mining",
                 "Social Computing"
              ],
              "experience": [
                "State Farm, System Intern, 2013-2014",
                "Groupon, SWE Intern, Summer 2015",
                "Google, SWE Intern, Summer 2016"
              ],
              "hobbies": [
                  "Badminton",
                  "Sleep",
                  "Non-Profits",
              ],
              "fact": "I had a British passport but I have never been to Europe.",
              "place": "Milpitas",
              "ask": []
            },
            {
              "position": "Vice President",
              "firstname": "Vaishali",
              "lastname": "Khandelwal",
              "email": "vkhande2@illinois.edu",
              "netid": "vkhande2",
              "year": "Senior",
              "major": "Computer Science",
              "interests": [
                "Data Science",
                "Analytics"
              ],
              "experience": [],
              "hobbies": [
                "Dancing",
                "Reading"
              ],
              "fact": "I love dancing, I have learnt a traditional Indian Dance, Kathak, for 12 years.",
              "place": "",
              "ask": []
            },
          {
            "position": "Secretary",
            "firstname": "Shannon",
            "lastname": "Strum",
            "email": "sstrum2@illinois.edu",
            "netid": "sstrum2",
            "year": "Junior",
            "major": "Computer Science",
            "interests": [
                "Security",
                "HCI"
            ],
            "experience": [
                "Irwin Academic Center, CS 125 Tutor, Spring 2015",
                "State Farm, Systems Intern, Fall 2015",
                "Engineering IT, Student Consultant, Spring 2016",
                "Procter & Gamble, Programmatic Media Intern, Summer 2016"
            ],
            "hobbies": [
                "Playing with cats",
                "Convincing others to play with cats with me",
                "Tap dancing",
                "Playing the violin",
                "Writing",
                "Attempting to cook"
            ],
            "fact": "I hope to get my pilot's license one day.",
            "place": "Villa Park, IL ",
            "ask": []
          },
          {
            "position": "Treasurer",
            "firstname": "Shivali",
            "lastname": "Patel",
            "email": "supatel2@illinois.edu",
            "netid": "supatel2",
            "year": "Sophomore",
            "major": "Computer Science",
            "interests": [
                "Artificial Intelligence",
                "Data Science"
            ],
            "experience": [],
            "hobbies": [
                "Sleeping",
                "Playing Badminton",
                "Netflix"
            ],
            "fact": "After the end of AP Calc BC, our teacher gives the class superlatives, and she awarded me 'most likely to develop a 12-step program for people who simultaneously laugh and cry and love math'",
            "place": "Darien, IL",
            "ask": []
          },
          {
            "position": "Head of Infrastructure",
            "firstname": "Sujay",
            "lastname": "Khandekar",
            "email": "khandek2@illinois.edu",
            "netid": "khandek2",
            "year": "Senior",
            "major": "Computer Science with Technology & Management Minor",
            "interests": [
                "HCI",
                "Data Driven Design"
            ],
            "experience": [
                "eBay Intern (Summer 2014)",
                "Facebook Intern (Summer 2015)",
                "Facebook Intern (Summer 2016)",
                "Research Work under Prof Ranjitha Kumar",
                "Qualtrics Intern (Summer 2017)"
            ],
            "hobbies": [
                "Web Dev",
                "Running",
                "Playing instruments"
            ],
            "fact": "I lived in Belgium for two years during my high school career",
            "place": "Saratoga, CA",
            "ask": []
          },
          {
            "position": "Corporate Co-Chair",
            "firstname": "Erica",
            "lastname": "Lee",
            "email": "nlee16@illinois.edu",
            "netid": "nlee16",
            "year": "Senior",
            "major": "Bioengineering with CS & EE Minors",
            "interests": [],
            "experience": [
                "Undergraduate Researcher, John Roger's Research Group, 2014-2015",
                "Research and Development Co-op, Kimberly-Clark Corporation, Spring-summer 2015",
                "Software Engineering Intern, Adobe, summer 2016"
            ],
            "hobbies": [
                "Running",
                "Outreach stuff",
                "Cooking"
            ],
            "fact": "I have two scars on my forehead, both from falling down the stairs",
            "place": "Wilmette, IL",
            "ask": []
          },
          {
            "position": "Mentoring Chair",
            "firstname": "Noel",
            "lastname": "Fortman",
            "email": "nfortma2@illinois.edu",
            "netid": "nfortma2",
            "year": "Senior",
            "major": "Computer Science + Linguistics, BA in Music Composition",
            "interests": [
                "Computational Music Analysis",
                "Systems Programming"
            ],
            "experience": [
                "CS125 Course Assistant Fall 2014 to present",
                "CS241 Course Assistant Fall 2015 to present",
                "Google in Mountain View as a Software Engineering Intern during Summer 2016"
            ],
            "hobbies": [
                "Computation Music Analysis",
                "Composition"
            ],
            "fact": "I fall asleep in very strange places and then sleepwalk to my bed!",
            "place": "Westmont, IL",
            "ask": []
          },
          {
            "position": "Outreach Chair",
            "firstname": "Brianna",
            "lastname": "Ifft",
            "email": "bifft2@illinois.edu",
            "netid": "bifft2",
            "year": "Senior",
            "major": "Computer Science",
            "interests": [
                "Big Data",
                "Visualization"
            ],
            "experience": [
                "State Farm in Research Park, Systems Intern, August 2013 - May 2014",
                "Bank of America Merrill Lynch, Technology Developer and Analyst Intern, June 2014 - August 2014"
            ],
            "hobbies": [
                "Baking",
                "Cooking",
                "Crafting",
                "Hanging out",
                "Trying new food!"
            ],
            "fact": "I had to get stitches in my forehead because I ran into a door.",
            "place": "Forrest, IL",
            "ask": []
          },
        {
          "position": "Tech Team Co-Chair",
          "firstname": "Berwin",
          "lastname": "Xie",
          "email": "bxie6@illinois.edu",
          "netid": "bxie6",
          "year": "Senior",
          "major": "Computer Science",
          "interests": [
              "Web",
              "Music",
              "HCI"
          ],
          "experience": [
              "Edward Madigan Laboratory under Dr. Lila Vodkin, Lab Programmer, 2014-Present",
              "Epic Systems, Software Development Intern, Summer 2015",
              "Qualtrics, Software Engineering Intern, Summer 2016"
          ],
          "hobbies": [
              "Reading",
              "doodling",
              "looking for bear gifs",
              "staring off into the distance..."
          ],
          "fact": "A lot of people call me Bear, a nickname given to me when I got to college. I roll with it now.",
          "place": "Palatine, IL",
          "ask": []
        },
        {
        "position": "Social Chair",
        "firstname": "Shannon",
        "lastname": "Bowman",
        "email": "shannonabo@gmail.com",
        "netid": "sabowma2",
        "year": "Junior",
        "major": "",
        "interests": [
            "Big Data"
        ],
        "experience": [
            "Sentinel Technologies (intern- summer 2015)",
            "Sears Holdings (intern- summer 2016)"
        ],
        "hobbies": [
            "Cooking/Baking",
            "Skiing",
            "Hiking"
        ],
        "fact": "I love trying new coffee places",
        "place": "Palatine, IL",
        "ask": []
        },
        {
          "position": "Publicity Chair",
          "firstname": "Kavya",
          "lastname": "Varghese",
          "email": "kmvargh2@illinois.edu",
          "netid": "kmvargh2",
          "year": "Sophomore",
          "major": "Computer Science with Statistics Minor",
          "interests": [
              "HCI"
          ],
          "experience": [],
          "hobbies": [
              "diy projects",
              "social media",
              "playing with puppies"
          ],
          "fact": "i have like thirty pairs of shoes.",
          "place": "Fremont, CA",
          "ask": []
          },
          {
            "position": "Alumni Chair",
            "firstname": "Pooja",
            "lastname": "Welling",
            "email": "pgwelli2@illinois.edu",
            "netid": "pgwelli2",
            "year": "Sophomore",
            "major": "Computer Science",
            "interests": [
                "Computer Architecture",
                "Artificial Intelligence"
            ],
            "experience": [
                "Research through PURE Spring 2016"
            ],
            "hobbies": [
                "Reading",
                "Napping",
                "Playing badminton"
            ],
            "fact": "I have a deep love for baby elephants.",
            "place": "Nashua, New Hampshire",
            "ask": []
        },
        {
          "position": "Graduate Chair",
          "firstname": "Richa",
          "lastname": "Sehgal",
          "email": "rsehgal2@illinois.edu",
          "netid": "rsehgal2",
          "year": "Graduate Student",
          "major": "Computer Science",
          "interests": [],
          "experience": [
            "CS 105 TA, Fall 2015",
            "Student Developer, Google Summer of Code, Summer 2015",
            "Research Assistant - College of Education, UIUC, Spring 2016 - Present",
            "Software Engineering Intern, LinkedIn, Summer 2016"
          ],
          "hobbies": [
              "Dance",
              "Badminton",
              "Watching movies",
              "Art and Craft"
          ],
          "fact": "The last time I partied really hard, I ended up teaching Punjabi dance to a bunch of non-Indians. Beware!",
          "place": "New Delhi, India",
          "ask": []
        }
          ]
        };

    var output = Mustache.render($('#officerTemplate').html(), officers);
    $('#allOfficers').html(output);
});
