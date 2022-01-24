const result = ['Rock', 'Paper', 'Scissors'];
// access the buttons
let buttons = document.querySelectorAll('.btn')
// access the scores of each player
let roundResult = document.querySelector('.round-result'); 
let playerScoreDisplay = document.querySelector('#player-score'); 
let computerScoreDisplay = document.querySelector('#computer-score');
let playerSelection = '';
let computerSelection = '';
let playerScore = 0; 
let computerScore = 0;
let isGameOver = false;
let winningScore = 5

// Variable that generates a computer's selection based on the range of the array length. 
function randomSelection() {
    let indexValue = Math.floor(Math.random() * result.length);
    return result[indexValue];
}

// evaluates player selection vs computer selection to declare a round winner
function playRound(playerSelection, computerSelection) {
    let firstChar = playerSelection[0].toUpperCase();
    let remaining = playerSelection.toLowerCase().slice(1);
    computerSelection = randomSelection()
    playerSelection = firstChar.concat(remaining);

    if (playerSelection === computerSelection) {
        roundResult.innerText = 'Its a tie '; 
    }
    if (
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        roundResult.innerText = 'Player wins!'; 
    
    } if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
        computerScore++;
        computerScoreDisplay.textContent = computerScore; 
        roundResult.innerText = 'Computer Wins!'; 
    }
};  

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        playerSelection = button.id;
        playRound(playerSelection, computerSelection);

            if(playerScore === winningScore) {
                isGameOver = true;
               return roundResult.innerText = 'Congratulations, You WIN!!!';
            }
            if(computerScore === winningScore) {
                isGameOver = true;
                return roundResult.innerText = 'Oh no!!! Computer Wins!!';
            }
    });
});

