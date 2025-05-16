function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) return "rock";
    if (computerChoice == 2) return "paper";
    if (computerChoice == 3) return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors? (Different inputs will be rejected)").toLowerCase();
    if(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") return humanChoice;
    else return getHumanChoice();
}

function playGame(humanSelection, computerSelection) {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);   
    }
    console.log(`Final result: Human ${humanScore} - Computer ${computerScore}!`)

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("That's a draw!");
        }
        else if (humanChoice == "paper" && computerChoice == "rock" 
            || humanChoice == "rock" && computerChoice == "scissors" 
            || humanChoice == "scissors" && computerChoice == "paper") {
            console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
            humanScore = humanScore + 1;
        }
        else if (computerChoice == "paper" && humanChoice == "rock" 
            || computerChoice == "rock" && humanChoice == "scissors" 
            || computerChoice == "scissors" && humanChoice == "paper") {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
            computerScore = computerScore + 1;
        }
    }
}

playGame();