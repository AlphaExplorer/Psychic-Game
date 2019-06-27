// Variable declaration 
var userKeyStokes = []  
var characterNameList = ["JonhSnow", "Daenerys"] 
var numberWins = 0 
var maxNumberGuesses = 12
var guessingBoardSymbol = "-"
var guessingBoard = []

// Select randomly a character to play the game
var randoumCharacter = characterNameList[Math.floor(Math.random()*characterNameList.length)];
console.log(randoumCharacter)

// Generate Guessing Board 
var numberCharactersInName = randoumCharacter.length;
console.log(numberCharactersInName);
var boardGenerator=function(arrayLength)
{
  for(var i=0; i<arrayLength; i++)
  {
    $("#gessingBoard").append('<div id="number'+i+'">'+guessingBoardSymbol+'<div>');
  }
} 
boardGenerator(numberCharactersInName);

// Capture the user key strokes and store only unique keysrokes into userKeyStrokes array
document.onkeyup = function(){
    var userguess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(userguess);
    if(userKeyStokes.indexOf(userguess) === -1) {
        userKeyStokes.push(userguess);
        console.log(userKeyStokes);
      }
}

// var BoardUpdater = function()
// {

// }

// // var arr1 = ["abc"];
// // var arr2 = ["a", "b", "d"];

// // var comparingFunction = function(str, letter)
// // {
// //     var indices = [];
// //     for(var i=0; i<str.length;i++) {
// //         if (str[i] === toString(letter)) indices.push(i);
// //     }
// // }
// // console.log(comparingFunction(arr1, "b"));


var str = "scissors";


function blank(str) {
  var indices = [];
  for(var i=0; i<str.length;i++) {
    if (str[i] === "s") indices.push(i);
    return indices
}
}

console.log(blank(str))