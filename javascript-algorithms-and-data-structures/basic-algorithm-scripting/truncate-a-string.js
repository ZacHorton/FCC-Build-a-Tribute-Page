function truncateString(str, num) {
  let strLength = str.length;
  let newString = "";
  if (strLength > num) {
    for (let i = 0; i < num; i++) {
      newString += str[i];
    }
    newString += "...";
    console.log(newString);
    return newString;
  } else return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
