$(document).ready(function() {
    $.getJSON("../assets/js/main_carousel.json", function(data) {
        var active = document.getElementById("currentActive");
        var size = Object.keys(data.values).length;
        var count = 0;
        //create new div for each image
        for(let i = 0; i < size; i++) {
            count+=1;
            var output = Mustache.render($('#mainCarouselTemplate').html(), data.values[i]);
            var ele = document.createElement("div");
            ele.className = "item";
            ele.innerHTML = output;
            active.parentNode.insertBefore(ele,active.nextSibling);
            //add indicator
            $("#indicators").append('<li data-target="#mainCarousel" data-slide-to='+count.toString()+'></li>');
        }
    });
});
