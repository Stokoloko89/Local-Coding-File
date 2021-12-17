/* Your game is going to play against the computer, 
so begin with a function called computerPlay 
that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is 
returning the expected output before moving to the next step! */

// Create a function that will randomly return either rock or paper or scissors. We can use an array and use the index values to determine the corresponding text.

 // #1 create a array of rock, paper, scissors and assign it to a the variable result.
let result = ['Rock', 'Paper', 'Scissors']; 
// #2 create a vari that generates a random number based on the range of the array length and assign it to a new variable. Then return the variable. 
function getResult () {
    let indexValue = Math.floor(Math.random() * 3);
    return result[indexValue];
}  

function showWinner(playerSelection, getResult) {
    let firstChar = playerSelection[0].toUpperCase(); 
    let remaining = playerSelection.toLowerCase().slice(1);
    playerSelection = firstChar.concat(remaining);
    if (playerSelection === 'Paper' && getResult() === 'Rock') {
        return ('You win! Paper beats Rock'); 
    } else if 
        (playerSelection === 'Rock' && getResult() === 'Scisssors') {
            return ('You win! Rock beats Scissors')
        } else if 
            (playerSelection === 'Scissors' && getResult() === 'Paper') {
                return ('You win! Scissors beats Paper')
            } else if 
                (playerSelection === 'Paper' && getResult() === 'Scissors') {
                    return ('You lose! Scissors beats Paper')
                } else if 
                    (playerSelection === 'Rock' && getResult() === 'Paper') {
                        return ('You lose! Paper beats Rock')
                    } else if 
                        (playerSelection === 'Scissors' && getResult() === 'Rock') {
                            return ('You lose! Rock beats Scissors')
                        }
        }
      