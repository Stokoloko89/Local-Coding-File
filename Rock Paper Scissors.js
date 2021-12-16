/* Your game is going to play against the computer, 
so begin with a function called computerPlay 
that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is 
returning the expected output before moving to the next step! */

// Create a function that will randomly return either rock or paper or scissors. We can use an array and use the index values to determine the corresponding text.
// #2 create a vari that generates a random number based on the range of the array length and assign it to a new variable.
function randomResult (){
    // #1 create a array of rock, paper, scissors and assign it to a the variable result.
    let result = ['Rock', 'Paper', 'Scissors']; 
    let indexValue = Math.floor(Math.random() * 3);
// #3 declare a variable that takes the above variable and returns its string text.
    return result[indexValue]
}   