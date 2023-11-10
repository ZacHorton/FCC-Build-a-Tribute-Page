function chunkArrayInGroups(arr, size) {
  let array2D = [];
  let nestedArr = [];
  let counter = 0;
  for (let i in arr) {
    counter += 1;
    nestedArr.push(arr[i])
    if (counter === size) {
      array2D.push(nestedArr);
      nestedArr = [];
      counter = 0;
    }
  }
  if (nestedArr.length > 0) {array2D.push(nestedArr);}
  return(array2D);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
