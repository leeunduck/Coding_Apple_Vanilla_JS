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
    let cart = JSON.parse(localStorage.getItem("cart")) || {};

    if (cart[title]) {
      // 이미 장바구니에 있는 경우, 개수를 증가시킴
      cart[title]++;
    } else {
      // 장바구니에 없는 경우, 새로 추가하고 개수를 1로 설정
      cart[title] = 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  });
});

function displayCartItems() {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  productCard.innerHTML = ""; // 기존 상품 목록을 비움

  for (let title in cart) {
    let template = `<div class="col-sm-4">
        <h5>${title}</h5>
        <p>수량: ${cart[title]}</p>
      </div>`;
    productCard.insertAdjacentHTML("beforeend", template);
  }
}

// 페이지 로드 시 장바구니 상품 표시
displayCartItems();
