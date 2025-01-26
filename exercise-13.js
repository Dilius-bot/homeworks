function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

const multiplyOperation = function (num1, num2) {
  return num1 * num2;
};

const divisionOperation = function (num1, num2) {
  return num1 / num2;
};

const addOperation = function (num1, num2) {
  return num1 + num2;
};

const subtractionOperation = function (num1, num2) {
  return num1 - num2;
};

const selectedOperation = "multiply";
const selectedOperationDivision = "division";
const selectedOperationAdd = "add";
const selectedOperationSubtraction = "subtraction";

const operations = {
  multiply: multiplyOperation,
  division: divisionOperation,
  add: addOperation,
  subtraction: subtractionOperation,
};

console.log(calculate(6, 3, operations[selectedOperation])); // 18
console.log(calculate(6, 3, operations[selectedOperationDivision])); // 2
console.log(calculate(6, 3, operations[selectedOperationAdd])); // 9
console.log(calculate(6, 3, operations[selectedOperationSubtraction])); // 3
