function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingIndex = alphabet.indexOf(str[0]);
    for (let i = 0; i < str.length; i++) 
    {
      if (str[i] != alphabet[startingIndex + i]) {
        return alphabet[startingIndex+ i];
      }
    }
    return undefined;
  }

fearNotLetter("abce");
