const choices = ["Rock", "Paper", "Scissors"];


// Random Number 
function getRandomNumber(max)
{
    return Math.floor(Math.random() * max);
}


// Computer's Choice
function getComputerChoice()
{
    let computerChoice = 0;

    let randomNumber = getRandomNumber(3);
    computerChoice = choices[randomNumber];

    return computerChoice;

}

