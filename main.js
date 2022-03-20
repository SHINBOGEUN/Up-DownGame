// 랜덤 번호지정
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면 정답!!
// 랜덤 번호가 < 유저 번호 Down !!
// 랜덤 번호가 > 유전 번호 Up!!
// Reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다 ( 더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범의 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력 하면, 알려준다. 기회를 깍지 않는다.


let computer = 0;
let userInput = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button")
let chance = 5;
let chanceArea = document.getElementById("chances");
let history = []
let area = document.getElementById("area");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {userInput.value=""});





function computerNum() {
    computer = Math.floor(Math.random() * 100 + 1);
    console.log("정답", computer);
}


function play() {
    let userValue = userInput.value

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent= "1~ 100 사이의 숫자를 입력하세요!!";
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent="다른 숫자를 입력하세요!!"
        return;
    }
    history.push(userValue);

    chance--;
    chanceArea.textContent = `남은 기회: ${chance}번`;

    if (userValue < computer) {
        resultArea.src="https://media2.giphy.com/media/lReVblhSRtxXtfK81w/giphy.gif?cid=ecf05e474xf7t47m8i3twprmc170cfztq6kzek33k1urix89&rid=giphy.gif&ct=g";
        area.textContent = "Up!!"

    }else if (userValue > computer) {
        resultArea.src = "https://media2.giphy.com/media/2wh569lThGXzRBSANr/giphy.gif?cid=ecf05e47vkr8smhtyfszrsj375cvjmlc2yqmqfqvmjw4ofem&rid=giphy.gif&ct=s";
        area.textContent = "Down!!"


    }else {
        resultArea.src = "https://media3.giphy.com/media/QBC5foQmcOkdq/giphy.gif?cid=ecf05e473oji8kmql4g2jyblwuvjagoq70bs7844av7o2di3&rid=giphy.gif&ct=g";
        area.textContent = "정답입니다."

        playButton.disabled = true;
    }
    if (chance < 1) {
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value ="";

    computerNum();
    playButton.disabled = false;
    resultArea.textContent = "****결과****";
    chance = 5;
    chanceArea.textContent = `남은 기회: ${chance}번`;
    resultArea.src = "https://media3.giphy.com/media/jNYUeDwoUoloEswJm8/giphy.gif?cid=ecf05e47ssb2na839kpa3jqc1z25elcq5hjd2c69oqt8zw63&rid=giphy.gif&ct=g";

}

computerNum();