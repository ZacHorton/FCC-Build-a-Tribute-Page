function nonMutatingSort(arr) {
  let newArr = arr.slice(0, arr.length);
  let sortedArr = newArr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
  return sortedArr;
  }

function sumAll(arr) {
  let sortedArr = nonMutatingSort(arr);
  let sum = 0
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {sum += i;}
  return sum;
}

sumAll([1, 4]);
