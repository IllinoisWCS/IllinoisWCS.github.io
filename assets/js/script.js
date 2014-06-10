function make_officer_section(officer)
{
	//replace this with a regex later, g stands for all
	var new_id = officer.name.replace(/ /g, '');
	new_id = new_id.replace('(', '');
	new_id = new_id.replace(')', '');
	
	
	var new_string = '<div id = "' + new_id + '" class="officer"> \
		<div class="officer-circular"></div> \
		<div class="officer-description"> \
			<span class="officer-header"><span class="officer_position"><b>' + officer.position + '</b></span> | ' + officer.name + '| <a href="mailto:'+ officer.email +'">'+ officer.email +'</a> </br></span> \
			<b>Year in School:</b> ' + officer.year + '</br> \
			<b>Majors and Minors:</b> ' + officer.studies + '</br> \
			<b>Where You\'re From:</b> ' + officer.from + '</br> \
			<b>Interest in CS:</b> ' + officer.interest + '</br> \
			<b>Previous Work Experience:</b> ' + officer.work_experience +'</br> \
			<b>Hobbies:</b> ' + officer.hobbies + '</br> \
			<b>Fun Fact:</b> ' + officer.fun_fact + '</br> \
		</div> \
	</div>';
	
	$("#officer-section").append(new_string);
}