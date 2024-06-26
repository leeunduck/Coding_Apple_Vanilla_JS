const slideContainer = document.querySelector(".slide-container");
const slideBox = document.querySelector(".slide-box");
const carouselBtn1 = document.querySelector(".btn1");
const carouselBtn2 = document.querySelector(".btn2");
const carouselBtn3 = document.querySelector(".btn3");
const carouselNext = document.querySelector(".next");
const carouselPrev = document.querySelector(".prev");

carouselBtn1.addEventListener("click", handleCarousel1);
carouselBtn2.addEventListener("click", handleCarousel2);
carouselBtn3.addEventListener("click", handleCarousel3);
carouselNext.addEventListener("click", handleCarouselNext);
carouselPrev.addEventListener("click", handleCarouselPrev);

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

let startCoordinate = 0;
let pressDown = false;
let pressNot = false;

slideBox.addEventListener("touchstart", function (e) {
  startCoordinate = e.touches[0].clientX;
  pressDown = true;
});

slideBox.addEventListener("touchmove", function (e) {
  if (pressDown == true) {
    slideContainer.style.transform = `translateX(${
      e.touches[0].clientX - startCoordinate
    }px)`;
  }
});

slideBox.addEventListener("touchend", function (e) {
  pressDown = false;

  if (e.changedTouches[0].clientX - startCoordinate < -100) {
    slideContainer.style.transform = `translateX(-100vw)`;
    slideContainer.style.transition = `all 0.5s`;
  } else {
    slideContainer.style.transform = `translateX(0vw)`;
    slideContainer.style.transition = `all 0.5s`;
  }
  setTimeout(() => {
    slideContainer.style.transition = "none";
  }, 500);
});
