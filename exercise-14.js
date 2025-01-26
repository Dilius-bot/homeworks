function myFilter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, function (num) {
  // Не стрелочная функция, для примера
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, function (num) {
  // Не стрелочная функция, для примера
  return num > 3;
});

const greaterThanOne = myFilter(numbers, function (num) {
  // Не стрелочная функция, для примера
  return num > 1;
});

console.log(greaterThanThree); // [4, 5]
console.log(greaterThanOne); // [2, 3, 4, 5]
