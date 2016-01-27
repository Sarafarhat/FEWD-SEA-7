$(document).ready(function() {
	var score = 0;

	var add5 = function(){
		score += 5;
		$("#result").html(score);
	}

	$("#add5").click(add5);

	var add10 = function(){
		score += 10;
		$("#result").html(score);
	}
	$("#add10").click(add10);

	var sub1 = function(){
		score -= 1;
		$("#result").html(score);
	}
	$("#sub1").click(sub1);

});