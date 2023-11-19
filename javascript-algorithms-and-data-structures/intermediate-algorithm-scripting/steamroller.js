function steamrollArray(arr) {
  let newArr = new Array;

  function helper(arr) {
    for (let value of arr) {
      if (value instanceof Array) {
        helper(value);
      }
      else {
        newArr.push(value);
      }
    }
  }

  helper(arr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
