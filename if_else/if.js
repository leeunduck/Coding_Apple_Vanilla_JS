function game369(number) {
  console.log(number);
  console.log(typeof number);
  if (number % 3 == 0) {
    console.log("박수");
  } else if (
    number.slice(-1) == 3 ||
    number.slice(-1) == 6 ||
    number.slice(-1) == 9
  ) {
    console.log(typeof number);
    console.log(number);
    console.log("박수");
  } else {
    console.log("통과");
  }
}

game369(prompt("숫자"));
