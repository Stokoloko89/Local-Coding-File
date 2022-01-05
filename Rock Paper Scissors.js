let result = ['Rock', 'Paper', 'Scissors']; 
let playerScore = 0;
let computerScore = 0;
let winningScore = 5;
let playerAnswer = prompt('Rock, Paper, or Scissors?');  



// Variable that generates a random number based on the range of the array length and assign it to a new variable. Then return the variable. 
function computerPlay() {
    let indexValue = Math.floor(Math.random() * 3);
    return result[indexValue];
}  

let getPlayerAnswer = playerAnswer; 

    function showWinner(getPlayerAnswer, computerSelection) {
    let firstChar = getPlayerAnswer[0].toUpperCase();         
    let remaining = getPlayerAnswer.toLowerCase().slice(1);
    getPlayerAnswer = firstChar.concat(remaining);
    // if getPlayerAnswer is equal to 5 or computerSelection is equal to 5 then declare the winner of the game.
    if (playerScore === 5) {
        return ('Congratulations, player Wins the game!');
    }   else if (computerScore === 5) {
        return ('Oh no, Computer Wins the game!')
    }
        if 
        (getPlayerAnswer === computerSelection) {
        return ('Its a tie!')
        }
        if  (
        (getPlayerAnswer == 'Paper' && computerSelection == 'Rock') || 
        (getPlayerAnswer == 'Rock' && computerSelection == 'Scissors') ||
        (getPlayerAnswer == 'Scissors' && computerSelection == 'Paper')
        ) { playerScore++;
        return ('Player Wins!')
    }   else if (
        (computerSelection == 'Rock' && getPlayerAnswer == 'Scissors') ||
        (computerSelection == 'Paper' && getPlayerAnswer == 'Rock') ||
        (computerSelection == 'Scissors' && getPlayerAnswer == 'Paper')) 
          { computerScore++;
        return ('Computer Wins!')
        }
}   
let computerSelection = computerPlay();