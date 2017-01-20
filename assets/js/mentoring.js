$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var pastEvents = {
        "values": [
            {
                "name": "How to Start Your Own Side Project 2016",
                "href": "https://drive.google.com/open?id=1XHNqpS30KhmzgWdZX6GDjn15vvvCjb4Pxe5jbxEfWPw"
            },
            {
                "name": "Lean In Circle February 2016",
                "href": "/assets/file/LeanIn.pdf"
            },
            {
                "name": "Class Schedule Preparation October 2015",
                "href": "/assets/file/ClassSchedulePrep.pdf"
            },
            {
                "name": "Resume Review Workshop September 2015",
                "href": "/assets/file/ResumeReview.pdf"
            },
            {
                "name": "Lean In Circle - Academics April 2015",
                "href": "lean-in-circle/april-2015"
            },
            {
                "name": "Lean In Circle - Behavioral Interview March 2015",
                "href": "lean-in-circle/february-2015"
            },
            {
                "name": "Lean In Book Introduction February 2015",
                "href": "lean-in-book"
            },
            {
                "name": "Resume Review and Technical Interview Workshop January 2015",
                "href": "resume-review"
            }
        ]
    };

    var pastEventsTemplate = Mustache.render($('#pastEventsTemplate').html(), pastEvents);
    $('#past-events-list').html(pastEventsTemplate);
});
