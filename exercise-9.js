function mySlice(arr, start = 0, end = arr.length) {
  if (start < 0) {
    start = Math.max(arr.length + start, 0);
  }
  if (end < 0) {
    end = Math.max(arr.length + end, 0);
  }
  const newArray = [];
  for (let i = start; i < end && i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(mySlice([1, 2, 3, 4, 5]));
console.log(mySlice([1, 2, 3, 4, 5], 0));
console.log(mySlice([1, 2, 3, 4, 5], 1));
console.log(mySlice([1, 2, 3, 4, 5], 2));
console.log(mySlice([1, 2, 3, 4, 5], 3));
console.log(mySlice([1, 2, 3, 4, 5], -1));
console.log(mySlice([1, 2, 3, 4, 5], 2, -1));
console.log(mySlice([1, 2, 3, 4, 5], -2));
console.log(mySlice([1, 2, 3, 4, 5], -10));

function myIndexOf(arr, item, from = 0) {
  let start = Math.max(from >= 0 ? from : arr.length + from, 0);
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return "Элемент отсутствует в массиве";
}
console.log(myIndexOf([1, 2, 3, 4, 5]));
console.log(myIndexOf([1, 2, 3, 4, 5], 0));
console.log(myIndexOf([1, 2, 3, 4, 5], 1));
console.log(myIndexOf([1, 2, 3, 4, 5], 2));
console.log(myIndexOf([1, 2, 3, 4, 5], 3));
console.log(myIndexOf([1, 2, 3, 4, 5], -1));
console.log(myIndexOf([1, 2, 3, 4, 5], 2, -1));
console.log(myIndexOf([1, 2, 3, 4, 5], -2));
console.log(myIndexOf([1, 2, 3, 4, 5], -10));

function myIncludes(arr, item, from = 0) {
  let start = Math.max(from >= 0 ? from : arr.length + from, 0);
  for (let i = start; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}
console.log(myIncludes([1, 2, 3, 4, 5]));
console.log(myIncludes([1, 2, 3, 4, 5], 0));
console.log(myIncludes([1, 2, 3, 4, 5], 1));
console.log(myIncludes([1, 2, 3, 4, 5], 2));
console.log(myIncludes([1, 2, 3, 4, 5], 3));
console.log(myIncludes([1, 2, 3, 4, 5], -1));
console.log(myIncludes([1, 2, 3, 4, 5], 2, -1));
console.log(myIncludes([1, 2, 3, 4, 5], -2));
console.log(myIncludes([1, 2, 3, 4, 5], -10));
