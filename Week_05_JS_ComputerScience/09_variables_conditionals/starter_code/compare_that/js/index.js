$(document).ready(function(){
	var a;
	var b;

	var compareHandler = function() {
		a = $("#a").val();
		b = $("#b").val();
		console.log(a);
		if (a>b) {
			console.log("a is greater!");
		} else if (b>a) {
			console.log("b is greater!");
		} else {
			console.log("They are equal");
		}

	};

	$("#submit").click(compareHandler);


});