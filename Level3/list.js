const cardTitle = document.querySelectorAll(".title");
const cardPrice = document.querySelectorAll(".price");

let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

cardTitle[0].innerHTML = products[0].title;
cardTitle[1].innerHTML = products[1].title;
cardTitle[2].innerHTML = products[2].title;

cardPrice[0].innerHTML = "가격 : " + products[0].price;
cardPrice[1].innerHTML = "가격 : " + products[1].price;
cardPrice[2].innerHTML = "가격 : " + products[2].price;
