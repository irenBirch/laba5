function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

const quantity = parseInt(
  prompt("Enter the quantity of droids you want to order:"),
  10
);
const pricePerDroid = parseFloat(prompt("Enter the price per droid:"), 10);
const customerCredits = parseFloat(prompt("Enter your current credits:"), 10);

const result = makeTransaction(quantity, pricePerDroid, customerCredits);
console.log("кількість замовлених дроїдів: ", quantity);
console.log("ціна одного дроїда: ", pricePerDroid);
console.log("сума коштів на рахунку клієнта: ", customerCredits);
console.log(result);
