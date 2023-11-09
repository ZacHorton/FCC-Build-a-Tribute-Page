function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i > -1; i--) {
    newString += str[i];
  }
  return newString;
}

reverseString("hello");
