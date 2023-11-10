function getIndexToIns(arr, num) {
  let sortedArr = arr.sort(function(a, b) {return a - b;});
  for (let i in sortedArr) {
    if (sortedArr[i] >= num) {return Number(i);}
  }
  return sortedArr.length;
}

getIndexToIns([40, 60], 50);
