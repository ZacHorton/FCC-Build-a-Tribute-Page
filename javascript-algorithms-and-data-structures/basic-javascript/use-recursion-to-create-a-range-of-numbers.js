function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  else {
    const countArray = rangeOfNumbers(startNum, endNum  - 1);
    countArray.push(endNum);
    return countArray;
  }
};
