moves = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    return moves[num][0].toUpperCase() + moves[num].slice(1);
}

function getPlayerChoice() {
    while (true) {
        move = prompt('Please enter rock, paper, or scissors: ').toLowerCase();
        if (moves.includes(move)) {
            return move[0].toUpperCase() + move.slice(1);
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let announce;

    if (playerSelection == computerSelection) {
        announce = 'It\'s a tie! ' + playerSelection + ' ties with ' + computerSelection;
    }
    else if (playerSelection == 'Rock') {
        switch (computerSelection) {
            case 'Paper':
                announce = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
                break;
            case 'Scissors':
                announce = 'You win! ' + playerSelection + ' beats ' + computerSelection;
                break;
        }
    }
    else if (playerSelection == 'Paper') {
        switch (computerSelection) {
            case 'Scissors':
                announce = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
                break;
            case 'Rock':
                announce = 'You win! ' + playerSelection + ' beats ' + computerSelection;
                break;
        }
    }
    else {
        switch (computerSelection) {
            case 'Rock':
                announce = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
                break;
            case 'Paper':
                announce = 'You win! ' + playerSelection + ' beats ' + computerSelection;
                break;
        }
    }
    return announce;
}

function playGame() {
    pass;
}