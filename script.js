/*
  CB
    - A general comment, concentrate on the formatting of your code. The first thing I did was to format your code so that I could read it more easily!
    - Here are a few suggestions:
      - Tabbing should be consistent. This will help you visualise nested code more easily,
      - Don't use multiple blank lines.
      - Break long lines of code.
      - Multiline blocks of code, i.e. if(...){...}, for(...){...}, etc., should have an empty line before and after them.
*/

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

/* 
  CB
  - Split up the alert message string up to make it more readable.
  - Removed whitespace around the '\n' as this will be visible in the displayed alert message.
  - Changed backtick string delimiters to double quotes. You are not doing any string interpolation here so you do not need
    the functionality associated with the backtick delimiter.
  - Corrected a typo in 'silicon-based'. 
*/
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
// CB - Use string interpolation here.

console.log(
    `<ROBOT> "Hi ${userName}, You'll never beat me!"`
);


//Choose number of rounds
// CB - Do you want the single quotes in all these messages? - Only in the Console - RS- thank you
var numberOfRounds = parseInt(prompt(`${userName}, now choose the number of rounds you want to play.`));

if(numberOfRounds < 5) {

  console.log(
    `<ROBOT> "${numberOfRounds}?!! Wow, weak!"`
    );

} else if(numberOfRounds >= 5 && numberOfRounds < 10) {

  console.log(
    `<ROBOT> "Ok, ${numberOfRounds} is not bad!"`
    );

} else {

  (alert(
    `${numberOfRounds}?! Wow, you're in for a mega challenge!!!`
    ));

}

console.log(`<ROBOT> "<initiating warm up procedure>"`);

// Choose the computer's selection range
var range = parseInt(prompt(`${userName}, choose the highest number the computer can choose from.`));

console.log(
    `<ROBOT> "Understood! Between 0 and ${range}. Choosing in 5,"`
    );

for (var i = 4; i > 0; i--) {
  console.log(i);
};

// Computer chooses a random number based on user selection

var roundNumber = 0;
do {
  // CB - This variable is only ever written to, it's value is never used. It can be removed. RS -Thank you

  if(roundNumber == numberOfRounds){
    break;
  }
  confirm(`Ready for Round ${roundNumber+1}`)
  var computerNumber = Math.floor(Math.random() * range);

  // Do you want to show the user the computers guess before they have guessed? - RS - For the purpose of testing, yes as it is a quick win if need be
  console.log(
    `<ROBOT> "You'll never guess it weak human! I chose ${computerNumber}"`
    );

    //  CB - As you have a fixed number of guesses a for(var guesses = 0; guesses < 5; guesses++) loop would be better here. That would make your previously declared guesses variable redundant.
 
  for (var guesses = 0; guesses < 5; guesses++) {

    if(guesses == 4) {

      losses++;
      roundNumber++;
      alert(`Too many guesses \n The score is ${wins} - ${losses}`);
      console.log(`<ROBOT> "YOU SUCK"`);
      break;

    } else {

      var userGuess = parseInt(prompt(`Ok ${userName}, time to enter guess number ${guesses +1}`));

      /*
      CB - The logic flow in here needs to be:
          - Check and then record the result of the guess.
          - If correct, record win and continue on to the next round. The number of guesses don't matter here.
          - If wrong, record loss and then check guess count.
              - If guesses less than allowed number, let the user have another guess.
              - If guesses greater than allowed number, move on to next round.
      */
        if(userGuess == computerNumber) {

            wins++;
            roundNumber++;
            alert(`Wow!! ${userGuess} is correct! \n The score is ${wins} - ${losses}`);
            console.log(`<ROBOT> "Uncomputing...user win...not recognised"`);
            break;

        } else {

          confirm(`Try again. You have ${4-guesses} guesses left.`);
          console.log(`<ROBOT> "${4-guesses} guesses left? You have no chance"`);

        };

    }
  }
  }while (wins + losses < numberOfRounds);


  // CB - You probably want to show the final score after all the rounds have been completed.
  
  if(wins == losses) {

    console.log("We are equal worthy foe!!!");
    alert(`The final score is ${wins} - ${losses}. YOU Drew`);

  } else if(wins > losses) {

    console.log("NOOOOOOOOOOOOOOOO my computer chips.....are......MELTING!!!!!");
    alert(`The final score is ${wins} - ${losses}. YOU WIN!!!!!!!!!!`);

  } else {

    console.log("MWUH HAHAHAHAHAHA YOU LOOOOOOSER!!! Your puny little organic processor is no match for my silicon processor built by beings with an organic proces.....wait?! I WIN, YOU SUCK!!!");
    alert(`The final score is ${wins} - ${losses}. Sorry, but you lost this game.`);

  };
