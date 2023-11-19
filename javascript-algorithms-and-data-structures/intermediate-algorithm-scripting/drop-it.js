function dropElements(arr, func) {
  for (let i = 0; i < arr.length;) {
    if (func(arr[i])) {return arr;}
    else {arr.shift();}
    if (arr.length === 0) {return [];}
  }
}

dropElements([1, 2, 3], function(n) {return n < 3; });
