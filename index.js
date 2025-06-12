let compScore = 0;
let humanScore = 0;
let round = 1;

const getComputerChoice = () => {
    const rand = Math.random();
    if(rand == 0) return "rock";
    else if(rand > 0 && rand <= 0.5) return "paper";
    return "scissors";
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
}

const winner = () => {
    document.getElementById("round").innerHTML = `Round ${round}`;
    getChoices();
    round++;
}