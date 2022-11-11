function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling);
}
$(document).ready(function() {
    $.getJSON("../assets/js/main_carousel.json", function(data) {
        const currentActive = document.getElementById("currentActive");
        $.each(data,function(i,field) {
            var output = Mustache.render($('#mainCarouselTemplate').html(),field);
            insertAfter(currentActive,output);
        });
        // for(let x in data.main-carousel) {
        //     var output = Mustache.render($('#mainCarouselTemplate').html(),x);
        //     insertAfter(currentActive,output);
        // }
        //$('#putCarouselImages').html(output);
    });
});
