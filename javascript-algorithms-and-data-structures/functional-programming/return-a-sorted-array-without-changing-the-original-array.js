const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArr = arr.slice(0, arr.length);
  let sortedArr = newArr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
  return sortedArr;
  }

nonMutatingSort(globalArray);
