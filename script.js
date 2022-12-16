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


alert(`Hello and welcome to 2022's most loved game. \n You are about to face-off with the most feared opponent that ever existed; that's right, one of my in-laws. Oh, sorry, dad jokes accepted! You will face off with a multi-cored, silcon-based, Vulcan inspired AI. Are you ready? \n Here are the instructions. The AI will pick a number at random and you have to guess it. You guess it; you win. You guess wrong; you lose the round. Simple! You can choose how hard to make it by increasing or reducing the range the AI can choose from. A lower range increases your odds of guessing right, but increasing the range will drastically reduce your chances of winning. \n Rules: \n 1. You must enter name \n 2. You must enter a number of rounds \n 3. You must set the range your opponent can choose from. \n Want to give it a go?`);


//Enter username
var userName = prompt("Please enter your name");
    console.log("Hi " + userName + ", You'll never beat me!");
    /*if(userName === null) {
        break;
    }*/

    //Choose number of rounds
var numberOfRounds = parseInt(prompt(`'${userName}, now choose the number of rounds you want to play.'`));


    if(numberOfRounds < 5) {
            console.log(`'${numberOfRounds}?!! Wow, weak!'`);

        } else if(numberOfRounds >= 5 && numberOfRounds < 10) {
            console.log(`'Ok, ${numberOfRounds} is not bad!'`);

        } else {
            (alert(`'${numberOfRounds}?! Wow, you're in for a mega challenge!!!'`));
        }

        console.log("'<initiating warm up procedure>'");

// Choose the computer's selection range
var range = parseInt(prompt(`${userName}, choose the highest number the computer can choose from.`));

        console.log(`'Understood! Between 0 and ${range}. Choosing in 5,'`);
            for (var i = 4; i > 0; i--) {
                console.log(i);
            };

// Computer chooses a random number based on user selection
var guesses = 0;
do {
var roundNumber = 1;

var computerNumber = Math.floor(Math.random() * range);

    console.log(`You'll never guess it weak human! I chose ${computerNumber}`);

    do {
        var userGuess = parseInt(prompt(`Ok ${userName}, time to enter guess number ${guesses +1}`));

            if(userGuess != computerNumber) {
                guesses++;
                confirm(`Try again`);
                continue;

            } else if (guesses === 4) {
                losses++;
                roundNumber++;
                alert(`Too many guesses \n The score is ${wins} - ${losses}`);
            };

            wins++; 
            alert(`Wow!! ${userGuess} is correct! \n The score is ${wins} - ${losses}`);
            roundNumber++;
            guesses= 0;
            break;
           

    } while (true);




console.log(`The final score is ${wins} - ${losses}`);

} while (wins + losses < numberOfRounds);