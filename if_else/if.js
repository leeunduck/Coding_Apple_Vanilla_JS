function game369() {
  const userNumber = prompt("숫자를 입력하세요");
  if (userNumber % 9 == 0) {
    console.log("박수 박수");
  } else if (userNumber % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}

game369();
