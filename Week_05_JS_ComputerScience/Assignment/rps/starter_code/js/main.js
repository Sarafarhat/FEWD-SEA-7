$(document).ready(function() {

	console.log("ready!");
	var plays =["Rock","Paper","Scissors"];
	var userTotal = 0;
	var computerTotal = 0;

	var userWins = function(){
		userTotal +=1;
		$("#humanScore").html(userTotal);
	};
	var computerWins = function(){
		computerTotal +=1;
		$("#computerScore").html(computerTotal);
	};
	var rock = function(){
		console.log("rock");
		var botChoice = computerChoice();
		if (botChoice === plays[0]){
			alert("It's a tie! Computer picked "+ botChoice);
		} else if (botChoice === plays[1]){
			alert("You lost! " + botChoice + " beats rock.");
			computerWins();
		} else {
			alert("You won! Rock beats " + botChoice);
			userWins();
		}
	}
	$("#rock").on("click",rock);
	var paper = function(){
		console.log("paper");
		var botChoice = computerChoice();
		if (botChoice === plays[0]){
			alert("You won! Paper beats " + botChoice);
			userWins();
		} else if (botChoice === plays[1]){
			alert("It's a tie! Computer picked paper too.");
		} else {
			alert("You lost!" + botChoice +" beats paper.");
			computerWins();
		}
	}
	$("#paper").on("click",paper);
	var scissors = function(){
		console.log("scissors");
		var botChoice = computerChoice();
		if (botChoice === plays[0]){
			alert("You lost!" + botChoice + " beats scissors.");
			computerWins();
		} else if (botChoice === plays[1]){
			alert("You won! Scissors beats "+ botChoice);
			userWins();
		} else {
			alert("It's a tie! Computer picked " + botChoice);
		}
	}
	$("#scissors").on("click",scissors);
	var computerChoice = function getComputerPlay() {
		var play = plays[Math.floor(Math.random() * plays.length)]; // floor rounds the decimal down  so math random is giving us a value betwee 0 and 1 and then we are multiplying it by 3, so the max we will get is 2.99 which rounds to 2. So this function will give us three values only 0, 1, 2 which can be used to refer to items in array plays.
		return play;
	}
});

