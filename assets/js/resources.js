$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var resources = {
        "internships": {
            "values": [
                {
                    "name": "Microsoft Explore",
                    "description": "12-week internship program designed for freshmen and sophomores, work in small groups of other Explore interns, get to explore different roles at Microsoft regarding software development",
                    "link": "https://careers.microsoft.com/students/explore"
                },
                {
                    "name": "Google Engineering Practicum",
                    "description": "12-week internship program designed for freshmen and sophomores, work on a project with other interns and full-time Googlers",
                    "link": "https://www.google.com/about/careers/search#!t=jo&jid=215255001&"
                },
                {
                    "name": "Facebook University for Engineering",
                    "description": "8-week program focusing on mobile development for freshmen, with first 3 weeks as training, 5 weeks as hands-on project time",
                    "link": "https://www.facebook.com/careers/university/fbueng"
                },
                {
                    "name": "Twitter Academy Internship",
                    "description": "12-week internship for freshmen, working in small teams alongside full-time Tweeps"
                },
                {
                    "name": "Pinterest Engage Internship",
                    "description": "8-week internship for freshmen in San Francisco office, work on project alongside other interns"
                },
                {
                    "name": "Google Summer of Code",
                    "description": "Work alongside a mentor on an open-source project with a stipend",
                    "link": "https://developers.google.com/open-source/gsoc/"
                }
            ]
        },
        "scholarships": {
            "values": [
                {
                    "name": "",
                    "description": ""
                },
            ]
        },
        "conferences": {
            "values": [
                {
                    "name": "",
                    "description": ""
                },
            ]
        },
        "communities": {
            "values": [
                {
                    "name": "",
                    "description": ""
                },
            ]
        },
        "influencers": {
            "values": [
                {
                    "name": "",
                    "description": ""
                },
            ]
        }
    };

    $("#internshipsList").html(Mustache.render($("#resourceTemplate").html(), resources.internships));
});
