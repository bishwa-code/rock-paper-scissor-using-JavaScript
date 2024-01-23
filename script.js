let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".option");
const winnerMsg = document.querySelector("#win-msg");
const userPoint = document.querySelector("#user-score");
const compPoint = document.querySelector("#comp-score");
const urChoice = document.getElementById("ur-choice");
const comChoice = document.getElementById("comp-choice");


const computerChoice = () => {
    const listOfOptions = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return listOfOptions[randomIndex];
}

function drawGame () {
    winnerMsg.innerText = "Game Draw🥴";
    winnerMsg.style.backgroundColor = "#cfced0";
    urChoice.style.color = "#cfced0";
    comChoice.style.color = "#cfced0";
}

function findWinner (computerWin) {
    if (computerWin) {
        compScore++;
        compPoint.innerText = compScore;
        winnerMsg.innerText = "Computer Won Game😂";
        winnerMsg.style.backgroundColor = "#ffde25";
        urChoice.style.color = "#fc036c";
        comChoice.style.color = "#ffde25";
    } else {
        userScore++;
        userPoint.innerText = userScore;
        winnerMsg.style.backgroundColor = "#14e6a7";
        winnerMsg.innerText = "You Won Game😍";
        urChoice.style.color = "#14e6a7";
        comChoice.style.color = "#fc036c";
    }
}

const playGame = (userChoice) => {
    // generate user choice
    urChoice.innerText = userChoice;
    // generate computer choice
    let compChoice = computerChoice();
    comChoice.innerText = compChoice;

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let computerWin = true;
        if (compChoice === "rock") {
            // paper scissor
            computerWin = (userChoice === "paper") ? false : true;
            
        } else if (compChoice === "paper") {
            // rock scissor
            computerWin = (userChoice === "scissor") ? false : true;
            
        } else {
            //comp choice = scissor
            // user choioce = rock , papper
            computerWin = (userChoice === "rock") ? false : true;

        }
        findWinner(computerWin);
    }
};
  
options.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    })
});
