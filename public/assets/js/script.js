$(document).ready(function () {
  /**
   * Calendar events
   */
  var eventsUrl =
    "https://script.google.com/macros/s/AKfycbwjW5AGzBRydqUY0Bs1J6SpYbC3q4U7KY9RcJyxzLkyzUp9EyBG/exec";
  var events = [];
  $.get(eventsUrl, function (data) {
    events = data.events.slice(0, 5);
    if (events.length === 0) {
      var li = $("<li/>").addClass("list-group-item");
      li.append("<h4>" + "No upcoming events this week. Check again next week!" + "</h4>");
      $("#events-list").append(li);
    }
    $.each(events, function (i) {
      var start = new Date(events[i].startTime);

      var li = $("<li/>").addClass("list-group-item");
      li.append("<h6>" + events[i].title + "</h6>");
      li.append(
        "<span>" +
          start.toDateString() +
          " at " +
          start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) +
          "</span>"
      );
      if (events[i].location.length > 0) {
        loc_with_links = events[i].location.replace(
          /(?:(https?\:\/\/[^\s]+))/gm,
          '<a href="$1" target="_blank">$1</a>'
        );
        li.append("<br><span>" + " Location: " + loc_with_links + "</span>");
      }

      $("#events-list").append(li);
    });
  });

  /**
   * Smooth scrolling
   */
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Your Client ID can be retrieved from your project in the Google
  // Developer Console, https://console.developers.google.com
  var CLIENT_ID =
    "554068638959-nlr847cg1d1b3a08i3sjq2s123rbnn3k.apps.googleusercontent.com";

  var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

  /**
   * Check if current user has authorized this application.
   */
  function checkAuth() {
    gapi.auth.authorize(
      {
        client_id: CLIENT_ID,
        scope: SCOPES.join(" "),
        immediate: true,
      },
      handleAuthResult
    );
  }

  /**
   * Handle response from authorization server.
   *
   * @param {Object} authResult Authorization result.
   */
  function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById("authorize-div");
    if (authResult && !authResult.error) {
      // Hide auth UI, then load client library.
      authorizeDiv.style.display = "none";
      loadCalendarApi();
    } else {
      // Show auth UI, allowing the user to initiate authorization by
      // clicking authorize button.
      authorizeDiv.style.display = "inline";
    }
  }

  /**
   * Initiate auth flow in response to user clicking authorize button.
   *
   * @param {Event} event Button click event.
   */
  function handleAuthClick(event) {
    gapi.auth.authorize(
      { client_id: CLIENT_ID, scope: SCOPES, immediate: false },
      handleAuthResult
    );
    return false;
  }

  /**
   * Load Google Calendar client library. List upcoming events
   * once client library is loaded.
   */
  function loadCalendarApi() {
    gapi.client.load("calendar", "v3", listUpcomingEvents);
  }

  /**
   * Print the summary and start datetime/date of the next ten events in
   * the authorized user's calendar. If no events are found an
   * appropriate message is printed.
   */
  function listUpcomingEvents() {
    var request = gapi.client.calendar.events.list({
      calendarId: "3c28gpprcnos0q251odnl877mc@group.calendar.google.com",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
    });

    request.execute(function (resp) {
      var events = resp.items;
      appendPre("Upcoming events:");

      if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
          var event = events[i];
          var when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
          appendPre(event.summary + " (" + when + ")");
        }
      } else {
        appendPre("No upcoming events found.");
      }
    });
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node.
   *
   * @param {string} message Text to be placed in pre element.
   */
  function appendPre(message) {
    var pre = document.getElementById("output");
    var textContent = document.createTextNode(message + "\n");
    pre.appendChild(textContent);
  }
});
