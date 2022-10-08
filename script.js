moves = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    return moves[num];
}

function getPlayerChoice() {
    while (true) {
        move = prompt('Please enter rock, paper, or scissors: ').toLowerCase();
        if (moves.includes(move)) {
            return move;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    pass;
}

function playGame() {
    pass;
}