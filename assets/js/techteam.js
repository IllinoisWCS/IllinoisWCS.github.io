$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var recommendations = {
        "values": [
            {
                "id": "frontend",
                "category": "I know we can make websites just with HTML/CSS/Javascript, but there's gotta be some ways to make default, reusable user interfaces",
                "libraries": [
                    {
                        "name": "Bootstrap",
                        "description": "gives default CSS styling and JS interactions out of the box, as well as optimizes for responsiveness",
                        "href": "http://getbootstrap.com/"
                    },
                    {
                        "name": "Foundation",
                        "description": "well, does the same thing as Bootstrap, you can pick :D",
                        "href": "http://foundation.zurb.com/"
                    },
                    {
                        "name": "Material Design Lite",
                        "description": "does the same thing as the two above, but for the Google lovers out there, you'll be able to do Material Design",
                        "href": "https://getmdl.io/"
                    }
                ]
            },
            {
                "id": "databinding",
                "category": "Cool, but not I have some structured JSON data I want to display. You got any frameworks for that?",
                "libraries": [
                    {
                        "name": "jQuery",
                        "description": "makes Javascript a lot more concise and easier to write, uses the dollar sign everywhere",
                        "href": "http://jquery.com/"
                    },
                    {
                        "name": "Mustache",
                        "description": "a super super barebones templating language that uses, you guessed it, a curly brace which sideways looks like a mustache, might be a little hard to start up",
                        "href": "https://mustache.github.io/"
                    },
                    {
                        "name": "Angular",
                        "description": "provides a ton of data-binding mechanisms and ways to create your own HTML tags to represent different data entities, recommended if you are going to eventually hook up a backend",
                        "href": "https://angularjs.org/"
                    }
                ]
            },
            {
                "id": "backend",
                "category": "Ok, cool, I think I got a handle on how to do front-end + data-binding. I want to start developing a backend. Any recommendations?",
                "libraries": [
                    {
                        "name": "Flask",
                        "description": "a simple Python framework for setting a web application, they also provide some front-end tooling for templating, a lot more beginner friendly",
                        "href": "http://flask.pocoo.org/"
                    },
                    {
                        "name": "Node/ExpressJS",
                        "description": "a way to develop a backend using just Javascript, because why not? you don't have to switch languages now! more things you'll have to put together, recommended after some experience",
                        "href": "https://expressjs.com/"
                    }
                ]
            },
            {
                "id": "database",
                "category": "Ok, cool, now I got a frontend and a backend setup for myself. I need a database. Waddaya recommend?",
                "libraries": [
                    {
                        "name": "MySQL",
                        "description": "a good starter to understanding how to structure data in the form of tables, easiest to learn and get started on",
                        "href": "https://www.mysql.com/"
                    },
                    {
                        "name": "Firebase",
                        "description": "a JSON-based datastore that integrates with many Javascript frameworks, also provides real-time updates, easy to set up",
                        "href": "https://firebase.google.com/"
                    },
                    {
                        "name": "mLab",
                        "description": "allows you to spin up a MongoDB instance in the cloud, no installation required, if you're up for playing around with NoSQL databases",
                        "href": "https://mlab.com/"
                    }
                ]
            },
            {
                "id": "server",
                "category": "Ok, but now I want to serve my website. I want a URL!",
                "libraries": [
                    {
                        "name": "Github Pages",
                        "description": "a simple way to publish your own website straight from Github, recommended for front-end only projects",
                        "href": "https://pages.github.com/"
                    },
                    {
                        "name": "Heroku",
                        "description": "an easy way to push a full-stack web application live, whether it be Flask-based, Node-based, etc.",
                        "href": "https://www.heroku.com/"
                    },
                    {
                        "name": "DigitalOcean",
                        "description": "a barebones service that allows you to start up virtual machines to host and start your web server on, advanced set up though because you have to do everything yourself",
                        "href": "https://www.digitalocean.com/"
                    }
                ]
            },
            {
                "id": "mobile",
                "category": "But what if I don't want to do web development? Mobile forever!",
                "libraries": [
                    {
                        "name": "Android Studio",
                        "description": "Google's official IDE for Android development, if you got an Android phone, you can also load your app onto your phone to test it out, requires Java",
                        "href": "https://developer.android.com/studio/index.html"
                    },
                    {
                        "name": "XCode",
                        "description": "Apple's official IDE for iOS and Mac development, comes with built-in emulators for iPhones of all generations, requires a Mac",
                        "href": "https://developer.apple.com/xcode/ide/"
                    }
                ]
            },
            {
                "id": "hardware",
                "category": "Mmm, none of those suit my fancy. What about hardware?",
                "libraries": [
                    {
                        "name": "Raspberry Pi",
                        "description": "a compact computer that comes with many different circuit parts too",
                        "href": "https://www.raspberrypi.org/"
                    },
                    {
                        "name": "Arduino",
                        "description": "a compact circuit-board that allows you to prototype, also comes with a software package specifically for Arduino projects",
                        "href": "https://www.arduino.cc/"
                    }
                ]
            },
            {
                "id": "dataset",
                "category": "I really want to get my feet wet in data. Are there APIs or data sources you recommend?",
                "libraries": [
                    {
                        "name": "Awesome JSON Datasets",
                        "description": "an open-source list of different APIs available to get data from, ranging from weather to social media to financial data",
                        "href": "https://github.com/jdorfman/awesome-json-datasets"
                    },
                    {
                        "name": "US Government Open Data",
                        "description": "the US Government's hub for datasets related to anything government-related, ranging from education to agriculture",
                        "href": "https://www.data.gov/"
                    },
                    {
                        "name": "Academic Torrents",
                        "description": "15.2 TB of research data available for you to play with",
                        "href": "http://academictorrents.com/"
                    }
                ]
            },
            {
                "id": "datavis",
                "category": "What are some data visualization libraries that can help me make sense of so much data?",
                "libraries": [
                    {
                        "name": "Matplotlib",
                        "description": "this is the default library used for scientific computing and data visualization in Python, many libraries built on top of this",
                        "href": "http://matplotlib.org/"
                    },
                    {
                        "name": "d3js (and its variants)",
                        "description": "this is the default data visualization library for Javascript to display visualizations on the web, many libraries built on top of this",
                        "href": "https://d3js.org/"
                    }
                ]
            }
        ]
    };

    var recTemplate = Mustache.render($('#recTemplate').html(), recommendations);
    $('#accordionTT').html(recTemplate);

    var links = {
        "values": [
            {
                "name": "Tech Team Facebook Group",
                "href": "https://www.facebook.com/groups/666235760194071/"
            },
            {
                "name": "Our Github",
                "href": "https://github.com/illinoiswcs"
            },
            {
                "name": "How to Start Your Own Side Project (in partnership with Mentoring)",
                "href": "https://docs.google.com/presentation/d/1XHNqpS30KhmzgWdZX6GDjn15vvvCjb4Pxe5jbxEfWPw/edit?usp=sharing"
            },
            {
                "name": "Submit Your Project Idea (and get to present at Engineering Open House)",
                "href": "https://goo.gl/forms/1WHriNuvaAW5RG7T2"
            },
            {
                "name": "Tutorials",
                "href": "/tutorials",
                "tutorials": [
                    {
                        "name": "Introduction to Git",
                        "slides": "/tutorials/git",
                        "links": [
                            {
                                "name": "Git Skeleton Repository",
                                "href": "https://github.com/IllinoisWCS/git-skeleton"
                            },
                            {
                                "name": "Extended Notes",
                                "href": "https://medium.com/how-to-start-your-own-technical-project/notes-on-git-af030e23c887#.kp4d5zdxv"
                            }
                        ]
                    },
                    {
                        "name": "Introduction to Web Development + Javascript Challenges",
                        "slides": "/tutorials/web-intro",
                        "links": [
                            {
                                "name": "Intro to Web Skeleton Repository",
                                "href": "https://github.com/IllinoisWCS/web-skeleton"
                            },
                            {
                                "name": "Javascript Challenges Repository",
                                "href": "https://github.com/IllinoisWCS/web-challenges"
                            },
                            {
                                "name": "Intro to Web Completed Repository",
                                "href": "https://github.com/IllinoisWCS/web-complete"
                            },
                            {
                                "name": "Extended Notes",
                                "href": "https://medium.com/how-to-start-your-own-technical-project/notes-on-web-development-part-1-3bedffe9821c#.lmue73p05"
                            }
                        ]
                    },
                    {
                        "name": "Introduction to APIs",
                        "slides": "/tutorials/api-intro",
                        "links": [
                            {
                                "name": "An example of using the CUMTD API",
                                "href": "https://jsfiddle.net/bxie6/sj2zfce5/7/"
                            },
                            {
                                "name": "An example of using the Open Movie Database API",
                                "href": "https://jsfiddle.net/elchao96/xc4qsmzt/"
                            },
                            {
                                "name": "An example of using the Giphy API",
                                "href": "https://github.com/IllinoisWCS/giphy-api"
                            }
                        ]
                    },
                    {
                        "name": "Introduction to Data Science",
                        "slides": "/tutorials/data",
                        "links": [
                            {
                                "name": "Python Data Science Tutorial repository",
                                "href": "https://github.com/illinoiswcs/python-start",
                            },
                            {
                                "name": "Try Jupyter notebooks online",
                                "href": "https://try.jupyter.org/"
                            }
                        ]
                    },
                    {
                        "name": "Introduction to Data-Binding",
                        "slides": "/tutorials/web-intro/#/14",
                        "links": [
                            {
                                "name": "AngularJS Complete Repository",
                                "href": "https://github.com/IllinoisWCS/web-II-complete"
                            },
                            {
                                "name": "AngularJS Skeleton Repository",
                                "href": "https://github.com/IllinoisWCS/web-II-skeleton"
                            }
                        ]
                    },
                    {
                        "name": "Introduction to ChatBots",
                        "slides": "/tutorials/chatbot",
                        "links": [
                            {
                                "name": "Chatbot Example (ELIZA bot)",
                                "href": "https://github.com/IllinoisWCS/chatbot-intro"
                            },
                            {
                                "name": "Original Tutorial Based Off Of",
                                "href": "https://www.smallsurething.com/implementing-the-famous-eliza-chatbot-in-python/"
                            }
                        ]
                    },
                    {
                        "name": "Introduction to Creating Your Own API",
                        "slides": "/tutorials/web-intro/#/25",
                        "links": [
                            {
                                "name": "Backend Example with Firebase",
                                "href": "https://github.com/IllinoisWCS/backend-intro"
                            },
                            {
                                "name": "Firebase Documentation",
                                "href": "https://firebase.google.com/"
                            },
                            {
                                "name": "AngularFire (using Angular with Firebase)",
                                "href": "https://github.com/firebase/angularfire"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    var linksTemplate = Mustache.render($('#ttlinkTemplate').html(), links);
    $('#linksList').html(linksTemplate);
});
