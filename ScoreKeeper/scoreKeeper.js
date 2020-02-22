var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("input");

var playingToDisplay = document.querySelector(".playerToText");

var p1Score = 0;
var p2Score = 0;

var winningScore = 5;
var winningScoreDisplay = document.querySelector("#winningScoreDis");

var gameOver = false;

var resetButton = document.querySelector("#reset");

p1Button.addEventListener("click", function()
{
    if(!gameOver){
        p1Score++;
        p1Display.textContent = p1Score;
        checkIfWinner();
    }
});
p2Button.addEventListener("click", function()
{
    if(!gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
        checkIfWinner();
    }
});
resetButton.addEventListener("click", function()
{
    reset();
});

numInput.addEventListener("change", function()
{
    winningScore = Number(this.value);
    winningScoreDisplay.textContent = winningScore;
    reset();
});

//set values on page load
document.addEventListener('DOMContentLoaded', function() {
    winningScoreDisplay.textContent = winningScore;
}, false);

function checkIfWinner()
{
    if(p1Score >= winningScore)
    {
        playingToDisplay.textContent = "Player One Wins";
        p1Display.classList.add("winner");
        gameOver = true;
    }
    else if(p2Score >= winningScore)
    {
        playingToDisplay.textContent = "Player Two Wins";
        p2Display.classList.add("winner");
        gameOver = true;
    }
};

function reset()
{
    gameOver = false;
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");

    playingToDisplay.innerHTML = "Playing to: <span id='winningScoreDis'>"+winningScore+"</span>";
};