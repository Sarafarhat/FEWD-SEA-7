$(document).ready(function() {

	console.log("Ready!");

	var total = 0;
	var formatCurrency = function (value){
		var returnValue = value.toFixed(2);
		return "$" + returnValue;

	}
	var submitHandler = function(event) {
		event.preventDefault();
		var newEntry = $("#newEntry").val();
	    console.log(newEntry);
	    newEntry = parseFloat(newEntry);
	    $("#entries").append("<tr><td></td><td>" + formatCurrency(newEntry) + "</td></tr>");
	    total += newEntry;
	    $("#total").html(formatCurrenct(total));
	    $("#newEntry").val(" ");

	};

	$("#entry").submit(submitHandler);


});
