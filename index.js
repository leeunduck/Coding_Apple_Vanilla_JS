const title = document.querySelector("#alert-box");
const titleOpenBtn = document.querySelector("#alert-open-btn");
const titleCloseBtn = document.querySelector("#alert-close-btn");
const idBtn = document.querySelector("#alert-id-btn");
const passWordBtn = document.querySelector("#alert-password-btn");

function handleOpenTitle(text) {
  title.style.display = "block";
  title.innerText = text;
  titleCloseBtn.style.display = "inline";
}

function handleCloseTitle() {
  title.style.display = "none";
  titleCloseBtn.style.display = "none";
}

function handleIdBox(text) {
  title.style.display = "block";
  title.innerText = text;
  titleCloseBtn.style.display = "inline";
}

function handlePassWordBox(text) {
  title.style.display = "block";
  title.innerText = text;
  titleCloseBtn.style.display = "inline";
}
titleCloseBtn.addEventListener("click", handleCloseTitle);
