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
    }

    var resources = {
        "values": [
            {
                "title":"Hackerrank",
                "link":"http://hackerrank.com",
                "filters":[
                    "interview",
                    "competitive",
                    "algorithms",
                    "datastructures",
                    "company"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Kaggle",
                "link":"http://kaggle.com",
                "filters":[
                    "datascience",
                    "competitive",
                    "company"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"MindSumo",
                "link":"http://mindsumo.com",
                "filters":[
                    "competitive",
                    "algorithms",
                    "company"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"TopCoder",
                "link":"http://topcoder.com",
                "filters":[
                    "competitive",
                    "algorithms",
                    "datastructures",
                    "interview"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"LeetCode",
                "link":"http://leetcode.com",
                "filters":[
                    "interview",
                    "algorithms",
                    "datastructures"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"InterviewBit",
                "link":"http://interviewbit.com",
                "filters":[
                    "interview",
                    "algorithms",
                    "datastructures"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"InterviewCake",
                "link":"http://interviewcake.com",
                "filters":[
                    "interview",
                    "algorithms",
                    "datastructures"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Project Euler",
                "link":"http://projecteuler.com",
                "filters":[
                    "interview",
                    "algorithms"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"GeeksForGeeks",
                "link":"http://geeksforgeeks.com",
                "filters":[
                    "interview",
                    "algorithms",
                    "datastructures"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Codecademy",
                "link":"http://codecademy.com",
                "filters":[
                    "beginner"
                ],
                "languages":[
                    "Javascript",
                    "Ruby",
                    "Python",
                    "Java"
                ]
            },
            {
                "title":"CodingBat",
                "link":"http://codingbat.com",
                "filters":[
                    "beginner"
                ],
                "languages":[
                    "Java",
                    "Python"
                ]
            },
            {
                "title":"CodeSchool",
                "link":"http://codeschool.com",
                "filters":[
                    "beginner"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Treehouse",
                "link":"http://treehouse.com",
                "filters":[
                    "beginner"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Udemy",
                "link":"http://udemy.com",
                "filters":[
                    "beginner",
                    "classes"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"EdX",
                "link":"http://edx.com",
                "filters":[
                    "beginner",
                    "classes"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Coursera",
                "link":"http://coursera.com",
                "filters":[
                    "beginner",
                    "classes"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Lynda",
                "link":"http://lynda.com",
                "filters":[
                    "beginner",
                    "classes",
                    "studentdeals"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Khan Academy",
                "link":"http://khanacademy.com",
                "filters":[
                    "beginner",
                    "classes"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Scotch.io",
                "link":"http://scotch.io",
                "filters":[
                    "webdevelopment"
                ],
                "languages":[
                    "MEAN",
                    "Laravel",
                    "Node"
                ]
            },
            {
                "title":"Egghead.io",
                "link":"http://egghead.io",
                "filters":[
                    "webdevelopment"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Flask Tutorial",
                "link":"http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world",
                "filters":[
                    "webdevelopment"
                ],
                "languages":[
                    "Flask",
                    "Python"
                ]
            },
            {
                "title":"Meteor",
                "link":"https://www.meteor.com/tutorials/blaze/creating-an-app",
                "filters":[
                    "webdevelopment"
                ],
                "languages":[
                    "MeteorJS"
                ]
            },
            {
                "title":"Mean.io",
                "link":"http://mean.io",
                "filters":[
                    "webdevelopment"
                ],
                "languages":[
                    "MEAN"
                ]
            },
            {
                "title":"Bento.io",
                "link":"https://bento.io",
                "filters":[
                    "webdevelopment"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Digital Ocean",
                "link":"http://digitalocean.com",
                "filters":[
                    "hosting"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Github Student",
                "link":"http://github.com/student",
                "filters":[
                    "hosting",
                    "studentdeals"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Heroku",
                "link":"http://heroku.com",
                "filters":[
                    "hosting"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Parse",
                "link":"http://parse.com",
                "filters":[
                    "database"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"Firebase",
                "link":"http://firebase.com",
                "filters":[
                    "database"
                ],
                "languages":[
                    ""
                ]
            },
            {
                "title":"MongoDB",
                "link":"http://mongodb.com",
                "filters":[
                    "database"
                ],
                "languages":[
                    ""
                ]
            }
        ]
    };

    var categories = {
        "list": [
            {
                "text": "all",
                "href": "*"
            }
        ]
    };
    var sums = {};
    for (var i = 0; i < resources.values.length; i++) {
        for (var j = 0; j < resources.values[i].filters.length; j++) {
            var filter = resources.values[i].filters[j];
            if (sums[filter] != undefined) {
                sums[filter]++;
            } else {
                sums[filter] = 1;
                categories.list.push({
                    "text": filter
                });
            }
        }
        for (var k = 0; k < resources.values[i].languages.length; k++) {
            var language = resources.values[i].languages[k];
            if (sums[language] != undefined) {
                sums[language]++;
            } else {
                sums[language] = 1;
                categories.list.push({
                    "text": language
                });
            }
        }
    }
    console.log(categories);

    shuffle(resources.values);

    var resourceOutput = Mustache.render($('#resourcesTemplate').html(), resources);
    $('#allResources').html(resourceOutput);

    var categoryOutput = Mustache.render($('#categoryTemplate').html(), categories);
    $('#resourceCategories').html(categoryOutput);

    var grid = document.querySelector('#allResources');
    var iso = new Isotope(grid, {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.categoryFilter').click(function(event) {
        event.preventDefault();
        var category = '*';
        if (event.currentTarget.getAttribute('href') !== '*') {
            category = '.' + event.currentTarget.getAttribute('href');
        }
        iso.arrange({filter: category});
    });

    $('#allResources').css('min-height', $('#allResources').height());
});