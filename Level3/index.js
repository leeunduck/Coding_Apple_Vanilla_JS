const product = document.querySelector(".product");
const price = document.querySelector(".price");

let car2 = { name: "소나타", price: [50000, 3000, 4000] };

product.innerHTML = car2.name;
price.innerHTML = car2.price[0];
