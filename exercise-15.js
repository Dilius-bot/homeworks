// Логгер
function createLogger() {
  let messages = [];
  return {
    log: (message) => messages.push(message),
    getLogs: () => console.log(messages),
  };
}

const logger = createLogger();
const logger2 = createLogger();
logger2.log("Norm");
logger2.getLogs();
logger.log("Kak dela?");
logger.log("Kak dela?2");
logger.getLogs();

// Генератор случайных чисел из диапазона
function createRandomGenerator(min, max) {
  let randomDigit;
  return () =>
    Math.floor((randomDigit = Math.random() * (max - min + 1) + min));
}

const randomNum = createRandomGenerator(2, 5);
console.log(randomNum());
console.log(randomNum());
console.log(randomNum());
