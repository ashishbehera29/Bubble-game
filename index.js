var timer = 60;
var score = 0;
var hitrn = 0;


var highScore = localStorage.getItem("highScore") || 0;
document.querySelector("#highscoreval").textContent = highScore;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;

    // Update high score if needed
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        document.querySelector("#highscoreval").textContent = highScore;
    }
}


function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitnum").textContent = hitrn;
}


function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#cbottom").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
        } else {
            clearInterval(timerint);
            document.querySelector("#cbottom").innerHTML = `<h1>Game Over</h1>`;
        }
        document.querySelector("#timerval").textContent = timer;
    }, 1000);
}


document.querySelector("#cbottom").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
runTimer();
makeBubble();
