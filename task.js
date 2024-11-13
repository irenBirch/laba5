function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

const country = prompt("Enter the country of delivery:");
const price = Number(prompt("Enter the product price:"));
const deliveryFee = Number(prompt("Enter the delivery fee:"));
console.log("Country: ", country);
console.log("Price: ", price);
console.log("delivery fee: ", deliveryFee);
console.log(getShippingMessage(country, price, deliveryFee));
