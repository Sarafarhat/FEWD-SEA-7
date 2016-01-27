$(document).ready(function() {
	console.log("Ready!");

	var currentImageIndex = 0;

	// declare imgArray as a variable and store the image URLs in it
	var imageArray = ["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg"];
	// create an array to store votes in
	var imageVotes = [];

	var your_vote_changed = function() {

		// Get the current vote value and log it
	  	var yourVote = $("#your-vote").val(); // returns a string even if its a number
		console.log(yourVote); 
		
		imageVotes[currentImageIndex] = yourVote;

		// If we have reached the end of the array, restart from beginning
		if(currentImageIndex >= imageArray.length - 1) {
			var avg = average(imageVotes);
			alert("Your average is " + avg + ". Thank you for voting!");
		}
		else {
			// Move to the next image
			currentImageIndex += 1;

			// Get the image url
			var imageUrl = imageArray[currentImageIndex];
			console.log(imageUrl); 

			// Set the image based on the new url
			$("#image-to-vote-on").attr("src", imageUrl);

			//clear selected field
			$("#your-vote").prop("selectedIndex",0); 
		}

	};

	//trigger the code above

	$("#your-vote").on("change", your_vote_changed);

	//calculate the average
	var average = function (arr){
		var sum = 0;

		for(i = 0; i < arr.length; i +=1){   // loop 3 values ; initiator =0, arr length less than length, i++
			sum += parseInt(arr[i]); //parseInt transforms string into integers
		}

		return sum / arr.length; 
	};

	
	var back = function() {

		if (currentImageIndex === 0) {
			alert("No previous image!");
			return;
		}

		//Move to previos image
		currentImageIndex -= 1;

		//Get image url 
		var imageUrl = imageArray[currentImageIndex];
		console.log(imageUrl);

		//Set image based on new url
		$("#image-to-vote-on").attr("src",imageUrl);


	};

	$(":input[value='Back']").on("click", back); //Make the back button go back an image.

	var skip = function() {

		if(currentImageIndex >= imageArray.length - 1) {
			var avg = average(imageVotes);
			alert("Your average is " + avg + ". Thank you for voting!");
		}

		else{

			//Move to the next image
			currentImageIndex += 1;

			//Get image url 
			var imageUrl = imageArray[currentImageIndex];
			console.log(imageUrl);

			//Set image based on new url
			$("#image-to-vote-on").attr("src",imageUrl);
		}

	};

	$(":input[value='Skip']").on("click", skip); //Make the skip button go to previous image
});