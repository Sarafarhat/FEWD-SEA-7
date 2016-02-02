$(document).ready(function() {
	var plays =["Rock","Paper","Scissors"];
	var userTotal = 0;
	var computerTotal = 0;

	var userWins = function(computerChoice, userChoice){
		userTotal +=1;

		$("#humanScore").html(userTotal);
		$("body").css("background","blue");
		//alert(userChoice + " beats " + computerChoice + " You won!");
		$("#message").html("<h1>You win!</h1>")
		
	};
	var computerWins = function(computerChoice, userChoice){
		computerTotal +=1;
		$("#computerScore").html(computerTotal);
		$("body").css("background","red");
		//alert(computerChoice + ' beats ' + userChoice + '. You lost!');
		$("#message").html("<h6>You lose!</h6>")
		
	};
	var tie = function (){
		$("body").css("background","green");
		//alert("It's a tie!");
		$("#message").html("Choose wisely!")
		
	};
	var rock = function(){
		var botChoice = computerChoice();
		if (botChoice === plays[0]){
			tie();
		} else if (botChoice === plays[1]){
			computerWins(botChoice, "Rock");
		} else {
			userWins(botChoice,"Rock");
		}
	}
	var paper = function(){
		var botChoice = computerChoice();
		if (botChoice === plays[0]){
			userWins(botChoice,"Paper");
		} else if (botChoice === plays[1]){
			tie();
		} else {
			computerWins(botChoice, "Paper");
		}
	}
	var scissors = function(){
		var botChoice = computerChoice();
		if (botChoice === plays[0]){
			computerWins(botChoice,"Scissors");
		} else if (botChoice === plays[1]){
			userWins(botChoice,"Scissors");
		} else {
			tie();
		}
	}
	var computerChoice = function getComputerPlay() {
		var play = plays[Math.floor(Math.random() * plays.length)]; // floor rounds the decimal down  so math random is giving us a value betwee 0 and 1 and then we are multiplying it by 3, so the max we will get is 2.99 which rounds to 2. So this function will give us three values only 0, 1, 2 which can be used to refer to items in array plays.
		return play;
	}
	$("#rock").on("click",rock);
	$("#paper").on("click",paper);
	$("#scissors").on("click",scissors);
});

