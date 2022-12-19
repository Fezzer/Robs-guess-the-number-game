// Guess the computer's number game

// Rules

// User confirms they understand the instructions
// User enters their name
// User chooses the number of rounds
// User gets 5 guesses per round
// Who ever scores highest after completing 5th round wins
    // Computer wins logged 
    // User wins logged
// User inputs an upper limit on the range: Between 0 and 'X'
// Computer then picks a number at random 
// Number logged to the console, but not visible to the user
// User is prompted to enter a guess
   
var wins = 0;
var losses = 0;

alert(
  "Hello and welcome to 2022's most loved game.\n" +
  "You are about to face-off with the most feared opponent that ever existed; that's right, one of my in-laws. " +
  "Oh, sorry, dad jokes accepted! You will face off with a multi-cored, silicon-based, Vulcan inspired AI. Are you ready?\n" +
  "Here are the instructions. The AI will pick a number at random and you have to guess it. You guess it; you win. " +
  "You guess wrong; you lose the round. Simple! You can choose how hard to make it by increasing or reducing the range " +
  "the AI can choose from. A lower range increases your odds of guessing right, but increasing the range will drastically reduce your chances of winning.\n" +
  "Rules:\n" +
  "1. You must enter name\n" +
  "2. You must enter a number of rounds\n" +
  "3. You must set the range your opponent can choose from.\n" +
  "Want to give it a go?"
);

//Enter username
var userName = prompt("Please enter your name");

console.log(
    `<ROBOT> "Hi ${userName}, You'll never beat me!"`
);


//Choose number of rounds
var numberOfRounds = parseInt(prompt(`${userName}, now choose the number of rounds you want to play.`));

// CB - Moved to single line statements and remove redundant brackets.
if(numberOfRounds < 5) {
  console.log(`<ROBOT> "${numberOfRounds}?!! Wow, weak!"`);
} else if(numberOfRounds < 10) { // CB - You don't need the 'numberOfRound <= 5' here are that has to be true for it to get to this statement.
  console.log(`<ROBOT> "Ok, ${numberOfRounds} is not bad!"`);
} else {
  alert(`${numberOfRounds}?! Wow, you're in for a mega challenge!!!`);
}

console.log(`<ROBOT> "<initiating warm up procedure>"`);

// Choose the computer's selection range
var range = parseInt(prompt(`${userName}, choose the highest number the computer can choose from.`));

console.log(`<ROBOT> "Understood! Between 0 and ${range}. Choosing in 5,"`);

for (var i = 4; i > 0; i--) {
  console.log(i);
};

// Computer chooses a random number based on user selection
var numberOfGuesses = 5; // CB - Make this a variable so it can be easily changed in the future. Try and keep a mind to what might change.

// CB - We know the number of rounds so use a 'for' loop.
//    - I edited the loop variable name to match the same syntax as the inner loop. 'round' and 'guess'.
for (let round = 0; round < numberOfRounds; round++) {
  confirm(`Ready for Round ${round + 1}`)
  var computerNumber = Math.floor(Math.random() * range);

  console.log(`<ROBOT> "You'll never guess it weak human! I chose ${computerNumber}"`);
  
  let isWin = false;

  for (var guess = 0; guess < numberOfGuesses; guess++) {
    if (guess > 0)
    {
      let remainingGuesses = numberOfGuesses - guess;
      confirm(`Try again. You have ${remainingGuesses} guesses left.`);
      console.log(`<ROBOT> "${userGuess} ?!?! No chance!!! ${remainingGuesses} guesses left? You have no chance"`);
    }

    var userGuess = parseInt(prompt(`Ok ${userName}, time to enter guess number ${guess + 1}`));

    if(userGuess == computerNumber) {
      isWin = true;
      break;
    }
  }

  let resultText = "";
  let logText = "";

  if (isWin) {
    wins++;
    resultText = `Wow!! ${userGuess} is correct!`;
    logText = "<ROBOT> \"Uncomputing...user win...not recognised\"";
  } else {
    losses++;
    resultText = "Too many guesses";
    logText = "<ROBOT> \"YOU SUCK\"";
  }

  alert(`${resultText} \n The score is ${wins} - ${losses}`);
  console.log(logText);
}

// CB - A lesson in DRY (Don't Repeat Yourself). Look for repeated code and try to reduce it.
//    - I did the same just above.
let resultText = "";

if(wins == losses) {
  console.log(`<ROBOT> "We are equal worthy foe!!!"`);
  resultText = "YOU Drew";
} else if(wins > losses) {
  console.log(`<ROBOT> "NOOOOOOOOOOOOOOOO my computer chips.....are......MELTING!!!!!"`);
  resultText = "YOU WIN!!!!!!!!!!";
} else {
  console.log(`<ROBOT> "MWUH HAHAHAHAHAHA YOU LOOOOOOSER!!! Your puny little organic processor is no match for my silicon processor built by beings with an organic proces.....wait?! I WIN, YOU SUCK!!!"`);
  resultText = "Sorry, but you lost this game.";
};

alert(`The final score is ${wins} - ${losses}. ${resultText}.`);
