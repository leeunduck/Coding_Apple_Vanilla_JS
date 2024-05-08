const buttons = document.querySelectorAll(".tab-button");
const productsButton = buttons[0];
const informationButton = buttons[1];
const shippingButton = buttons[2];

const contents = document.querySelectorAll(".tab-content");
const productsContent = contents[0];
const informationContent = contents[1];
const shippingContent = contents[2];

const tabList = document.querySelector(".list");

/* 상품설명 클릭시 오렌지색줄이 생기고 상품설명이 설명으로 나옴 */
// function productsHandle() {
//   informationButton.classList.remove("orange");
//   shippingButton.classList.remove("orange");
//   productsButton.classList.add("orange");
//   informationContent.classList.remove("show");
//   shippingContent.classList.remove("show");
//   productsContent.classList.add("show");

// buttons.forEach((button) => {
//   button.classList.remove("orange");
// });
// contents.forEach((content) => {
//   content.classList.remove("show");
// });
// productsButton.classList.add("orange");
// productsContent.classList.add("show");
// }

/* 스펙설명 클릭시 오렌지색줄이 생기고 스펙설명이 설명으로 나옴 */
// function informationHandle() {
//   productsButton.classList.remove("orange");
//   shippingButton.classList.remove("orange");
//   informationButton.classList.add("orange");
//   productsContent.classList.remove("show");
//   shippingContent.classList.remove("show");
//   informationContent.classList.add("show");

// buttons.forEach((button) => {
//   button.classList.remove("orange");
// });
// contents.forEach((content) => {
//   content.classList.remove("show");
// });
// informationButton.classList.add("orange");
// informationContent.classList.add("show");
// }

/* 배송정보 클릭시 오렌지색줄이 생기고 배송정보이 설명으로 나옴 */
// function shippingHandle() {
//   productsButton.classList.remove("orange");
//   informationButton.classList.remove("orange");
//   shippingButton.classList.add("orange");
//   productsContent.classList.remove("show");
//   informationContent.classList.remove("show");
//   shippingContent.classList.add("show");

// buttons.forEach((button) => {
//   button.classList.remove("orange");
// });
// contents.forEach((content) => {
//   content.classList.remove("show");
// });
// shippingButton.classList.add("orange");
// shippingContent.classList.add("show");
// }

/* 위 3개의 기능을 for문으로 합치기 */
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     handleTap(i);
//   });
// }

tabList.addEventListener("click", function (e) {
  handleTap(e.target.dataset.id);
});

function handleTap(i) {
  buttons.forEach((button) => {
    button.classList.remove("orange");
  });

  contents.forEach((content) => {
    content.classList.remove("show");
  });

  buttons[i].classList.add("orange");
  contents[i].classList.add("show");
}

// productsButton.addEventListener("click", productsHandle);
// informationButton.addEventListener("click", informationHandle);
// shippingButton.addEventListener("click", shippingHandle);
