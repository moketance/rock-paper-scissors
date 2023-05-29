const score = [0,0];

function getComputerChoice() {
    // 1. initialize a list of pre-defined values
    const LIST = ['rock', 'paper', 'scissors'];

    // 2. randomly select a value from the list
    const randomNumber = Math.floor(Math.random() * LIST.length);
    
    // 3. return what was selected in (2)
    return LIST[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    /*  --- RULES ---
        :: Rock wins against scissors.
        :: Scissors win against paper.
        :: Paper wins against rock.
    */

    // 1. make playerselection case insensitive
    playerSelection = playerSelection.toLowerCase();

    // 2. check for a WIN
    if (
        playerSelection === "rock" && computerSelection === "scissors"  ||
        playerSelection === "paper" && computerSelection === "rock"     || 
        playerSelection === "scissors" && computerSelection === "paper") {
        
        score[0]++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    // 3. check for a tie
    if (playerSelection === computerSelection) {
        return `There is a TIE`;
    }

    // 4. return a lose
    score[1]++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
    
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("type in one of these: rock, paper, scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    console.log(score);

    if(score[0] > score[1]) {
        return `GAME OVER, You Win!!`;
    } else if(score[0] === score[1]) {
        return `GAME OVER, Draw game!!`
    } else {
        return `GAME OVER, You Loose!!`;
    }
}

console.log(game());