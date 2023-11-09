function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    let arrInput = [...arr]
    newArr.push(arrInput);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
