function repeatStringNumTimes(str, num) {
  let newString = ""
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      newString += str;
    }
    return newString;
  }
  else {return newString;}
}

repeatStringNumTimes("abc", 3);
