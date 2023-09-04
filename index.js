const title = document.querySelector("#alert-box");
const titleOpenBtn = document.querySelector("#alert-open-btn");
const titleCloseBtn = document.querySelector("#alert-close-btn");

function handleOpenTitle() {
  title.style.display = "block";
  titleCloseBtn.style.display = "inline";
}

function handleCloseTitle() {
  title.style.display = "none";
  titleCloseBtn.style.display = "none";
}

titleOpenBtn.addEventListener("click", handleOpenTitle);
titleCloseBtn.addEventListener("click", handleCloseTitle);
