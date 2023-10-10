function Product(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
}

Product.prototype.calculateDiscountedPrice = function () {
  return this.price - (this.price * 10) / 100;
};

const product1 = new Product("Product1", 200, "Good ");

const discountedPrice = product1.calculateDiscountedPrice();

console.log(discountedPrice);
