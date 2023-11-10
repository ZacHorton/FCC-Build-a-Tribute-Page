function bouncer(arr) {
  let newArray = [];
  for (let i in arr) {
    if (Boolean(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
