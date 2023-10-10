// class Product {
//   constructor(name, price, description) {
//     this.name = name;
//     this.price = price;
//     this.description = description;
//   }

//   calculateDiscountedPrice() {
//     return this.price - this.price * (10 / 100);
//   }
// }

// const Obj = new Product("a", 20, "good");

// const price = Obj.calculateDiscountedPrice();
// console.log(price);

const mix = [23, 100, 25, 71, 55];
const sorted = mix.sort((a, b) => a - b);
console.log(sorted);
