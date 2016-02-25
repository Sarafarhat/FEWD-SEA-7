$(document).ready(function() {
	console.log("doc ready");

	//add item - click on submit
	$("#submit").click(function(e){
		e.preventDefault()
		// console.log("add to list");
		var input = $("#input").val();
		// console.log(input);
		$("#entries").append(
			'<li>'
			+ input 
			+ '<button type="button" id="completed">completed!</button>'
			+ '<button type="button" id="remove">remove</button></li>'
			+ '<span id = "done"></span>');		
		$("#input").val('');
	});
	//complete item - click on "completed"
	//need to select $document explicitly b/c the creation of #complete is in the above funciton, 
	//which is independant from this function... so this function does not know if #complete exists unless i excplicitly select the document	
	//need fix -- it is applying all li elements
		$(document).on("click","#completed", function(e){
		e.preventDefault()
		console.log("completed");
		$("button").remove();
		$("li").addClass("completed");
		$("#done").html(" - DONE!");
	});
	//remove item - click on "remove" 
	//will then need to merge into an if condition together with "completed"
		$(document).on("click","#remove", function(e){
		e.preventDefault()
		console.log("remove");
		$("li").remove();
		// $("button").remove();
	});
});

