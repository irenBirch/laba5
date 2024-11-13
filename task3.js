function filterArray(numbers, value) {
  const filteredArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      filteredArray.push(numbers[i]);
    }
  }
  return filteredArray;
}

function makeArray(firstArray, secondArray, maxLength) {
  const combinedArray = [...firstArray, ...secondArray];
  if (combinedArray.length > maxLength) {
    return combinedArray.slice(0, maxLength);
  }
  return combinedArray;
}

const numbers = prompt("Введіть числа через кому для масиву numbers:")
  .split(",")
  .map(Number);
const value = Number(prompt("Введіть значення value:"));
const filteredResult = filterArray(numbers, value);
console.log("Масив:", numbers);
console.log("Значення:", value);
console.log("Результат фільтрації:", filteredResult);

const firstArray = prompt("Введіть числа через кому для firstArray:")
  .split(",")
  .map(Number);
const secondArray = prompt("Введіть числа через кому для secondArray:")
  .split(",")
  .map(Number);
const maxLength = Number(prompt("Введіть значення maxLength:"));
const combinedResult = makeArray(firstArray, secondArray, maxLength);
console.log("Масив 1:", firstArray);
console.log("Масив 2:", secondArray);
console.log("Максимальна довжина:", maxLength);
console.log("Результат об'єднання:", combinedResult);
