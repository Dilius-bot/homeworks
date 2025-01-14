const numberOfComputerOne = Math.floor(Math.random() * 100);
let numberOfComputerTwo = 50;
let start = 1;
let end = 100;

do {
  console.log(`Компьютер 2: Пробую число ${numberOfComputerTwo}`);
  if (numberOfComputerTwo < numberOfComputerOne) {
    console.log("Компьютер 1: Больше");
    start = numberOfComputerTwo;
    numberOfComputerTwo = Math.floor(Math.random() * (end - start) + start);
  } else if (numberOfComputerTwo > numberOfComputerOne) {
    console.log("Компьютер 1: Меньше");
    end = numberOfComputerTwo;
    numberOfComputerTwo = Math.floor(Math.random() * (end - start) + start);
  }
} while (numberOfComputerOne != numberOfComputerTwo);

console.log(`Компьютер 2: Пробую число ${numberOfComputerTwo}`);
console.log("Компьютер 1: Угадал!");
