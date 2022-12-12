const elevator = document.getElementById("elevator");
const elevator_btn = document.getElementById("elevator_btn");

const levelTwo_down = document.getElementById("levelTwo_down");
const levelOne_down = document.getElementById("levelOne_down");
const levelOne_up = document.getElementById("levelOne_up");
const levelZero_up = document.getElementById("levelZero_up");

var levelTwo_down_Clicked = false;
var levelOne_up_Clicked = false;
var levelOne_down_Clicked = false;
var levelZero_up_Clicked = false;

// ------------------- Handle Clicks -------------------
levelTwo_down.addEventListener("click", () => {
  levelTwo_down.style.color = "green";
  levelTwo_down_Clicked = true;
  clickAudio();
});

levelOne_up.addEventListener("click", () => {
  levelOne_up.style.color = "green";
  levelOne_up_Clicked = true;
  clickAudio();
});

levelOne_down.addEventListener("click", () => {
  levelOne_down.style.color = "green";
  levelOne_down_Clicked = true;
  clickAudio();
});

levelZero_up.addEventListener("click", () => {
  levelZero_up.style.color = "green";
  levelZero_up_Clicked = true;
  clickAudio();
});

// ------------------- Play Audio -------------------
const clickAudio = () => {
  var audio = new Audio("./sound/btnClick.mp3");
  audio.play();
};

const playAudio5s = () => {
  var audio = new Audio("./sound/BgSound.mp3");
  audio.play();
};

const playAudio10s = () => {
  var audio = new Audio("./sound/BgSound10s.mp3");
  audio.play();
};

// ------------------- Reset All -------------------
const resetAll = () => {
  levelTwo_down.style.color = "white";
  levelTwo_down_Clicked = false;
  levelOne_up.style.color = "white";
  levelOne_up_Clicked = false;
  levelOne_down.style.color = "white";
  levelOne_down_Clicked = false;
  levelZero_up.style.color = "white";
  levelZero_up_Clicked = false;
};

// ------------------- Handle Logic Main -------------------
elevator_btn.addEventListener("click", () => {
  var topValue = window.getComputedStyle(elevator).top;

  if (
    !(
      levelOne_down_Clicked ||
      levelOne_up_Clicked ||
      levelTwo_down_Clicked ||
      levelZero_up_Clicked
    )
  ) {
    alert("First Select Up/Down Elevator Button");
  }
  if (topValue == "30px") {
    if (levelTwo_down_Clicked && levelOne_down_Clicked) {
      elevator.style.top = "23.3rem";
      elevator.style.transition = "top 5s linear";
      playAudio5s();
    } else if (levelTwo_down_Clicked) {
      elevator.style.top = "43.3rem";
      elevator.style.transition = "top 10s linear";
      playAudio10s();
    }
  }

  if (topValue == "233px") {
    if (levelOne_down_Clicked) {
      elevator.style.top = "43.3rem";
      elevator.style.transition = "top 5s linear";
      playAudio5s();
    } else if (levelOne_up_Clicked) {
      elevator.style.top = "3rem";
      elevator.style.transition = "top 5s linear";
      playAudio5s();
    }
  }

  if (topValue == "433px") {
    if (levelZero_up_Clicked && levelOne_up_Clicked) {
      elevator.style.top = "23.3rem";
      elevator.style.transition = "top 5s linear";
      playAudio5s();
    } else if (levelZero_up_Clicked) {
      elevator.style.top = "3rem";
      elevator.style.transition = "top 10s linear";
      playAudio10s();
    }
  }
  resetAll();
});

console.log("Developed by Zeel Rabadiya");
