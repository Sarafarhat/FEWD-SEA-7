$(document).ready(function() {
	//create an array for the images
	var imageArray = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg" , "images/food5.jpg", "images/food6.jpg", "images/food7.jpg","images/food8.jpg" ];
	//create an array for the votes
	var votesArray = [];
	console.log(imageArray);
	var imageIndex = 0;
	//store the vote in the array
	var your_vote_changed = function (){
		var vote = $("#your-vote").val();
		console.log (vote)
		votesArray[imageIndex] = vote; //store the vote in the array
		imageIndex ++;
		if (imageIndex >= imageArray.length) {
			var avg = average(votesArray);
			$("#buttons-wrapper").html("<h1>Thank you for voting you average is "+ avg.toFixed(2) + "!</h1>");
		}
		else {
			var imageUrl = imageArray[imageIndex];
			$("#image-to-vote-on").attr("src", imageUrl);  //change image when voting
			console.log(imageUrl);
			$("#your-vote").prop('selectedIndex',0);
			var avg = average (votesArray);
			console.log (avg);
		}
	}
	//calculate average
	$("#your-vote").on("change", your_vote_changed);
	var average = function (arr){
		var sum = 0;
		for(i = 0; i < arr.length; i +=1){   // loop 3 values ; initiator =0, arr length less than length, i++ incrementally adds a 1 
			sum += parseInt(arr[i]); //parseInt transforms string into integers
		}
		return sum / arr.length; 
	};
	var back = function(){
	}
	$(":input[value='Back']").on("click", back)
	var skip = function(){
	}
	$(":input[value='Skip']").on("click", skip)
//skip logic

//back ogic
});