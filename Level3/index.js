// const product = document.querySelector(".product");
// const price = document.querySelector(".price");

// let car2 = { name: "소나타", price: [50000, 3000, 4000] };

// product.innerHTML = car2.name;
// price.innerHTML = car2.price[0];

const formSelect = document.querySelectorAll(".form-select");
let shirts = [95, 100, 105];
let pants = [28, 30, 32];

formSelect[0].addEventListener("input", handleSelect);

function handleSelect(e) {
  let value = e.currentTarget.value;

  if (value == "셔츠") {
    formSelect[1].classList.remove("form-hide");
    formSelect[1].innerHTML = "";
    shirts.forEach(function (size) {
      let optionTemplate = `<option>${size}</option>`;
      formSelect[1].insertAdjacentHTML("beforeend", optionTemplate);
    });
  } else if (value == "바지") {
    formSelect[1].classList.remove("form-hide");
    formSelect[1].innerHTML = "";
    pants.forEach(function (size) {
      let optionTemplate = `<option>${size}</option>`;
      formSelect[1].insertAdjacentHTML("beforeend", optionTemplate);
    });
  } else {
    formSelect[1].classList.add("form-hide");
  }
}
