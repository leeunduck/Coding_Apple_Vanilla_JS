const title = document.querySelector("#alert-box");
const titleOpenBtn = document.querySelector("#alert-open-btn");
const titleCloseBtn = document.querySelector("#alert-close-btn");
const idBtn = document.querySelector("#alert-id-btn");
const passWordBtn = document.querySelector("#alert-password-btn");
const navToggle = document.querySelector(".navbar-toggler");
const listGroup = document.querySelector(".list-group");
const modalLoginBtn = document.querySelector("#modal-login");
const blackBackGround = document.querySelector(".black-bg");
const modalClose = document.querySelector("#close");
const submitBtn = document.querySelector(".btn-primary");
const modalIdInput = document.querySelector("#modal-id");
const modalPassWordInput = document.querySelector("#modal-password");

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

// Modal Login 열기
function handleModalLogin() {
  blackBackGround.classList.add("show-modal");
}

// Modal Login 닫기
function handleCloseModal() {
  blackBackGround.classList.remove("show-modal");
}

// id & password 공백체크, password 6자리 미만 체크
function checkInput(event) {
  if (modalIdInput.value == "") {
    event.preventDefault();
    alert("아이디를 입력하세요");
  } else if (modalPassWordInput.value == "") {
    event.preventDefault();
    alert("비밀번호를 입력하세요");
  } else if (modalPassWordInput.value.length <= 6) {
    event.preventDefault();
    alert("비밀번호 7자리 이상 입력하세요");
  }
}

titleCloseBtn.addEventListener("click", handleCloseTitle);
navToggle.addEventListener("click", handleListGroup);
modalLoginBtn.addEventListener("click", handleModalLogin);
modalClose.addEventListener("click", handleCloseModal);
submitBtn.addEventListener("click", checkInput);
