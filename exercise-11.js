// 1
function capitalize(str) {
  if (str.length === 0) return str;
  if (typeof str != "string") return "Введены некорректные данные";

  return str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
}

console.log(capitalize(123));
console.log(capitalize(""));
console.log(capitalize("привет"));
console.log(capitalize("ПрИВеТ"));

// 2
function trimString(str, strMaxLength) {
  if (str.length <= strMaxLength) return str;

  let newString = str.slice(0, strMaxLength);

  const lastPunctuationMarkIndex = Math.max(
    newString.lastIndexOf(","),
    newString.lastIndexOf("."),
    newString.lastIndexOf("!"),
    newString.lastIndexOf("?"),
    newString.lastIndexOf(":"),
    newString.lastIndexOf(";"),
    newString.lastIndexOf(" ")
  );

  if (lastPunctuationMarkIndex !== -1) {
    newString = newString.slice(0, lastPunctuationMarkIndex);
  }

  newString = newString.trim();

  if (
    newString[newString.length - 1] === "," ||
    newString[newString.length - 1] === "." ||
    newString[newString.length - 1] === "!" ||
    newString[newString.length - 1] === "?" ||
    newString[newString.length - 1] === ":" ||
    newString[newString.length - 1] === ";"
  ) {
    newString = newString.slice(0, -1);
  }

  return newString + "...";
}

console.log(trimString("Приветкакделачтонового", 10));
console.log(trimString("Привет, как дела? Что нового", 10));
console.log(trimString("Привет, как дела? Что нового", 15));
console.log(trimString("Привет: как дела? Что нового", 10));
console.log(trimString("Привет, как дела? Что нового", 3));

// 3
function isSubstring(str1, str2) {
  if (str1.includes(str2) || str2.includes(str1)) {
    return true;
  }

  return false;
}

console.log(isSubstring("Привет", "Привет, как дела?"));
console.log(isSubstring("Привет, как дела?", "Привет"));
console.log(isSubstring("Привет", "Приветствие"));
console.log(isSubstring("Привет", "Пока"));
