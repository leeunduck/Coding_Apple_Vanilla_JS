const score1 = Number(prompt("개론 점수를 입력하세요"));
const score2 = Number(prompt("민법 점수를 입력하세요"));

function testScore(number1, number2) {
  console.log(typeof score1, typeof score2);
  console.log(score1, score2);
  if (score1 < 0 || score1 > 100 || score2 < 0 || score2 > 100) {
    alert("점수가 아닙니다");
  } else if (score1 < 40 || score2 < 40) {
    console.log("불합격");
  } else if (score1 + score2 < 120) {
    console.log("불합격");
  } else {
    console.log("합격");
  }
}

testScore(score1, score2);
