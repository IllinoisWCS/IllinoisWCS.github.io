function make_alumnus_section(alumnus)
{
	//replace this with a regex later, g stands for all
	var new_id = alumnus.name.replace(/ /g, '');
	new_id = new_id.replace('(', '');
	new_id = new_id.replace(')', '');
	
	
	var new_string = '<div id = "' + new_id + '" class="officer"> \
		<div class="officer-circular"></div> \
		<div class="officer-description"> \
			<b>Name:</b> ' + alumnus.name + '</br> \
			<b>Degree:</b> ' + alumnus.degree + '</br> \
			<b>Employment:</b> ' + alumnus.employment + '</br> \
			<b>Focus:</b> ' + alumnus.focus + '</br> \
			<b>Honors:</b> ' + alumnus.honors + '</br> \
			<b>Hobbies:</b> ' + alumnus.hobbies + '</br> \
			<b>WCS Involvement:</b> ' + alumnus.involvement + '</br> \
			<b>Advice To Current Members:</b> ' + alumnus.advice +'</br> \
		</div> \
	</div>';
	
	$("#alumni").append(new_string);
}


var lavanya = {
	name: "Lavanya Iyer",
	degree: "B.S in Computer Science, May 2014",
	employment: "Goldman Sachs: Technology Analyst",
	focus: "Web Development & User Interface Design",
	honors: "National Center for Women in Technology (NCWIT) Summit Ambasssador May 2014, 3rd Place at Google Puzzle Day April 2014, TEDXUIUC 2014 Attendee, Engineering Council Society of the Month Award",
	hobbies: "I have been learning Indian classical music for over 16 years and Indian classical dance for over 13 years. These two art forms are very close to me; and have immersed me more into my Indian culture. In my spare time, I like to sing, dance, play the flute, listen to music, and watch movies.",
	involvement: "I was the President of Women in Computer Science for the school years 2012-2013 and 2013-2014. Along with my terrific officer boards each year, we started new events such as the Fall Alumni and Student Dinner ( a dinner to help facilitate relationships between alumni and staff/faculty/students), Lean In circles (sessions to discuss key points from the book Lean In by Sheryl Sandberg and empower women to achieve their goals), etc., as well as increased membership for the organization. Being part of WCS was one of the best things to ever happen to me at UIUC and I still keep in touch with the WCS officer board and the CS department and help out the best that I can. ",
	advice: "Explore as many fields in Computer Science as possible and discover what is your true passion - once you find that, make yourself as knowledgeable as you can in that area. Stay up-to-date with the latest trends in technology and read about them as much as you can. In addition to developing your technological skills, develop your leadership skills as well by being in a leadership position on any board or organization and networking with as many people as you can, so you have a well-rounded personality.",
	
};

make_alumnus_section(lavanya);
$('#LavanyaIyer .officer-circular').css('background', 'url("assets/img/alumni/lavanya_pic.jpg") no-repeat');
$('#LavanyaIyer .officer-circular').css('background-size', '100%');


	