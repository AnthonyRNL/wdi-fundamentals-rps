////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (!move) {
        move = getInput();
    }
    console.log("Player move: " + move);
    return move;

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

   if (!move) {
        move = randomPlay();
    }
    console.log("Computer move: " + move);
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (((playerMove == "scissors") && (computerMove == "paper")) || ((playerMove == "paper") && (computerMove == "rock")) || ((playerMove == "rock") && (computerMove == "scissors"))) {
      winner = "player";
    } else if (((computerMove == "scissors") && (playerMove == "paper")) || ((computerMove == "paper") && (playerMove == "rock")) || ((computerMove == "rock") && (playerMove == "scissors"))) {
      winner = "computer";
    } else if (computerMove == playerMove) {
      winner = "tie";
    }
    console.log(winner);
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < 5) && (computerWins < 5)) {
        var results = "Player: " + playerWins + "," + "Computer: " + computerWins;
        var winner = getWinner(getPlayerMove(), getComputerMove());
        if (winner == "computer") {
            computerWins += 1;
        } else if (winner == "player") {
            playerWins += 1;
        }
        console.log(results);
    }
    return [playerWins, computerWins];
}
function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < x) && (computerWins < x)) {
        var winner = getWinner(getPlayerMove(), getComputerMove());
        if (winner == "computer") {
            computerWins += 1;
        } else if (winner == "player") {
            playerWins += 1;
        }
        // var results = "---SCOREBOARD---  Player: " + playerWins + "," + "Computer: " + computerWins;
        console.log("---SCOREBOARD---  Player: " + playerWins + "," + "Computer: " + computerWins);
    }
    if (playerWins === x) {
        console.log("Player Wins!");
    } else if (computerWins === x) {
        console.log("Computer Wins!");
    }
    return [playerWins, computerWins];
}
