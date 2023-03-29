var wins = 0
var losses = 0
var ties = 0

var options = ["r", "p", "s"];

var playGame = function() {

var userInput = promptUser();

var computerInput = generateComputerInput();
alertComputerInput(compterInput);
checkUserComputerInputCondition(userInput, computerInput);
};
  
function promptUser(){
var userInput = window.prompt ("Enter r, p or s:");
  if (!userInput) {
  return;
} 

if (userInput !== "r" || userInput !== "p" || userInput !== "s"){
    promptUser();
}
return userInput
}


function generateComputerInput(){
var index = math.floor(math.random() * options.length);
var computerInput = options[index];
return computerInput;
}

function alertComputerInput(randomComputerInput){
    window.alert("The computer chose" + randomComputerInput);
}

function checkUserComputerInputCondition(userInput, computerInput){
    if (userInput === computerInput) {
        ties++;
    } else if (
        (userInput === "r" && computerInput === "s") ||
        (userInput === "p" && computerInput === "r") ||
        (userInput === "s" && computerInput === "p")
    ){
        wins ++;
        window.alert("You win!");

    } else {
        losses++;
        window.alert("You lost!");
    }

    window.alert (
        "stats:\nWins: " + wins + "\nlosses: " + losses + "\nTies" + ties
    );

    var playAgain = window.confirm("Play again?");

    if (playAgain) {
        playGame();
    }
};