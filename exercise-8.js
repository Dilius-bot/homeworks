const numberOfComputerOne = Math.floor(Math.random() * 100);
let numberOfComputerTwo;

do {
  numberOfComputerTwo = Math.floor(Math.random() * 100);
  console.log(`Компьютер 2: Пробую число ${numberOfComputerTwo}`);
  if (numberOfComputerTwo < numberOfComputerOne) {
    console.log("Компьютер 1: Больше");
  } else if (numberOfComputerTwo > numberOfComputerOne) {
    console.log("Компьютер 1: Меньше");
  }
} while (numberOfComputerOne != numberOfComputerTwo);

console.log("Компьютер 1: Угадал!");
