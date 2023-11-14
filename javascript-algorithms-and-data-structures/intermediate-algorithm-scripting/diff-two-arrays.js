function diffArray(arr1, arr2) {
  const newArr = [];
  const mergedArr = arr1.concat(arr2);
  
  for (let i = 0; i < mergedArr.length; i++) {
    if (arr1.includes(mergedArr[i]) === false) {
      newArr.push(mergedArr[i]);
    }
  }

  for (let j = 0; j < mergedArr.length; j++) {
    if (arr2.includes(mergedArr[j]) === false) {
      newArr.push(mergedArr[j]);
    } 
  }

  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
