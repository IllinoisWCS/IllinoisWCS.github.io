function make_officer_section(officer)
{
	//replace this with a regex later, g stands for all
	var new_id = officer.name.replace(/ /g, '');
	new_id = new_id.replace('(', '');
	new_id = new_id.replace(')', '');
	
	
	var new_string = '<div id = "' + new_id + '" class="officer"> \
		<div class="officer-circular"></div> \
		<div class="officer-description"> \
			<span class="officer-header"><span class="officer_position"><b>' + officer.position + '</b></span> | ' + officer.name +  '<b> </b>'+'| <a href="mailto:'+ officer.email +'">'+ officer.email +'</a> </br></span> \
			<b>Year in School:</b> ' + officer.year + '</br> \
			<b>Majors and Minors:</b> ' + officer.studies + '</br> \
			<b>Where You\'re From:</b> ' + officer.from + '</br> \
			<b>Interest in CS:</b> ' + officer.interest + '</br> \
			<b>Previous Work Experience:</b> ' + officer.work_experience +'</br> \
			<b>Hobbies:</b> ' + officer.hobbies + '</br> \
			<b>Fun Fact:</b> ' + officer.fun_fact + '</br> \
		</div> \
	</div>';
	
	$("#current-officers").append(new_string);
}


var emily = {
	position: "President",
	name: "Emily Tran",
	email: "etran5@illinois.edu",
	year: "Senior",
	studies: "Computer Science",
	from: "Chicago, IL",
	interest: "HCI, UI/UX, Web Development, Big Data",
	work_experience: "Intern at CPS-Oracle, Program Manager Intern at Microsoft",
	hobbies: "Collecting Lifehacks, Cooking, Reading Tech News, Adventuring",
	fun_fact: "I strive to make it to the front of every concert I go to and some notable ones have been Kaskade, Tiesto, Deadmau5, and Macklemore.",
};

make_officer_section(emily);
$('#EmilyTran .officer-circular').css('background', 'url("assets/img/officers/Emily-Tran.jpg") no-repeat');
$('#EmilyTran .officer-circular').css('background-size', '100%');

var kavya = {
	position: "Internal Vice President",
	name: "Kavya Gundavaram",
	email: "gundava2@illinois.edu",
	year: "Junior",
	studies: "Computer Science (major), Busines (minor)",
	from: "Hyderabad, India",
	interest: "UI/UX, HCI, Wearable Technology",
	work_experience: "Software engineering intern at Qualcomm, software engineering intern at Salesforce.com",
	hobbies: "Cooking, Playing Tennis and Volleyball, Travel",
	fun_fact: "I have been to every continent in the world except Antarctica.",
};

make_officer_section(kavya);
$('#KavyaGundavaram .officer-circular').css('background', 'url("assets/img/officers/Kavya-Gundavaram.jpg") no-repeat');
$('#KavyaGundavaram .officer-circular').css('background-size', '100%');


var annie = {
	position: "External Vice President",
	name: "Annie Rong",
	email: "rong2@illinois.edu",
	year: "Junior",
	studies: "Computer Science (major), Art + Design (minor)",
	from: "Urbana, IL",
	interest: "Computer Graphics, UI/UX, Algorithms, Data Structures",
	work_experience: "Applications Developer intern at JPMorgan Chase",
	hobbies: "Netflix, Reading, Violin, and Drawing",
	fun_fact: "My goal is to try a cup of coffee at every cafe I walk by.",
};

make_officer_section(annie);
$('#AnnieRong .officer-circular').css('background', 'url("assets/img/officers/Annie-Rong.jpg") no-repeat');
$('#AnnieRong .officer-circular').css('background-size', '100%');


var hanna = {
	position: "Secretary",
	name: "Hanna Koh",
	email: "hxkoh2@illinois.edu",
	year: "Junior",
	studies: "Computer Science (major), Business (minor)",
	from: "Born in Singapore but grew up in the Bay Area in California",
	interest: "Artificial Intelligence, UI/UX, Social Computing, Internet of Things",
	work_experience: "Explorer Intern at Microsoft",
	hobbies: "Watching TV, Hanging out with my sisters and friends",
	fun_fact: "I have a twin sister and a younger sister that is slightly less than a year younger than me.",
};

make_officer_section(hanna);
$('#HannaKoh .officer-circular').css('background', 'url("assets/img/officers/Hanna-Koh.jpg") no-repeat');
$('#HannaKoh .officer-circular').css('background-size', '100%');


var deepti = {
	position: "Treasurer",
	name: "Deepti Gupta",
	email: "dgupta12@illinois.edu",
	year: "Senior",
	studies: "Computer Science",
	from: "New Delhi, India",
	interest: "Systems and Network Programming, Distrubuted Systems",
	work_experience: "Undergraduate Research Assistant at NSIT (my previous college in Delhi, India), Undergraduate Research Assistant at UIUC",
	hobbies: "Salsa, Adventure, Travel",
	fun_fact: "I am a dictionary of Bollywood songs - refer to me if you need help!"
};

make_officer_section(deepti);
$('#DeeptiGupta .officer-circular').css('background', 'url("assets/img/officers/Deepti-Gupta.jpg") no-repeat');
$('#DeeptiGupta .officer-circular').css('background-size', '100%');

var lily = {
	position: "Webmaster",
	name: "Lily Sellers",
	email: "lseller2@illinois.edu",
	year: "Junior",
	studies: "CS/Stats, Psychology",
	from: "Florida",
	interest: "Gaming, Artificial Intelligence",
	work_experience: "Foresight ROI Marketing Analytics, Apollo Global",
	hobbies: "Video Games, Reading, Writing, Daydreaming",
	fun_fact: "I am a certified scuba diver and a black-belt in Tae-Kwon-Do."
};

make_officer_section(lily);
$('#LilySellers .officer-circular').css('background', 'url("assets/img/officers/Lily-Sellers.jpg") no-repeat');
$('#LilySellers .officer-circular').css('background-size', '100%');

var corly = {
	position: "ChicTech Director",
	name: "Corly Leung",
	email: "cyleung2@illinois.edu",
	year: "Sophomore",
	studies: "Computer Science",
	from: "Northern California",
	interest: "Security, Big Data, AI, UI/UX",
	work_experience: "State Farm, Ashoka",
	hobbies: "Napping, Watching Movies, Hanging Out with Friends, Travel",
	fun_fact: "I had a British Passport, but I have never been to England."
};

make_officer_section(corly);
$('#CorlyLeung .officer-circular').css('background', 'url("assets/img/officers/Corly-Leung.jpg") no-repeat');
$('#CorlyLeung .officer-circular').css('background-size', '100%');


var eva = {
	position: "Tech Team Co-Director",
	name: "Eva Shih",
	email: "eshih3@illinois.edu",
	year: "Junior",
	studies: "CS/Math (major), Art + Design (minor)",
	from: "Vancouver, Canada",
	interest: "HCI, UI/UX, Security",
	work_experience: " Undergraduate Research Assistant for HCI",
	hobbies: "Dancing, Running, Reading and Watching anything to do with Sci-Fi",
	fun_fact: " I have moved 7 times before the age of 14."
};

make_officer_section(eva);
$('#EvaShih .officer-circular').css('background', 'url("assets/img/officers/Eva-Shih.jpg") no-repeat');
$('#EvaShih .officer-circular').css('background-size', '100%');
	
var violet = {
	position: "Tech Team Co-Director",
	name: "Violet (Xue) Zou",
	email: "xuezou3@illinois.edu",
	year: "Junior",
	studies: "Math and Computer Science",
	from: "Yueyang, Hunan, China",
	interest: "UI/UX, Data Mining, Security",
	work_experience: "",
	hobbies: "Reading, Watching Movies",
	fun_fact: "I am a boring person."
};

make_officer_section(violet);
$('#VioletXueZou .officer-circular').css('background', 'url("assets/img/officers/Violet-Xue-Zou.jpg") no-repeat');
$('#VioletXueZou .officer-circular').css('background-size', '100%');


var emily_chao = {
	position: "Mentoring Director",
	name: "Emily Chao",
	email: "elchao2@illinois.edu",
	year: "Sophomore",
	studies: "Computer Science",
	from: "Cincinnati, Ohio",
	interest: "UI/UX, Web Development, Software Engineering",
	work_experience: "Application Development Intern at Paycor, GBS-HRSS Intern at P&G, Software Engineering Intern at kCura, Web Developer for Miss Possible",
	hobbies: "Listening to Music, Writing Editorials, Reading, Figure Skating",
	fun_fact: "I am the first of my generation in my family to be born in the United States."
};

make_officer_section(emily_chao);
$('#EmilyChao .officer-circular').css('background', 'url("assets/img/officers/Emily-Chao.jpg") no-repeat');
$('#EmilyChao .officer-circular').css('background-size', '100%');

var leila = {
	position: "Grad Representative",
	name: "Leila Fuladi",
	email: "lfuladi2@illinois.edu",
	year: "Graduate Student",
	studies: "Electrical and Computer Engineering",
	from: "Tehran, Iran",
	interest: "N/A",
	work_experience: "N/A",
	hobbies: "N/A",
	fun_fact: "N/A"
};

make_officer_section(leila);
$('#LeilaFuladi .officer-circular').css('background', 'url("assets/img/officers/Leila-Fuladi.jpg") no-repeat');
$('#LeilaFuladi .officer-circular').css('background-size', '100%');

var praniti = {
	position: "Social Chair",
	name: "Praniti Sinha",
	email: "psinha4@illinois.edu",
	year: "Sophomore",
	studies: "Computer Science",
	from: "Palo Alto, California",
	interest: "Web Development, Algorithms, Data Structures, UI/UX, Architecture",
	work_experience: "Research Analysis for Global Talent Metrics, Legal Intern at Grandall Chinese Legal Group",
	hobbies: "Camping, Photography, Board Games, Kayaking, Traveling",
	fun_fact: "I have spoken at TedX."
};

make_officer_section(praniti);
$('#PranitiSinha .officer-circular').css('background', 'url("assets/img/officers/Praniti-Sinha.jpg") no-repeat');
$('#PranitiSinha .officer-circular').css('background-size', '100%');

var brianna = {
	position: "Publicity Chair",
	name: "Brianna Ifft",
	email: "bifft2@illinois.edu",
	year: "Sophomore",
	studies: "Computer Science",
	from: "Forrest, Illinois",
	interest: "Natural Language Processing, AI",
	work_experience: "Systems Intern at State Farm, Technology Developer and Analyst Intern at Bank of America",
	hobbies: "Hanging Out with Family/Friends, Shopping, Traveling, Exploring New Places",
	fun_fact: "I have a huge family--46 first cousins."
};

make_officer_section(brianna);
$('#BriannaIfft .officer-circular').css('background', 'url("assets/img/officers/Brianna-Ifft.jpg") no-repeat');
$('#BriannaIfft .officer-circular').css('background-size', '100%');

var lisa = {
	position: "Design Chair",
	name: "Lisa Vuong",
	email: "lvuong3@illinois.edu",
	year: "Junior",
	studies: "Graphic Design (major), Computer Science/Informatics (minors)",
	from: "Grayslake, IL",
	interest: "HCI, UI/UX",
	work_experience: "Intern at VMware",
	hobbies: "Photography, Design, Astronomy, Movies, Travel, Music, Video Games",
	fun_fact: "I tend to reference many movies in daily conversation."
};

make_officer_section(lisa);
$('#LisaVuong .officer-circular').css('background', 'url("assets/img/officers/Lisa-Vuong.jpg") no-repeat');
$('#LisaVuong .officer-circular').css('background-size', '100%');

	