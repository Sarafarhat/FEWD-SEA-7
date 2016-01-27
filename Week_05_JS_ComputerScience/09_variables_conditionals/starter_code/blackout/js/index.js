$(document).ready(function(){
	var lightsOn = true;
	$("#light_switch").click(function() {
		if (lightsOn) {
			$("body").addClass("dark");
			lightsOn = false;
		 } else {
		 	$("body").removeClass("dark");
		 	lightsOn = true;
		 }
	});
});




