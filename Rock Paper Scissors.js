let result = ['Rock', 'Paper', 'Scissors']; 
let playerScore = 0;
let computerScore = 0;

// Variable that generates a random number based on the range of the array length and assign it to a new variable. Then return the variable. 
function computerPlay() {
    let indexValue = Math.floor(Math.random() * 3);
    return result[indexValue];
}  

let computerSelection = computerPlay();

// This function evaluates the two inputs - from the player and from the computer. It returns the winning hand. based on the rules of Rock, Paper, Scissors. 
function showWinner(playerSelection, computerSelection) {
    let firstChar = playerSelection[0].toUpperCase();         
    let remaining = playerSelection.toLowerCase().slice(1);
    playerSelection = firstChar.concat(remaining);
        if 
        (playerSelection === computerSelection) {
        return ('Its a tie!')
        }
        if  (
        (playerSelection == 'Paper' && computerSelection == 'Rock') || 
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
        ) {
        return ('Player Wins!')
    }   else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
            return ('Computer Wins!')
        
        }
}
