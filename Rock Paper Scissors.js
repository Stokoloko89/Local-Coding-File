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

// This function evaluates the two inputs - from the player and rom the computer. It returns the winning hand. based on the rules of Rock, Paper, Scissors. 
function showWinner(playerSelection, getResult) {
    //To make the player input case insensitive, we need to identfy the first character of the string, and assign it to a the variable. 
    let firstChar = playerSelection[0].toUpperCase();         
    //then we need to separate the first character from the remaining characters and save the remaining characters to a new variable. We then lowerecase 
    //the remaining characters to remove and uppercased characters.   
    let remaining = playerSelection.toLowerCase().slice(1);
    //We then assign a the values of the above variables to the playerSelection variable  
    //by combining both the uppercased first character and the remaining characters.
    playerSelection = firstChar.concat(remaining);
    //Now we declare the rules to the computer using strick equality and the boolean operators. For the computers selection we refer to the getResult function.
    if (playerSelection === getResult()) {
        return ('Its a tie!');
    }

    if  (
        (playerSelection === 'Paper' && getResult() === 'Rock') || 
        (playerSelection === 'Rock' && getResult() === 'Scissors') ||
        (playerSelection === 'Scissors' && getResult() === 'Paper')
        ) {
            return ('Player Wins!')
    }
    if (
        (getResult() === 'Paper' && playerSelection === 'Rock') || 
        (getResult() === 'Rock' && playerSelection === 'Scissors') ||
        (getResult() === 'Scissors' && playerSelection === 'Paper') 
        ) {
            return ('Computer wins!')
    }
}
    


// Keeps score of a winner or loser.


// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else 
// (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! 
// Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful. */