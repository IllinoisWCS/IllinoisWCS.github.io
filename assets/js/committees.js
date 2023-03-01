$(document).ready(function () {
  $.getJSON("../assets/js/committees.json", function (data) {
    var output = Mustache.render($("#committeesTemplate").html(), data);
    $("#allCommittees").html(output);
  });
});
