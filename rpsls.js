// - Your game should allow the user to select a hand shape and play against the computer 
// (which will select a random hand shape)

// - The game should notify the user of the outcome, 
// and should offer the user the option to play again

// - The game should tell the user how they won or lost 
// (e.g., display the message "Paper disproves Spock!")

// **********

var sget = require("sget");

var playerChoice =[];
var computerChoice =[];

var computerWords = ["Rock","Paper","Scissors","Lizard","Spock"];
var computerPlays = computerWords[Math.floor(Math.random() * computerWords.length)];


var initiatePlay = function() {
var playerPlays = sget("\nAll Hail Sam Kass!\n\nChoose an option:\n1 for Rock\n2 for Paper\n3 for Scissors\n4 for Lizard\n5 for Spock\n6 to Exit.").trim();
	if (playerPlays == 1) {
    playerChoice.push("Rock");
    compareRock();
	}
	else if (playerPlays == 2) {
    playerChoice.push("Paper");
    comparePaper();
	} 
	else if (playerPlays == 3) {
    playerChoice.push("Scissors");
    compareScissors();
	}
	else if (playerPlays == 4) {
    playerChoice.push("Lizard");
    compareLizard();
	}
	else if (playerPlays == 5) {
	playerChoice.push("Spock");
	compareSpock();
	}
	else if (playerPlays == 6) {
	exit();
	}
	else {
    console.log("Invalid option. Please try again.");
    initiatePlay();
	}
};

// //math version, doesn't work well b/c of large Spock number
// var playComputer = function() {
// 	if (0 < computerPlays < 0.20) {
//     computerChoice.push("Rock");
// 	}
// 	else if (0.21 < computerPlays < 0.40) {
//     computerChoice.push("Paper");
// 	} 
// 	else if (0.41 < computerPlays < 0.60) {
//     computerChoice.push("Scissors");
// 	}
// 	else if (0.61 < computerPlays < 0.80) {
//     computerChoice.push("Lizard");
// 	}
// 	else {
//     computerChoice.push("Spock");
// 	}
// };

var playComputer = function() {
	if (computerPlays == "Rock") {
    computerChoice.push("Rock");
	}
	else if (computerPlays == "Paper") {
    computerChoice.push("Paper");
	} 
	else if (computerPlays == "Scissors") {
    computerChoice.push("Scissors");
	}
	else if (computerPlays == "Lizard") {
    computerChoice.push("Lizard");
	}
	else {
    computerChoice.push("Spock");
	}
};

var compareRock = function() {
    if (computerChoice == "Rock") {
        console.log( "The result is a tie!");
   		}
    else if (computerChoice == "Paper") {
        console.log ("Bazinga! Computer wins! Paper covers Rock.");
        }
    else if (computerChoice == "Scissors") {
       console.log("Player wins! Rock crushes Scissors!");
        }
    else if (computerChoice == "Lizard") {
        console.log("Player wins! Rock crushes Lizard!");
        }
    else if (computerChoice == "Spock"){
		console.log ("Bazinga! Computer wins! Spock vaporizes Rock.");
    }
    else {
    	console.log ("Computer forgot how to play. Stand by.");     
     }
     console.log("You played "+playerChoice+". \nComputer played "+computerChoice+". ");
     playAgain();
    };

var comparePaper = function() {
    if (computerChoice == "Paper") {
        console.log( "The result is a tie!");
   		}
    else if (computerChoice == "Rock") {
        console.log ("Player wins! Paper covers Rock.");
        }
    else if (computerChoice == "Scissors") {
       console.log("Bazinga! Computer wins! Scissors cuts Paper.");
        }
    else if (computerChoice == "Lizard") {
        console.log("Bazinga! Computer wins! Lizard eats Paper.");
        }
    else if (computerChoice == "Spock"){
		console.log ("Player wins! Paper disproves Spock.");
    }
    else {
    	console.log ("Computer forgot how to play. Stand by.");     
     }
    console.log("You played "+playerChoice+". \nComputer played "+computerChoice+". ");
    playAgain();
    };


var compareScissors = function() {
    if (computerChoice == "Scissors") {
        console.log( "The result is a tie!");
   		}
    else if (computerChoice == "Rock") {
        console.log ("Bazinga! Computer wins! Rock smashes Scissors.");
        }
    else if (computerChoice == "Paper") {
       console.log("Player wins! Scissors cuts Paper!");
        }
    else if (computerChoice == "Lizard") {
        console.log("Player wins! Scissors decapitates Lizard.");
        }
    else if (computerChoice == "Spock"){
		console.log ("Bazinga! Computer wins! Spock smashes scissors!");
    }
    else {
    	console.log ("Computer forgot how to play. Stand by.");     
     }
    console.log("You played "+playerChoice+". \nComputer played "+computerChoice+". ");
    playAgain();
    };


    var compareLizard = function() {
    if (computerChoice == "Lizard") {
        console.log( "The result is a tie!");
   		}
    else if (computerChoice == "Rock") {
        console.log ("Bazinga! Computer wins! Rock crushes Lizard.");
        }
    else if (computerChoice == "Paper") {
       console.log("Player wins! Lizard eats Paper!");
        }
    else if (computerChoice == "Scissors") {
        console.log("Bazinga! Computer wins! Scissors decapitates Lizard.");
        }
    else if (computerChoice == "Spock"){
		console.log ("Player wins! Lizard poisons Spock!");
    }
    else {
    	console.log ("Computer forgot how to play. Stand by.");     
     }
    console.log("You played "+playerChoice+". \nComputer played "+computerChoice+". ");
    playAgain();
    };

    var compareSpock = function() {
    if (computerChoice == "Spock") {
        console.log( "The result is both Leonard Nemoy and Zachary Quinto!");
   		}
    else if (computerChoice == "Rock") {
        console.log ("Player wins! Spock vaporizes Rock!");
        }
    else if (computerChoice == "Paper") {
       console.log("Player wins! Paper disproves Spock!");
        }
    else if (computerChoice == "Scissors") {
        console.log("Player wins! Spock smashes Scissors!");
        }
    else if (computerChoice == "Lizard"){
		console.log ("Bazinga! Computer wins! Lizard poisons Spock!");
    }
    else {
    	console.log ("Computer forgot how to play. Stand by.");     
     }
    console.log("You played "+playerChoice+". \nComputer played "+computerChoice+". ");
    playAgain();
    };

var playAgain = function(){
	var again = sget("Play again? \n1 for yes, 2 for no.").trim();
	if (again == 1){
		playerChoice = [];
		computerChoice = [];
		run();
	}
	else if (again == 2){
		exit();
	}else {
	 	console.log("Just 1 or 2. This is not a fancy game.");
	 	playAgain();
	}
};


var exit = function(){
	console.log("Thanks for playing! Until next time.");
	process.exit();
};


var run = function(){
	playComputer();
	initiatePlay();
};


run();




