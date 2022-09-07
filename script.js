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


const score = document.querySelector('.score');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const same = document.querySelector('.tie');

let winner = document.querySelector('.winner');
let centre = document.querySelector('.centre');
let gameBtns = document.querySelector('.game-btns');

let restartGame = function() {
    lost = 0;
    tie = 0;
    win = 0;
    
    same.textContent =`Tie: ${tie}`;
    score.insertBefore(same, computer);

    player.textContent = `Player: ${win}`;
    score.insertBefore(player, same);

    computer.textContent = `Computer: ${lost}`;
    score.appendChild(computer);

    winner.textContent = '';
    centre.insertBefore(winner, gameBtns);
}

function playRound(computerChoice, userChoice){

    if (userChoice === 'ROCK'){
        if(computerChoice === 'ROCK'){
            tie += 1;
            same.textContent =  `Tie: ${tie}`;
            score.insertBefore(same, computer);
        } else if(computerChoice === 'PAPER'){
            lost += 1;
            computer.textContent = `Computer: ${lost}`;
            score.appendChild(computer);
            checkWinner();
            console.log(lost);
        } else {
            win += 1;
            player.textContent = `Player: ${win}`;
            score.insertBefore(player, same);
            checkWinner();
            console.log(win);
        }
    } else if (userChoice === 'PAPER'){
        if(computerChoice === 'PAPER'){
            tie += 1;
            same.textContent = `Tie: ${tie}`;
            score.insertBefore(same, computer);
        } else if(computerChoice === 'SCISSOR'){
            lost += 1;
            computer.textContent = `Computer: ${lost}`;
            score.appendChild(computer);
            checkWinner();
        } else {
            win += 1;
            player.textContent = `Player: ${win}`;
            score.insertBefore(player, same);
            checkWinner();
        }
    } else if (userChoice === 'SCISSOR'){
        if(computerChoice === 'SCISSOR'){
            tie += 1;
            same.textContent = `Tie: ${tie}`;
            score.insertBefore(same, computer);
         } else if(computerChoice === 'ROCK'){
            lost += 1;
            computer.textContent = `Computer: ${lost}`;
            score.appendChild(computer);
            checkWinner();
        } else {
            win += 1;
            player.textContent = `Player: ${win}`;
            score.insertBefore(player, same);
            checkWinner();
        }
    } else {
        wasted += 1;
        return 'Please try again';
    }
}

function checkWinner(){

    if(win === 5){
        winner.textContent = 'You Win';
        centre.insertBefore(winner, gameBtns);
    } else if(lost === 5){
        winner.textContent = 'Computer Wins';
        centre.insertBefore(winner, gameBtns);
    }

}

let rock = document.querySelector('.rock');
rock.addEventListener("click", () => playRound(getComputerChoice(), 'ROCK'));

let paper = document.querySelector('.paper');
paper.addEventListener('click',() =>  playRound(getComputerChoice(), 'PAPER'));

let scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => playRound(getComputerChoice(), 'SCISSOR'));

let restart = document.querySelector('#restart');
restart.addEventListener('click', () => restartGame());