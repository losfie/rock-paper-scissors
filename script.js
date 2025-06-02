let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice == 1) return "rock";
    if (computerChoice == 2) return "paper";
    if (computerChoice == 3) return "scissors";
}

function playRound(humanChoice, computerChoice) {
    let message = "";
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (humanChoice == computerChoice) {
        message="That's a draw!";
    }
    if (winConditions[humanChoice] === computerChoice) {
        message =`You win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    else {
        message =`You lose, ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }

    return message;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    
    const containerui = document.querySelector('.containerui');
    containerui.innerHTML = `
        <button class="rock">Rock</button>
        <button class="paper">Paper</button>
        <button class="scissors">Scissors</button>
    `;
    
    const resultDiv = document.querySelector('.results');
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }
    
    attachButtonListeners();
}

function attachButtonListeners() {
    const buttons = document.querySelectorAll('.containerui button');
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let humanChoice = "";
            
            if (this.classList.contains('rock')) {
                humanChoice = 'rock';
            }
            else if (this.classList.contains('paper')) {
                humanChoice = 'paper';
            }
            else if (this.classList.contains('scissors')) {
                humanChoice = 'scissors';
            }
            
            const roundMessage = playRound(humanChoice, getComputerChoice());
            
            const resultDiv = document.querySelector('.results');
            const displayResult = document.createElement('div');
            
            if(humanScore < 5 && computerScore < 5) {
                displayResult.innerHTML = `
                    <div>${roundMessage}</div>
                    <div>Score: Human ${humanScore} - Computer ${computerScore}</div>
                `;
            }
            else if (humanScore == 5){
                displayResult.innerHTML = `
                    <div>We have a winner! Human wins!</div>
                    <div>Final Score: Human ${humanScore} - Computer ${computerScore}</div>
                `;
                
                const containerui = document.querySelector('.containerui');
                containerui.innerHTML = `
                    <button class="try-again">Try Again</button>
                `;
                
                const tryAgainBtn = document.querySelector('.try-again');
                tryAgainBtn.addEventListener('click', resetGame);
            }
            else if (computerScore == 5){
                displayResult.innerHTML = `
                    <div>We have a winner! Computer wins!</div>
                    <div>Final Score: Human ${humanScore} - Computer ${computerScore}</div>
                `;
                
                const containerui = document.querySelector('.containerui');
                containerui.innerHTML = `
                    <button class="try-again">Try Again</button>
                `;
                
                const tryAgainBtn = document.querySelector('.try-again');
                tryAgainBtn.addEventListener('click', resetGame);
            }
            
            while (resultDiv.firstChild) {
                resultDiv.removeChild(resultDiv.firstChild);
            }
            
            resultDiv.appendChild(displayResult);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('results');
    document.body.appendChild(resultDiv);

    attachButtonListeners();
});