function getSumOfNumbers(object) {
  let sum = 0;
  for (let key in object) {
    if (typeof object[key] === "number") {
      sum += object[key];
    }
  }

  return sum;
}

console.log(
  getSumOfNumbers({ name: "Vasya", friends: 5, likes: 19, projects: 7 })
);

function getSortedKeysNames(object) {
  const keysNames = [];
  for (let key in object) {
    if (typeof object[key] === "number") {
      keysNames.push(key);
    }
  }

  keysNames.sort((a, b) => object[b] - object[a]);

  return keysNames;
}

console.log(
  getSortedKeysNames({ name: "Vasya", friends: 5, likes: 19, projects: 7 })
);
