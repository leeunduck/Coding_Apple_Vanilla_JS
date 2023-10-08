const title = document.querySelector("#alert-box");
const titleOpenBtn = document.querySelector("#alert-open-btn");
const titleCloseBtn = document.querySelector("#alert-close-btn");
const idBtn = document.querySelector("#alert-id-btn");
const passWordBtn = document.querySelector("#alert-password-btn");
const navToggle = document.querySelector(".navbar-toggler");
const listGroup = document.querySelector(".list-group");

// 알림창 박스 열기
function handleOpenTitle(text) {
  title.style.display = "block";
  title.innerText = text;
  titleCloseBtn.style.display = "inline";
}

// 알림창 박스 닫기
function handleCloseTitle() {
  title.style.display = "none";
  titleCloseBtn.style.display = "none";
}

// 아이디 박스 열기 & 닫기
function handleIdBox(text) {
  title.style.display = "block";
  title.innerText = text;
  titleCloseBtn.style.display = "inline";
}

// 비밀번호 박스 열기 & 닫기
function handlePassWordBox(text) {
  title.style.display = "block";
  title.innerText = text;
  titleCloseBtn.style.display = "inline";
}

// Navbar 리스트 열기 & 닫기
function handleListGroup() {
  listGroup.classList.toggle("show");
}

titleCloseBtn.addEventListener("click", handleCloseTitle);
navToggle.addEventListener("click", handleListGroup);
