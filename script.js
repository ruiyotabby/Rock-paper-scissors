let lost = 0;
let win = 0;
let tie = 0;
let wasted = 0;

function getComputerChoice(){
    let randNum = Math.floor(Math.random() * (3)) + 1;

    if (randNum === 1) return 'ROCK';
    else if (randNum === 2) return 'PAPER';
    else return 'SCISSOR';
}

function getUserChoice(){
    return prompt('Rock, paper or scissor?').toUpperCase();
}



function playRound(computerChoice, userChoice){

    const score = document.querySelector('.score');
    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');
    const tie = document.querySelector('.tie'); // same name causes bug. fix it

    if (userChoice === 'ROCK'){
        if(computerChoice === 'ROCK'){
            tie += 1;
            tie.textContent =  `Tie: ${tie}`;
            score.appendChildBefore(tie, computer);
        } else if(computerChoice === 'PAPER'){
            lost += 1;
            computer.textContent = `Computer: ${lost}`;
            score.appendChild(computer);
        } else {
            win += 1;
            player.textContent = `Player: ${win}`;
            score.appendChildBefore(player, computer);
        }
    } else if (userChoice === 'PAPER'){
        if(computerChoice === 'PAPER'){
            tie += 1;
            tie.textContent = `Tie: ${tie}`;
            score.appendChildBefore(tie, computer);
        } else if(computerChoice === 'SCISSOR'){
            lost += 1;
            computer.textContent = `Computer: ${lost}`;
            score.appendChild(computer);
        } else {
            win += 1;
            player.textContent = `Player: ${win}`;
            score.appendChildBefore(player, computer);
        }
    } else if (userChoice === 'SCISSOR'){
        if(computerChoice === 'SCISSOR'){
            tie += 1;
            tie.textContent = `Tie: ${tie}`;
            score.appendChildBefore(tie, computer);
         } else if(computerChoice === 'Rock'){
            lost += 1;
            computer.textContent = `Computer: ${lost}`;
            score.appendChild(player);
        } else {
            win += 1;
            player.textContent = `Player: ${win}`;
            score.appendChildBefore(player, computer);
        }
    } else {
        wasted += 1;
        return 'Please try again';
    }
}

function checkWinner(){

    if(win > tie && win > lost){
        return console.log('You win');
    } else if (lost > tie && lost > tie){
        return console.log('computer won');
    } else {
        return console.log('There was a tie');
    }

}

function game(){
    
    playRound(getComputerChoice(), getUserChoice());

    console.log(`win: ${win}\ntie: ${tie}\nlost: ${lost}\nwasted: ${wasted}`);

    checkWinner();

    lost = 0;
    tie = 0;
    win = 0;
    wasted = 0;

}

let rock = document.querySelector('.rock');
rock.addEventListener("click", () => {
    playRound(getComputerChoice(), 'ROCK');
});

let paper = document.querySelector('.paper');
paper.addEventListener('click',() =>  playRound(getComputerChoice(), 'PAPER'));

let scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => playRound(getComputerChoice(), 'SCISSOR'));