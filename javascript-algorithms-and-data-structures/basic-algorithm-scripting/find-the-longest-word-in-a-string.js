function findLongestWordLength(str) {
  let counter = 0;
  let largest = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " " ) {counter += 1;}
    if (str[i] === " " || i === str.length - 1) {
      if (counter > largest) {largest = counter;}
      counter = 0;
    }
  }
  console.log(largest);
  return largest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
