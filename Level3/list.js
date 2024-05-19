const card = document.querySelector(".row");
const plusBtn = document.querySelector("#more");
let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

products.forEach((a, i) => {
  let template = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>`;

  card.insertAdjacentHTML("beforeend", template);
});

plusBtn.addEventListener("click", getGoods);

function getGoods() {
  fetch(`https://codingapple1.github.io/js/more1.json`)
    .then((response) => response.json())
    .then(function (data) {
      data.forEach((a, i) => {
        let template = `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${data[i].title}</h5>
            <p>가격 : ${data[i].price}</p>
          </div>`;

        card.insertAdjacentHTML("beforeend", template);
      });
    });
}
