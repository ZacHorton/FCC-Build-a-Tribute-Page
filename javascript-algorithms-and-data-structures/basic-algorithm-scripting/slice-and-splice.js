function frankenSplice(arr1, arr2, n) {

  let newArray = [];
  let arr2Length = arr2.length;

  if (arr2Length === 0) {return [...arr1];}
  for (let i = 0; i < arr2Length; i++) {
    if (i === n) {newArray.push(...arr1);}
    newArray.push(arr2[i]);
  }

  return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
