// const cardBox = document.querySelectorAll(".card-box");

// window.addEventListener("scroll", function () {
//   let height = window.scrollY;
//   console.log(height);

//   let y = (-1 / 500) * height + 115 / 50;
//   // 650~1150까지 스크롤바를 내리면,
//   // 모든카드가 opacity 1~0으로 서서히변경해야함
//   cardBox.forEach((a, i) => {
//     cardBox[i].style.opacity = y;
//   });

//   // 650~1150까지 스크롤바를 내리면,
//   // 모든카드가 transform 1 ~ 0.9으로 서서히변경해야함
//   let z = (-1 / 5000) * 높이 + 565 / 500;
//   cardBox.forEach((a, i) => {
//     cardBox[i].style.transform = `scale(${z})`;
//   });
// });

document.querySelector("#quiz").addEventListener("click", function (e) {
  switch (e.target.innerHTML) {
    case "와이프":
      alert("와이프를 좋아하시네요");
      break;
    case "부모님":
      alert("효자네요");
      break;
    case "키우던 개":
      alert("역시 사람보단 동물이 더 낫죠");
      break;
  }
});
