const card = document.querySelector(".row");
const productCard = document.querySelector(".products");
let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

products.forEach((arr, i) => {
  let template = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p><button class="buy">구매</button>
    </div>`;

  card.insertAdjacentHTML("beforeend", template);
});

const buyBtn = document.querySelectorAll(".buy");
buyBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let title =
      e.target.previousElementSibling.previousElementSibling.textContent;
    if (localStorage.getItem("cart") != null) {
      let tookOut = JSON.parse(localStorage.cart);
      tookOut.push(title);
      localStorage.setItem("cart", JSON.stringify(tookOut));
    } else {
      localStorage.setItem("cart", JSON.stringify([title]));
    }
  });
});

let productOut = localStorage.getItem("cart");
productOut = JSON.parse(productOut);

productOut.forEach((arr, i) => {
  let template = `<div class="col-sm-4">
      <h5>${productOut[i]}</h5>
    </div>`;

  productCard.insertAdjacentHTML("beforeend", template);
});
