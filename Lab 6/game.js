// Store game information
let gameStarted = false;

let wins = 0;
let losses = 0;
let draws = 0;

// Store all game results
let results = [];

// Store round number
let round = 0;

// 1. Game Start Function
function startGame() {

    // Get player name
    let name = document.getElementById("playerName").value;

    // Check if name is empty
    if (name.trim() === "") {
        alert("Please enter your name");
        return;
    }

    // Start the game
    gameStarted = true;

    // Display welcome message
    document.getElementById("welcome").innerHTML =
        "Welcome, " + name + "!";

    // Display start date and time
    document.getElementById("startTime").innerHTML =
        "Game started: " + new Date().toLocaleString();

    // Display starting result
    document.getElementById("result").innerHTML =
        "Choose Rock, Paper or Scissors!";

    document.getElementById("result").style.color = "black";
}


// 2. Get Computer Choice Function
function getComputerChoice() {

    // Array of choices
    let choices = ["rock", "paper", "scissors"];

    // Generate random choice
    let randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}


// 3. Play Round Function
function playRound(playerChoice) {

    // Check if game has started
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    // Get computer choice
    let computerChoice = getComputerChoice();

    // Display player and computer images
    document.getElementById("playerImg").src =
        playerChoice + ".jpg";

    document.getElementById("computerImg").src =
        computerChoice + ".jpg";

    // Increase round number
    round++;

    // Determine winner
    let result = "";

    if (playerChoice === computerChoice) {

        result = "Draw";
        draws++;

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {

        result = "Win";
        wins++;

    } else {

        result = "Lose";
        losses++;

    }

    // Store result in array
    results.push(result);

    // Display result and change colour
    let resultElement = document.getElementById("result");

    if (result === "Win") {

        resultElement.innerHTML = "You Win!";
        resultElement.style.color = "green";

    } else if (result === "Lose") {

        resultElement.innerHTML = "You Lose!";
        resultElement.style.color = "red";

    } else {

        resultElement.innerHTML = "It's a Draw!";
        resultElement.style.color = "grey";

    }

    // Update scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Add new row to history table
    document.getElementById("historyBody").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + result + "</td>" +
        "</tr>";
}


// 4. Show Summary Function
function showSummary() {

    // Count total wins using a loop
    let totalWins = 0;

    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }

    }

    // Calculate total rounds
    let totalRounds = results.length;

    // Calculate win percentage
    let percentage = 0;

    if (totalRounds > 0) {
        percentage = Math.round(
            (totalWins / totalRounds) * 100
        );
    }

    // Display summary
    alert(
        "Game Summary\n\n" +
        "You played " + totalRounds + " rounds.\n" +
        "Wins: " + wins + "\n" +
        "Losses: " + losses + "\n" +
        "Draws: " + draws + "\n" +
        "Won " + percentage + "%"
    );
}


// 5. Reset Game Function
function resetGame() {

    // Reset scores
    wins = 0;
    losses = 0;
    draws = 0;

    // Reset round
    round = 0;

    // Empty results array
    results = [];

    // Stop the game
    gameStarted = false;

    // Update scoreboard
    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    // Clear history table
    document.getElementById("historyBody").innerHTML = "";

    // Reset result message
    document.getElementById("result").innerHTML =
        "Game has been reset.";

    document.getElementById("result").style.color = "black";

    // Reset images
    document.getElementById("playerImg").src = "rock.jpg";
    document.getElementById("computerImg").src = "rock.jpg";

    // Clear welcome message and start time
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("startTime").innerHTML = "";
}
