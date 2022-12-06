document.addEventListener("DOMContentLoaded", () => {



    const buttons = document.querySelectorAll("button");
    const round = document.querySelector("div.round");
    const player = document.querySelector("div.pScore");
    const computer = document.querySelector("div.cScore");
    let pScore = 0;
    let cScore = 0;

    moves = ["rock", "paper", "scissors"];

    function _getComputerChoice() {
        num = Math.floor(Math.random() * 3);
        return moves[num][0].toUpperCase() + moves[num].slice(1);
    }

    function gameHasEnded() { // returns True if the game has ended
        
        if (pScore >= 5 || cScore >= 5) {
            return true;
        }
        return false;
    }

    function playRound(e) { // Plays a singe round of rock-paper-scissors
        let pChoice = e.target.textContent;
        let cChoice = _getComputerChoice();
        let display;

        if (pChoice == cChoice) {
            display = "Tie";
        }
        else if (pChoice == "Rock") {
            switch (cChoice) {
                case "Paper":
                    display = "Lose";
                    break;
                case "Scissors":
                    display = "Win";
                    break;
            }
        }
        else if (pChoice == "Paper") {
            switch (cChoice) {
                case "Scissors":
                    display = "Lose";
                    break;
                case "Rock":
                    display = "Win";
                    break;
            }
        }
        else {
            switch (cChoice) {
                case "Rock":
                    display = "Lose";
                    break;
                case "Paper":
                    display = "Win";
                    break;
            }
        }

        switch (display) {
            case "Win":
                pScore += 1;
                break;
            case "Lose":
                cScore += 1;
                break;
        }

        round.textContent = display;
        player.textContent = pScore;
        computer.textContent = cScore;
    }

    function playGame(e) {

        if (!gameHasEnded()) {
            playRound(e);
        }

        if (gameHasEnded()) { // need another if statement bc score is incremented in playRound function
            let results = document.createElement("div");
            results.classList.add("results");
            document.body.appendChild(results);
            if (pScore == 5) {
                results.textContent = "Player Win";
            }
            else {
                results.textContent = "Computer Win";
            }
        }
    }

    buttons.forEach(button => button.addEventListener("click", playGame));

});