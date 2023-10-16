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
const darkBtn = document.querySelector(".badge");
const gifts = document.querySelector(".alert-danger");
const timeSecond = gifts.querySelector("#time-second");

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

// id & password 공백체크, password 6자리 미만 체크 + 정규식표현(이메일형식 체크, 영어 대문자 체크)
function checkInput(event) {
  const eMail = modalIdInput.value;
  const eMailPassWord = modalPassWordInput.value;
  if (eMail == "") {
    event.preventDefault();
    alert("아이디를 입력하세요");
  } else if (/\S+@\S+\.\S+/.test(eMail) == false) {
    event.preventDefault();
    alert("이메일 형식이 아닙니다");
  } else if (eMailPassWord == "") {
    event.preventDefault();
    alert("비밀번호를 입력하세요");
  } else if (eMailPassWord.length <= 6) {
    event.preventDefault();
    alert("비밀번호 7자리 이상 입력하세요");
  } else if (/[A-Z]/.test(eMailPassWord) == false) {
    event.preventDefault();
    alert("비밀번호에 영어 대문자를 넣으세요");
  }
}

// 버튼 누르면 배경화면 다크모드
let darkCount = 1;
function handleBgDark() {
  darkCount += 1;
  if (darkCount % 2 == 0) {
    darkBtn.classList.remove("bg-dark");
    darkBtn.classList.add("bg-light");
    darkBtn.style.color = "black";
  } else {
    darkBtn.classList.remove("bg-light");
    darkBtn.classList.add("bg-dark");
    darkBtn.style.color = "white";
  }
}

// 5초 뒤 div 사라짐 (setTimeout 함수)
// setTimeout(function second_5() {
//   gifts.style.display = "none";
// }, 5000);

// 1초마다 5라는 문자를 1씩 감소 0이 되면 <div>를 안보이게 처리
let second = 5;
setInterval(function textChange() {
  second -= 1;
  if (second >= 0) {
    timeSecond.innerText = second;
  } else {
    gifts.style.display = "none";
  }
}, 1000);

titleCloseBtn.addEventListener("click", handleCloseTitle);
navToggle.addEventListener("click", handleListGroup);
modalLoginBtn.addEventListener("click", handleModalLogin);
modalClose.addEventListener("click", handleCloseModal);
submitBtn.addEventListener("click", checkInput);
darkBtn.addEventListener("click", handleBgDark);
