let  getFinalPrice = function (price, tax = 0.7) {
    return price + price * tax;

};

console.log(getFinalPrice(500));
console.log(getFinalPrice(500, 0.2));