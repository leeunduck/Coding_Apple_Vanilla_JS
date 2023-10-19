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
const slideContainer = document.querySelector(".slide-container");
const carouselBtn1 = document.querySelector(".btn1");
const carouselBtn2 = document.querySelector(".btn2");
const carouselBtn3 = document.querySelector(".btn3");
const carouselNext = document.querySelector(".next");
const carouselPrev = document.querySelector(".prev");
const scrollChangeFont = document.querySelector(".navbar-brand");
const scrollAlert = document.querySelector(".lorem");

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

//캐러쉘 1번
let nowPhoto = 0;
function handleCarousel1() {
  nowPhoto = 0;
  slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
}

//캐러쉘 2번
function handleCarousel2() {
  nowPhoto = 1;
  slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
}

//캐러쉘 3번
function handleCarousel3() {
  nowPhoto = 2;
  slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
}

//캐러쉘 Next버튼
function handleCarouselNext() {
  if (nowPhoto == 0) {
    nowPhoto += 1;
    slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
  } else if (nowPhoto == 1) {
    nowPhoto += 1;
    slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
  }
}

//캐러쉘 Prev버튼
function handleCarouselPrev() {
  if (nowPhoto == 2) {
    nowPhoto -= 1;
    slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
  } else if (nowPhoto == 1) {
    nowPhoto -= 1;
    slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
  }
}

//퀴즈1 (함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수)
function changeMs(minutes, seconds) {
  const result = (minutes * 60 + seconds) * 1000;
  return result;
}
console.log(changeMs(1, 30));
console.log(changeMs(2, 10));

//퀴즈2 가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수
function sale(money, bool) {
  let result = money * 0.9;
  if (bool == true) {
    result = result - 1.5;
  }
  return result;
}
console.log(sale(70, false));
console.log(sale(10, true));

//스크롤바를 100px 내리면 로고 폰트사이즈를 작게 만들어오십시오. 반대로 100px 미만으로 내리면 로고 폰트사이즈를 크게 만들어옵시다.
function handleScroll1() {
  if (window.scrollY >= 100) {
    scrollChangeFont.style.fontSize = "20px";
  } else if (window.scrollY <= 100) {
    scrollChangeFont.style.fontSize = "30px";
  }
}

function handleScroll2() {
  const scroll = scrollAlert.scrollTop;
  const height = scrollAlert.scrollHeight;
  if (scroll + 100 == height) {
    alert("끝입니다");
  }
}

titleCloseBtn.addEventListener("click", handleCloseTitle);
navToggle.addEventListener("click", handleListGroup);
modalLoginBtn.addEventListener("click", handleModalLogin);
modalClose.addEventListener("click", handleCloseModal);
submitBtn.addEventListener("click", checkInput);
darkBtn.addEventListener("click", handleBgDark);
carouselBtn1.addEventListener("click", handleCarousel1);
carouselBtn2.addEventListener("click", handleCarousel2);
carouselBtn3.addEventListener("click", handleCarousel3);
carouselNext.addEventListener("click", handleCarouselNext);
carouselPrev.addEventListener("click", handleCarouselPrev);
window.addEventListener("scroll", handleScroll1);
scrollAlert.addEventListener("scroll", handleScroll2);
