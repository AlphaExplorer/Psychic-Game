// Variable declaration 
var characterNameList = ["Jonh Snow", "Daenerys"];
var numberWins = 0; 
var maxNumberGuesses = 12;
var guessingBoardSymbol = "_";
var guessingBoard = [];

// Select randomly a character to play the game
var randoumCharacter = characterNameList[Math.floor(Math.random()*characterNameList.length)].toLowerCase().replace(/ /g, '');
// Notice that we are making all the characters in the name lower case and we are eliminating the empty spaces
console.log(randoumCharacter)

// Generate Guessing Board 
var numberCharactersInName = randoumCharacter.length; //store the number of characters in the name of the random character to create the dashes on the guessing board
console.log(numberCharactersInName)
var boardGenerator=function(arrayLength)//create a formula the creates automatically the number of dashes required for the guessing board
{
  for(var i=0; i<arrayLength; i++)
  {
    $("#name_board").append('<div class="dash" id="'+randoumCharacter[i]+'">'+guessingBoardSymbol+'<div>');
  }
} 
boardGenerator(numberCharactersInName);

//Display & Capture user keystrokes
var listOfKeyPressed = [] //create an empty array where to store all the pressed keys by the user
document.onkeyup = function keyStroke (event){
  var last_pressed_key = event.key;
  if(listOfKeyPressed.indexOf(last_pressed_key) === -1) 
  {
    listOfKeyPressed.push(last_pressed_key);
    console.log(listOfKeyPressed);
  }
 
  document.getElementById("last_pressed_key").innerHTML = "Your last pressed key was: " + last_pressed_key;
  document.getElementById("letters_guessed").innerHTML = "You have pressed so far the following letter: " + listOfKeyPressed;
}


