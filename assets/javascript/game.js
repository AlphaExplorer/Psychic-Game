// Variable declaration 
var userKeyStokes = []  
var characterNameList = ["JonhSnow", "Daenerys"] 
var numberWins = 0 
var maxNumberGuesses = 12


// Random selection of a character to initiate the game
var randoumCharacter = characterNameList[Math.floor(Math.random()*characterNameList.length)];
console.log(randoumCharacter)



// Capture the user key strokes and store only unique keysrokes into userKeyStrokes array
document.onkeyup = function(){
    var userguess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log(userguess);
    if(userKeyStokes.indexOf(userguess) === -1) {
        userKeyStokes.push(userguess);
        console.log(userKeyStokes);
      }
}

document.write(randoumCharacter)
