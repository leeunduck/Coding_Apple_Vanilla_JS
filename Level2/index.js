const quizBtn = document.querySelector("#send-answer");
const inputAnswer = document.querySelector("#answer");

let conut = 0;

function handleAnswer() {
  conut += 1;
  if (inputAnswer.value == 1335) {
    alert("성공");
  } else if (conut >= 3) {
    alert("멍청이");
  }
}

quizBtn.addEventListener("click", handleAnswer);
