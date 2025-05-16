function getComputerChoice() {
    let pc_choice = Math.floor(Math.random() * 3) + 1;
    if (pc_choice == 1) return "rock";
    if (pc_choice == 2) return "paper";
    if (pc_choice == 3) return "scissors";
}

function getHumanChoice() {
    let hm_choice = prompt("rock, paper or scissors?");
    return hm_choice.toLowerCase();
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

    function playRound(hm_choice, pc_choice) {

        if (hm_choice == pc_choice) {
            console.log("That's a draw!");
        }

        else if (hm_choice == "paper" && pc_choice == "rock" || hm_choice == "rock" && pc_choice == "scissors" || hm_choice == "scissors" && pc_choice == "paper") {
            console.log(`You win, ${hm_choice} beats ${pc_choice}!`);
            humanScore = humanScore + 1;
        }

        else if (pc_choice == "paper" && hm_choice == "rock" || pc_choice == "rock" && hm_choice == "scissors" || pc_choice == "scissors" && hm_choice == "paper") {
                console.log(`You lose, ${pc_choice} beats ${hm_choice}!`);
                computerScore = computerScore + 1;
        }


    }
}

playGame();