function titleCase(str) {
  let newString = "";
  let capNext = true;
  for (let i = 0; i < str.length; i++) {
    if (capNext) {
      newString += str[i].toUpperCase();
      capNext = false;
    }
    else {
      newString += str[i].toLowerCase();
      if (str[i] === " ") {capNext = true;}
    }
  }
  return newString;
}

titleCase("I'm a little tea pot");
