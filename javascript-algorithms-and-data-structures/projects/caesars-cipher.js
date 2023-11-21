function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decodedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "!" || str[i] === "?" || str[i] === ".") {
      decodedStr += str[i];
    }
    else {
      decodedStr += alphabet[(alphabet.indexOf(str[i]) + 13) % alphabet.length];
    }
  }
  
  return decodedStr;
}

rot13("SERR PBQR PNZC");
