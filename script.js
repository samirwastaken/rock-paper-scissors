const choices = ["Rock", "Paper", "Scissors"];


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

    return computerChoice;

};


function getHumanChoice()
{
    let Choice = prompt("What will you choose? (0 = Rock, 1 = Paper, 2 = Scissors)");
    let humanChoice = choices[parseInt(Choice)];

    return humanChoice;
}

console.log(getComputerChoice());
let humanChoice = getHumanChoice();
console.log(humanChoice);