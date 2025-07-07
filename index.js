let compScore = 0;
let humanScore = 0;
let round = 1;

const options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    const rand = Math.random();
    const index = Math.floor(rand * 3);
    return options[index];
}

const getHumanChoice = () => {
    const choice  = document.getElementById('humanChoice').value;
    return choice;
}

const getChoices = () => {
    const compChoice = getComputerChoice();
    const personChoice = getHumanChoice();

    if(compChoice == "rock"){
        if(personChoice == 'paper') humanScore++;
        else if(personChoice == "scissors")  compScore++;
    } else if (compChoice == 'paper') {
        if(personChoice == "rock") compScore++;
        else if(personChoice == "scissors") humanScore++;
    } else if(compChoice == 'scissors'){
        if(personChoice == 'rock') humanScore++;
        else if(personChoice == 'paper') compScore++;
    }

    document.getElementById("humanScore").innerHTML = `Human Score: ${humanScore}`;
    document.getElementById("compScore").innerHTML = `Computer Score: ${compScore}`;
    document.getElementById("round").textContent = `Round ${++round}`;
    document.getElementById('humanChoice').value = '';
}

const winner = () => {
    getChoices();
}