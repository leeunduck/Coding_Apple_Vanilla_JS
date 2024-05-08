// const notification = document.querySelector("#alert-box");
// const notificationBtn = document.querySelector("#alert-notification-btn");
// const closeBtn = document.querySelector("#alert-close-btn");
// const idBtn = document.querySelector("#alert-id-btn");
// const passwordBtn = document.querySelector("#alert-password-btn");
// const navbarBtn = document.querySelector(".navbar-toggler");
// const subMenu = document.querySelector(".list-group");
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".black-bg");
const modalCloseBtn = document.querySelector("#close");
const formIdInput = document.querySelector("#modal-id");
const formPassWordInput = document.querySelector("#modal-password");
const submitBtn = document.querySelector(".btn-primary");
// const darkmodeBtn = document.querySelector(".badge");
// const slideContainer = document.querySelector(".slide-container");
// const carouselBtn1 = document.querySelector(".btn1");
// const carouselBtn2 = document.querySelector(".btn2");
// const carouselBtn3 = document.querySelector(".btn3");
// const carouselNext = document.querySelector(".next");
// const carouselPrev = document.querySelector(".prev");
// const scrollNavFont = document.querySelector(".navbar-brand");
// const scrollAlert = document.querySelector(".lorem");

// notificationBtn.addEventListener("click", showNotification);
// closeBtn.addEventListener("click", closeNotification);
// navbarBtn.addEventListener("click", showSubmenu);
// navbarBtn.addEventListener("click", closeSubmenu);
modalBtn.addEventListener("click", showModal);
modal.addEventListener("click", closeModal);
submitBtn.addEventListener("click", checkInput);
// darkmodeBtn.addEventListener("click", changeMode);
// carouselBtn1.addEventListener("click", handleCarousel1);
// carouselBtn2.addEventListener("click", handleCarousel2);
// carouselBtn3.addEventListener("click", handleCarousel3);
// carouselNext.addEventListener("click", handleCarouselNext);
// carouselPrev.addEventListener("click", handleCarouselPrev);
// window.addEventListener("scroll", handleScroll1);
// scrollAlert.addEventListener("scroll", handleScroll2);

// function showNotification() {
//   notification.style.display = "block";
// }

// function closeNotification() {
//   notification.style.display = "none";
// }

// function handleIdBox(text) {
//   notification.style.display = "block";
//   notification.innerText = text;
// }

// function handlePassWordBox(text) {
//   notification.style.display = "block";
//   notification.innerText = text;
// }

// function toggleSubmenu() {
//   subMenu.classList.toggle("show");
// }

function showModal() {
  modal.classList.add("show");
}

function closeModal(e) {
  if (e.target == modal) {
    modal.classList.remove("show");
  }
}

function checkInput(event) {
  if (formIdInput.value == "") {
    event.preventDefault();
    alert("아이디를 입력하세요");
  } else if (/\S+@\S+\.\S+/.test(formIdInput.value) == false) {
    event.preventDefault();
    alert("이메일 형식이 아닙니다");
  } else if (formPassWordInput.value == "") {
    event.preventDefault();
    alert("비밀번호를 입력하세요");
  } else if (formPassWordInput.value.length <= 6) {
    event.preventDefault();
    alert("비밀번호 7자리 이상 입력하세요");
  } else if (/[A-Z]/.test(formPassWordInput.value) == false) {
    event.preventDefault();
    alert("비밀번호에 영어 대문자를 넣으세요");
  }
}

// let darkCount = 1;
// function changeMode() {
//   darkCount += 1;
//   if (darkCount % 2 == 0) {
//     darkmodeBtn.classList.remove("bg-dark");
//     darkmodeBtn.classList.add("bg-light");
//     darkmodeBtn.style.color = "black";
//   } else {
//     darkmodeBtn.classList.remove("bg-light");
//     darkmodeBtn.classList.add("bg-dark");
//     darkmodeBtn.style.color = "white";
//   }
// }

//캐러쉘 1번
// let nowPhoto = 0;
// function handleCarousel1() {
//   nowPhoto = 0;
//   slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
// }

//캐러쉘 2번
// function handleCarousel2() {
//   nowPhoto = 1;
//   slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
// }

//캐러쉘 3번
// function handleCarousel3() {
//   nowPhoto = 2;
//   slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
// }

//캐러쉘 Next버튼
// function handleCarouselNext() {
//   if (nowPhoto == 0) {
//     nowPhoto += 1;
//     slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
//   } else if (nowPhoto == 1) {
//     nowPhoto += 1;
//     slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
//   }
// }

//캐러쉘 Prev버튼
// function handleCarouselPrev() {
//   if (nowPhoto == 2) {
//     nowPhoto -= 1;
//     slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
//   } else if (nowPhoto == 1) {
//     nowPhoto -= 1;
//     slideContainer.style.transform = `translateX(-${nowPhoto}00vw)`;
//   }
// }

// function handleScroll1() {
//   if (window.scrollY >= 100) {
//     scrollNavFont.style.fontSize = "20px";
//   } else if (window.scrollY <= 100) {
//     scrollNavFont.style.fontSize = "30px";
//   }
// }

// function handleScroll2() {
//   const scroll = scrollAlert.scrollTop;
//   const height = scrollAlert.scrollHeight;
//   const clientHeight = scrollAlert.clientHeight;
//   if (scroll + clientHeight == height) {
//     alert("끝입니다");
//   }
// }
