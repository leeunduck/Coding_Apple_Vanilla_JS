const buttons = document.querySelectorAll(".tab-button");
// const productsButton = buttons[0];
// const informationButton = buttons[1];
// const shippingButton = buttons[2];
const contents = document.querySelectorAll(".tab-content");
// const productsContent = contents[0];
// const informationContent = contents[1];
// const shippingContent = contents[2];

/* 상품설명 클릭시 오렌지색줄이 생기고 상품설명이 설명으로 나옴 */
// function productsHandle() {
//   buttons.forEach((button) => {
//     button.classList.remove("orange");
//   });
//   contents.forEach((content) => {
//     content.classList.remove("show");
//   });
//   productsButton.classList.add("orange");
//   productsContent.classList.add("show");
// }

/* 스펙설명 클릭시 오렌지색줄이 생기고 스펙설명이 설명으로 나옴 */
// function informationHandle() {
//   buttons.forEach((button) => {
//     button.classList.remove("orange");
//   });
//   contents.forEach((content) => {
//     content.classList.remove("show");
//   });
//   informationButton.classList.add("orange");
//   informationContent.classList.add("show");
// }

/* 배송정보 클릭시 오렌지색줄이 생기고 배송정보이 설명으로 나옴 */
// function shippingHandle() {
//   buttons.forEach((button) => {
//     button.classList.remove("orange");
//   });
//   contents.forEach((content) => {
//     content.classList.remove("show");
//   });
//   shippingButton.classList.add("orange");
//   shippingContent.classList.add("show");
// }

/* 위 3개의 기능을 for문으로 합치기 */
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    buttons.forEach((button) => {
      button.classList.remove("orange");
    });

    buttons[i].classList.add("orange");

    contents.forEach((content) => {
      content.classList.remove("show");
    });

    contents[i].classList.add("show");
  });
}

// productsButton.addEventListener("click", productsHandle);
// informationButton.addEventListener("click", informationHandle);
// shippingButton.addEventListener("click", shippingHandle);
