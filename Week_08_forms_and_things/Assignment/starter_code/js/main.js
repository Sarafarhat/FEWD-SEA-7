//document ready
$(document).ready(function(){
		console.log("ready");
	//create an array of cities
	var states = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", 
        "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", 
        "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
	//select the select field and store it as a value
	var $selectField = $("#state"); //$select is a jquery object, i can do jquery methods on it
	//loop through the arrat with forEach
	states.forEach(function(state){
		//create a new option element
		var $option = $("<option>")
		//add an HTML value to the option element and then set a value
	    $option.html(state).val(state);
		//append the option element to the select field
	    $selectField.append($option);
	});

});
