//document ready
$(document).ready(function(){
	console.log("ready");
//create an array of cities
var cities = ["austin","la","nyc","sf","sydney"];
//select the select field and store it as a value
var $selectField = $("#city-type"); //$select is a jquery object, i can do jquery methods on it
//loop through the arrat with forEach
cities.forEach(function(city){
	//create a new option element
	var $option = $("<option>")
	//add an HTML value to the option element and then set a value
    $option.html(city).val(city);
	//append the option element to the select field
    $selectField.append($option);
});

//
var cityPicked = function(){
	console.log($(this).val());
	var picked = "url(../starter_code/images/" + $(this).val() + ".jpg)";
	$("body").css("background", picked);

}
$("#city-type").on("change",cityPicked);


});