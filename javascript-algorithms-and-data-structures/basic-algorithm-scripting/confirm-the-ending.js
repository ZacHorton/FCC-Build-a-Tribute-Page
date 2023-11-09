function confirmEnding(str, target) {
  let letter = "";
  for (let i = str.length - target.length; i < str.length; i++) {
    letter += str[i];
  }
  if (letter === target) {return true;}
  else {return false;}
}

confirmEnding("Bastian", "n");
