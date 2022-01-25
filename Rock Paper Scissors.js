const result = ['Rock', 'Paper', 'Scissors'];
// access the buttons
let buttons = document.querySelectorAll('.btn')
let resetBtn = document.querySelector('#reset'); 
// access the scores of each player
let roundResult = document.querySelector('.round-result'); 
let playerScoreDisplay = document.querySelector('#player-score'); 
let computerScoreDisplay = document.querySelector('#computer-score');
let playerSelection = '';
let playerScore = 0; 
let computerScore = 0;
const winningScore = 5

// Variable that generates a computer's selection based on the range of the array length. 
function randomSelection() {
    let indexValue = Math.floor(Math.random() * result.length);
    return result[indexValue];
}

let computerSelection = randomSelection();

// evaluates player selection vs computer selection to declare a round winner
function playRound(playerSelection, computerSelection) {
    let firstChar = playerSelection[0].toUpperCase();
    let remaining = playerSelection.toLowerCase().slice(1);
    computerSelection = randomSelection(); 
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

// main click even used to 
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        playerSelection = button.id;
            if(playerScore === winningScore) {
               return roundResult.innerText = 'Congratulations, You WIN!!!';
            }
            if(computerScore === winningScore) {
                return roundResult.innerText = 'Oh no!!! Computer Wins!!';
            }
        playRound(playerSelection, computerSelection);
    }); button.removeEventListener('click', function () {})
});

// reset button that restarts scoreboard display for each player & clears the round result text
resetBtn.addEventListener('click', function () {
    playerScore = 0; 
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    roundResult.innerText = 'Round Result'
})