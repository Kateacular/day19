// - Your game should allow the user to select a hand shape and play against the computer 
// (which will select a random hand shape)

// - The game should notify the user of the outcome, 
// and should offer the user the option to play again

// - The game should tell the user how they won or lost 
// (e.g., display the message "Paper disproves Spock!")

// **********

var sget = require("sget");
var playerName;

var playerChoice =[];
var computerChoice =[];

var computerWords = ["Rock","Paper","Scissors","Lizard","Spock"];
//var computerPlays = computerWords[Math.floor(Math.random() * computerWords.length)];


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

var playComputer = function() {
	var computerPlays = computerWords[Math.floor(Math.random() * computerWords.length)];
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
	else if (computerPlays == "Spock"){
    computerChoice.push("Spock");
	}
	else {
	console.log ("Computer forgot how to play. Stand by.");
	playAgain();
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
       console.log(playerName+" wins! Rock crushes Scissors!");
        }
    else if (computerChoice == "Lizard") {
        console.log(playerName+" wins! Rock crushes Lizard!");
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
        console.log (playerName+" wins! Paper covers Rock.");
        }
    else if (computerChoice == "Scissors") {
       console.log("Bazinga! Computer wins! Scissors cuts Paper.");
        }
    else if (computerChoice == "Lizard") {
        console.log("Bazinga! Computer wins! Lizard eats Paper.");
        }
    else if (computerChoice == "Spock"){
		console.log (playerName+" wins! Paper disproves Spock.");
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
       console.log(playerName+" wins! Scissors cuts Paper!");
        }
    else if (computerChoice == "Lizard") {
        console.log(playerName+" wins! Scissors decapitates Lizard.");
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
       console.log(playerName+" wins! Lizard eats Paper!");
        }
    else if (computerChoice == "Scissors") {
        console.log("Bazinga! Computer wins! Scissors decapitates Lizard.");
        }
    else if (computerChoice == "Spock"){
		console.log (playerName+" wins! Lizard poisons Spock!");
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
        console.log (playerName+" wins! Spock vaporizes Rock!");
        }
    else if (computerChoice == "Paper") {
       console.log("Bazinga! Computer wins! Paper disproves Spock!");
        }
    else if (computerChoice == "Scissors") {
        console.log(playerName+" wins! Spock smashes Scissors!");
        }
    else if (computerChoice == "Lizard"){
		console.log ("Bazinga! Computer wins! Lizard poisons Spock!");
    }
    else {
    	console.log ("Computer forgot how to play. Stand by.");     
     }
    console.log(playerName+" played "+playerChoice+". \nComputer played "+computerChoice+". ");
    playAgain();
    };

var playAgain = function(){
	var again = sget("Play again? \n1 for yes, 2 for no.").trim();
	if (again == 1){
		playerChoice.pop();
		computerChoice.pop();
		run();
	}
	else if (again == 2){
		exit();
	}else {
	 	console.log("Just 1 or 2. This is not a fancy game, "+playerName+ ". ");
	 	playAgain();
	}
};


var exit = function(){
	console.log("Thanks for playing, "+playerName+"! Until next time.");
	process.exit();
};

var intro = function(){
	console.log("\nWelcome to Rock Paper Scissors Lizard Spock");
	playerName = sget("What is your name?").trim();
	console.log("Hello, "+playerName+"! ");
	console.log("Let's play! \n");

};


var run = function(){
	playComputer();
	initiatePlay();
};

intro();
run();




