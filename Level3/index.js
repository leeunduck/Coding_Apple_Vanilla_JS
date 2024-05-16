// const product = document.querySelector(".product");
// const price = document.querySelector(".price");

// let car2 = { name: "소나타", price: [50000, 3000, 4000] };

// product.innerHTML = car2.name;
// price.innerHTML = car2.price[0];

const formSelect = document.querySelectorAll(".form-select");

formSelect[0].addEventListener("input", handleSelect);

function handleSelect(e) {
  let value = e.currentTarget.value;

  if (value == "셔츠") {
    formSelect[1].classList.remove("form-hide");
    formSelect[1].innerHTML = "";
    let template = "<option>95</option><option>100</option>";
    formSelect[1].insertAdjacentHTML("beforeend", template);
  } else if (value == "바지") {
    formSelect[1].classList.remove("form-hide");
    formSelect[1].innerHTML = "";
    let template = "<option>28</option><option>30</option>";
    formSelect[1].insertAdjacentHTML("beforeend", template);
  } else {
    formSelect[1].classList.add("form-hide");
  }
}
