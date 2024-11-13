function createArray() {
  const arrayLength = parseInt(prompt("Введіть кількість елементів у масиві:"));
  const array = [];

  for (let i = 0; i < arrayLength; i++) {
    array.push(parseInt(prompt(`Введіть значення елемента з індексом ${i}:`)));
  }

  return array;
}

function sumEvenIndexElements(array) {
  return array.reduce((sum, value, index) => {
    return index % 2 === 0 ? sum + value : sum;
  }, 0);
}

function findMaxElement(array) {
  let maxElement = array[0];
  let maxIndex = 0;

  array.forEach((value, index) => {
    if (value > maxElement) {
      maxElement = value;
      maxIndex = index;
    }
  });

  return { maxElement, maxIndex };
}

function findMinOddIndexElement(array) {
  let minElement = null;
  let minIndex = -1;

  array.forEach((value, index) => {
    if (index % 2 !== 0) {
      if (minElement === null || value < minElement) {
        minElement = value;
        minIndex = index;
      }
    }
  });

  return { minElement, minIndex };
}

function sortArray(array) {
  return array.slice().sort((a, b) => a - b);
}

function main() {
  const array = createArray();

  console.log("Вхідний масив:", array);

  const sumEven = sumEvenIndexElements(array);
  console.log("Сума елементів з парними індексами:", sumEven);

  const { maxElement, maxIndex } = findMaxElement(array);
  console.log("Максимальний елемент:", maxElement, "його індекс:", maxIndex);

  const { minElement, minIndex } = findMinOddIndexElement(array);
  console.log(
    "Мінімальний елемент серед елементів з непарними індексами:",
    minElement,
    "його індекс:",
    minIndex
  );

  const sortedArray = sortArray(array);
  console.log("Відсортований масив:", sortedArray);
}

main();
