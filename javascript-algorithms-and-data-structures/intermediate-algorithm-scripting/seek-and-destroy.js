function destroyer(arr, ...args) {
  var i = arr.length;
  while (i--) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        arr.splice(i, 1);
      }
    }
  }

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
