// console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// console.log(getComputerChoice());

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let userChoice = prompt("Please enter your choice-rock, paper or scissors: ").toLowerCase();
    if (choices.includes(userChoice)) {
        return userChoice.toLowerCase();
    } else {
        return 0;
    }
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! You both choose " + humanChoice);
    }
    else {
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection,computerSelection);


function playGame() {
    let number_of_games = 5;
    while (number_of_games > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === 0) {
            console.log("Invalid choice!");
            console.log("No. of remaining attempts " + number_of_games);
        } else {
            playRound(humanSelection, computerSelection);
            number_of_games--;
            console.log("No. of remaining attempts " + number_of_games);
        }
    }

    if (humanScore > computerScore) {
        console.log("You are the overall winner! Final score: Human - " + humanScore + ", Computer - " + computerScore);
    }
    else if (computerScore > humanScore) {
        console.log("Computer is the overall winner! Final score: Human - " + humanScore + ", Computer - " + computerScore);
    } else {
        console.log("It's an overall tie! Final score: Human - " + humanScore + ", Computer - " + computerScore);
    }
}

playGame();