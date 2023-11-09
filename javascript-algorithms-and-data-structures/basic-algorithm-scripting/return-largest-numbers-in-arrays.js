function largestOfFour(arr) {
  let newArr = [];
  let largestNum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {largestNum = arr[i][j];}
      if (arr[i][j] > largestNum) {largestNum = arr[i][j];}
    }
    newArr.push(largestNum);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
