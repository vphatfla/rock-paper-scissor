let choice = ['rock','paper', 'scissor'];
let playerChoice ="";
let check_5_score = false;
function getID(clicked){
    game(clicked, computerPlay());
}
function computerPlay(){
    let ran = Math.floor(Math.random()*3);
    console.log(ran);
    return choice[ran];
}
function play(playerSelection, computerSelection){
    let result = "";
    if (playerSelection == computerSelection) result = "Tie, no win, no lose"
    else if ( ((playerSelection == "rock") && (computerSelection == "scissor")) 
    || ((playerSelection=="scissor") && (computerSelection=="paper"))
    || ((playerSelection=="paper") && (computerSelection=="rock"))){
        showScore('player-score-result');
        result = "Player won";}
    else {
        showScore('computer-score-result');
        result =  "Computer Won";
    }

    return result;
}
function game(playerChoice, computerChoice){
    showSelection(playerChoice, 'image-player');
    showSelection(computerChoice, 'image-computer');
    document.getElementById('result').innerHTML = play(playerChoice, computerChoice);
}


function showSelection(choice, displayID){
    document.getElementById(displayID).innerHTML ="";
    let x = document.createElement("img");
    switch (choice){
        case 'rock': 
            x.setAttribute("src", "image/rock-icon.png");
            break;
        case 'paper': 
            x.setAttribute("src", "image/paper-icon.png");
            break;
        case 'scissor': 
            x.setAttribute("src", "image/scissor.png");
            break;
    }
    x.setAttribute("width", "70px");
    x.setAttribute("height", "auto");
    x.setAttribute("alt", "The Pulpit Rock");
    document.getElementById(displayID).appendChild(x);      
}

function showScore(id){
    while (!check_5_score){
        let currentScore = parseInt(document.getElementById(id).innerHTML);
        let newScore = currentScore +1;
        console.log('first', newScore);
        if (newScore == 5) {
            check_5_score=true;
            if (id="player-score-result") document.getElementById("final-result").innerHTML = "OH, YOU WIN A COMPUTER?"
            else document.getElementById("final-result").innerHTML ="HAHA,YOU'RE BEAT UP BY A COMPUTER"
        }
        document.getElementById(id).innerHTML = "";
        document.getElementById(id).innerHTML = newScore.toString();
        break;
    }
}