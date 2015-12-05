$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var faq = {
        "questions": [
            {
                "id": "where",
                "question": "Where will the retreat be held?",
                "answer": "The retreat will be held at the Thomas M. Siebel Center for Computer Science, at 201 N. Goodwin Ave., Urbana, IL 61801. This is the main building where our computer science courses are held."
            },
            {
                "id": "when",
                "question": "When is it?",
                "answer": "Chictech will be held Nov. 7 - 8, 2015."
            },
            {
                "id": "parking",
                "heading": "parkingH",
                "question": "I am going to be driving to the retreat. Where can I park?",
                "answer": "There will be places where you can park for free! Parking is available directly south and northeast of Siebel Center in Lot B2 (on Springfield Avenue between Mathews & Goodwin) and Lot B18 (Harvey Street between Clark and Main), respectively. For Lot B2, go half a block farther from Siebel Center and enter on your right. For Lot B18, from University Ave make a left turn onto Harvey St. Go about a block and a half. The parking lot will be on your right."
            },
            {
                "id": "cost",
                "question": "Are there costs associated with attending the retreat?",
                "answer": "Nope! Once you've arrived at our retreat, it's absolutely free!"
            },
            {
                "id": "pack",
                "question": "What should I pack?",
                "answer": "Since we are an overnight retreat, a sleeping bag, pillow, clothes and pajamas, and necessary toiletries should be sufficient. If you have a sleeping mat that you would like to use, that would be great to bring as well!"
            },
            {
                "id": "accept",
                "question": "How do I know if I'm accepted into the retreat?",
                "answer": "We will be sending out emails by October 24th with decisions about your acceptance. The spots will mostly be first come, first serve with some emphasis on the brief explanation about why you would like to attend our retreat."
            },
            {
                "id": "programming",
                "question": "Is any prior programming experience required?",
                "answer": "No, you do not have to have programming experience prior to attending our retreat. We will provide three different workshop track options, and there is an option that requires no previous experience. Just please make sure to mark this on the registration form."
            },
            {
                "id": "middle",
                "question": "I have a middle schooler who wants to attend. Can she?",
                "answer": "We are first opening our retreat to female high school students, but we may accept middle schoolers if there are still spots left. If you have a middle schooler who wants to attend, go ahead and write that in on the registration form where it asks for the year in school. We will notify you by October 24th about whether or not you were accepted!"
            }
        ]
    };

    var faqTemplate = Mustache.render($('#faqTemplate').html(), faq);
    $('#accordion').html(faqTemplate);

    var schedule117 = {
        "events": [
            {
                "time": "8:30 AM",
                "what": "Check-in & Breakfast",
                "where": "SC Atrium"
            },
            {
                "time": "9:30 AM",
                "what": "Welcome & Lean In Talk",
                "where": "SC 2405"
            },
            {
                "time": "10:30 AM",
                "what": "Workshop Intros & time to get started on projects",
                "where": "SC 0218/20/22"
            },
            {
                "time": "12:00 PM",
                "what": "Lunch",
                "where": "SC 2405"
            },
            {
                "time": "1:00 PM",
                "what": "Workshop time to work on projects",
                "where": "SC 0218/20/22"
            },
            {
                "time": "4:00 PM",
                "what": "Photo Scavenger Hunt",
                "where": "Engineering Quad"
            },
            {
                "time": "6:00 PM",
                "what": "Dinner",
                "where": "SC 2405"
            },
            {
                "time": "7:00 PM",
                "what": "Fun workshop for all girls - content TBA",
                "where": "SC 2405 or 1404"
            },
            {
                "time": "8:30 PM",
                "what": "Girls Night (Movie, Nail Painting, Jewelry)",
                "where": "SC 1404"
            }
        ]
    };

    var schedule118 = {
        "events": [
            {
                "time": "9:00 AM",
                "what": "Breakfast",
                "where": "SC 2405"
            },
            {
                "time": "9:30 AM",
                "what": "Finish Breakfast during Panel & Photo",
                "where": "SC 2405 or 1404"
            },
            {
                "time": "10:30 AM",
                "what": "Workshop time to work on projects",
                "where": "SC 0218/20/22"
            },
            {
                "time": "12:00 PM",
                "what": "Lunch (parents invited)",
                "where": "SC 2405"
            },
            {
                "time": "12:45 PM",
                "what": "Start project demos",
                "where": "SC 2405"
            },
            {
                "time": "1:45 PM",
                "what": "Finish demos and Closing Note",
                "where": "SC 2405"
            }
        ]
    };

    var schedule117Template = Mustache.render($('#eventTemplate').html(), schedule117);
    $('#agenda117').html(schedule117Template);

    var schedule118Template = Mustache.render($('#eventTemplate').html(), schedule118);
    $('#agenda118').html(schedule118Template);
});