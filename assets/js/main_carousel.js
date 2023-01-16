$(document).ready(function () {
    $.getJSON("../assets/js/main_carousel.json", function (data) {
        var size = Object.keys(data.values).length;
        var count = 0;
        //create new div for each image
        for (let i = 0; i < size; i++) {
            count += 1;
            var output = Mustache.render($("#mainCarouselTemplate").html(),data.values[i]);
            var ele = document.createElement("div");
            if (count == 1) {
                ele.className = "item active";
                ele.id = "currentActive";
                ele.innerHTML = output;
                $("#carouselImages").append(ele);
                $("#indicators").append(
                    '<li data-target="#mainCarousel" data-slide-to=' +
                    (count - 1).toString() +
                    'class="active"></li>'
                );
            } else {
                ele.className = "item";
                var active = document.getElementById("currentActive");
                ele.innerHTML = output;
                active.parentNode.insertBefore(ele, active.nextSibling);
                $("#indicators").append(
                    '<li data-target="#mainCarousel" data-slide-to=' +
                    (count - 1).toString() +
                    "></li>"
                );
            }
        }
    });
});
