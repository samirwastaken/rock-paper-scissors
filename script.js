// the choices for the game
const choices = ["Rock", "Paper", "Scissors"];

// player score variables
let humanScore = 0;
let computerScore = 0;



// a better way of getting the random number
function getRandomNumber(max)
{
    return Math.floor(Math.random() * max);
};


// Computer's Choice
function getComputerChoice()
{
    let computerChoice = 0;

    let randomNumber = getRandomNumber(3);
    computerChoice = choices[randomNumber];

    return randomNumber;

};


function getHumanChoice()
{
    let Choice = prompt("What will you choose? (0 = Rock, 1 = Paper, 2 = Scissors)");    
    return Choice;
}

function playRound(playerChoice, compChoice)
{
    console.log("You chose: " + choices[playerChoice]);
    console.log("Computer chose: " + choices[compChoice]);


    if (playerChoice == 0 && compChoice == 1)
    {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (playerChoice == 1 && compChoice == 2)
    {
        console.log("You lose! Scissors beats Paper."); 
        computerScore++;
    }
    else if (playerChoice == 2 && compChoice == 0)
    {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    else if (playerChoice == compChoice)
    {
        console.log("It is a tie!");
    }
    else
    {
        console.log("You Win!");
        humanScore++;
    }

}


// the game

function playGame()
{
    let counter = 0;

    while (counter <= 5)
    {
        let playerChoice = getHumanChoice();
        let compChoice = getComputerChoice();

        playRound(playerChoice, compChoice);

        counter++;
    }


}

// function check who won

function whoWon()
{
    if (humanScore < computerScore)
    {
        console.log("You lose the game.");
        console.log("Player Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    else if (computerScore < humanScore)
    {
        console.log("You Won the game!");
        console.log("Player Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}


// Game is activated
playGame();
whoWon();