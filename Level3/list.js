const card = document.querySelector(".row");
const btnUnder = document.querySelector("#filter");
const plusBtn = document.querySelector("#more");
let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

function appendProducts(products) {
  products.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    } else {
      return -1;
    }
  });

  card.innerHTML = "";

  products.forEach((product) => {
    let template = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${product.title}</h5>
        <p>가격 : ${product.price}</p>
      </div>`;
    card.insertAdjacentHTML("beforeend", template);
  });
}

appendProducts(products);

let clickCount = 0;

plusBtn.addEventListener("click", () => {
  clickCount++;
  if (clickCount == 1) {
    getGoods1();
  } else if (clickCount == 2) {
    getGoods2();
    plusBtn.style.display = "none";
  }
});

function getGoods1() {
  fetch(`https://codingapple1.github.io/js/more1.json`)
    .then((response) => response.json())
    .then((data) => {
      appendProducts(data);
    });
}

function getGoods2() {
  fetch(`https://codingapple1.github.io/js/more2.json`)
    .then((response) => response.json())
    .then((data) => {
      appendProducts(data);
    });
}

btnUnder.addEventListener("click", () => {
  let newProduct = products.filter(function (a) {
    return a.price <= 60000;
  });

  card.innerHTML = "";

  newProduct.forEach((newProduct) => {
    let template = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${newProduct.title}</h5>
        <p>가격 : ${newProduct.price}</p>
      </div>`;
    card.insertAdjacentHTML("beforeend", template);
  });
});
