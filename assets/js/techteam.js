$(document).ready(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $.getJSON("../assets/js/techteam_recommendations.json", function(data) {
        var recTemplate = Mustache.render($('#recTemplate').html(), data);
        $('#accordionTT').html(recTemplate);
    });

    $.getJSON("../assets/js/techteam_links.json", function(data) {
        var linksTemplate = Mustache.render($('#ttlinkTemplate').html(), data);
        $('#linksList').html(linksTemplate);
    });

    // $.getJSON("../assets/js/techteam_upcoming.json", function(data) {
    //     var upcomingTemplate = Mustache.render($('#upcomingEvents').html(), data);
    //     $('#upcomingTT').html(upcomingTemplate);
    // });

    // <tr>
    //                 <th scope="row" style="font-weight:400">{{event}}</th>
    //                 <td>{{date}}</td>
    //                 <td>{{time}}</td>
    //             </tr>

    var eventsUrl = 'https://script.google.com/macros/s/AKfycbysZFMo4SZfZCtl9swTqD3M1PvyhLBD71qcrHheuoziX9FpJtpZ/exec';
    var events = [];
    $.get(eventsUrl, function(data) {
        events = data;
        $.each(events, function(i) {

            var tr = $('<tr/>');
            let creator = events[i].creator;

            var added = false;
            if (creator.includes("mihikaa2@illinois.edu") || creator.includes("alicesf2@illinois.edu") || creator.includes("annavb2@illinois.edu")) {
                let title = events[i].title;
                tr.append('<th scope="row" style="font-weight:400">' + title + '</th>');

                var start = new Date(events[i].startTime);
                var end = new Date(events[i].endTime);
                tr.append('<td>' + start.toDateString() + '</td>');

                let allDay = events[i].isAllDay;
                if (allDay) {
                    tr.append('<td>All Day</td>');
                } else {
                    tr.append('<td>' + start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' - ' + end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + '</td>');
                }

                added = true;
            }

            if (added) {
                $('#upcomingTT').append(tr);
            }
        });
    });


    // Your Client ID can be retrieved from your project in the Google
    // Developer Console, https://console.developers.google.com
    var CLIENT_ID = '554068638959-nlr847cg1d1b3a08i3sjq2s123rbnn3k.apps.googleusercontent.com';

    var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

    /**
     * Check if current user has authorized this application.
     */
    function checkAuth() {
        gapi.auth.authorize({
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
        }, handleAuthResult);
    }

    /**
     * Handle response from authorization server.
     *
     * @param {Object} authResult Authorization result.
     */
    function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
            // Hide auth UI, then load client library.
            authorizeDiv.style.display = 'none';
            loadCalendarApi();
        } else {
            // Show auth UI, allowing the user to initiate authorization by
            // clicking authorize button.
            authorizeDiv.style.display = 'inline';
        }
    }
    // loadCalendarApi();

    function loadCalendarApi() {
        gapi.client.load('calendar', 'v3', listUpcomingEvents);
    }

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    function listUpcomingEvents() {
        var request = gapi.client.calendar.events.list({
            'calendarId': '3c28gpprcnos0q251odnl877mc@group.calendar.google.com',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        });

        request.execute(function(resp) {
            var events = resp.items;
            appendPre('Upcoming events:');

            if (events.length > 0) {
                for (i = 0; i < events.length; i++) {
                    var event = events[i];
                    var when = event.start.dateTime;
                    if (!when) {
                        when = event.start.date;
                    }
                    appendPre(event.summary + ' (' + when + ')')
                }
            } else {
                appendPre('No upcoming events found.');
            }

        });
    }



});