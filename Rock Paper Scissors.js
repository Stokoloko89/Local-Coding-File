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
function getResult (){
    let indexValue = Math.floor(Math.random() * 3);
    return result[indexValue]
}   

/* Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive 
(so users can input rock, ROCK, RocK or any other variation). */

// Define a function that accept two parameters (playerSelection, computerSelection)
// The function must evaluate the two arguments and return the argument that is the winner based on the rules below.
// The condition is as follows : Paper beats Rock, Rock beats Scissors, Scissors beats Paper. 
// The playerSelection parameter must be case insensitive.

function showWinner(playerSelection, computerSelection) {
    if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return ('You win! Paper beats Rock'); 
    }
//             } else if 
//             (playerSelection === 'Rock' && computerSelection === 'Scissors'){
//             return ('You win! Rock beats Scissors'); 
//             } else if
//             (playerSelection === 'Scissors' && computerSelection === 'Paper'){
//              return ('You win! Scissors beats Paper');
//             } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
//             return ('You lose! Paper beats Rock');
//             } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
//                 return ('You lose! Scissors beats Paper');
//             } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
//                  return ('You lose! Paper beats Rock');
//         }   else 
//             ('Please enter a valid selection');
//     }
