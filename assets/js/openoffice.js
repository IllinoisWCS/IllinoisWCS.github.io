$(document).ready(function() {

    // code to alternate which table users view depending on what week it is
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate)) / (1000 * 60 * 60 * 24);

    var weekNumber = Math.ceil(days/7);

    // conditional may have to change each year depending on what week of the year we start open office
    if (weekNumber % 2 == 0) {
            var element = document.getElementById("week2");
            element.classList.remove("active");
            element = document.getElementById("week2tab");
            element.classList.remove("active");
            
            var element2 = document.getElementById("week1");
            element2.classList.add("active");
            element2 = document.getElementById("week1tab");
            element2.classList.add("active");

            var element3 = document.getElementById("week-indication");
            element3.innerHTML = "*Highlighted names indicate officers. <br> We are currently on week 1 shifts.";
            
    } else {
            var element = document.getElementById("week1");
            element.classList.remove("active");
            element = document.getElementById("week1tab");
            element.classList.remove("active");
            
            var element2 = document.getElementById("week2");
            element2.classList.add("active");
            element2 = document.getElementById("week2tab");
            element2.classList.add("active");

            var element3 = document.getElementById("week-indication");
            element3.innerHTML = "*Highlighted names indicate officers. <br> We are currently on week 2 shifts.";
    }


});