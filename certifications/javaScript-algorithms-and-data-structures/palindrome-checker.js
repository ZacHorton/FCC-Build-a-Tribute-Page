/*
Palindrome Checker
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
*/

function palindrome(str) {
    let lowerCaseString = str.toLowerCase()
    let removeSpecialChars = lowerCaseString.replace(/[\W_]/g, "");
    let splitArr  = removeSpecialChars.split("");
    let reverseArr = new Array;
  
    for (let i = splitArr.length - 1; i >= 0; i--) {
      reverseArr.push(splitArr[i]);
    }
  
    if (splitArr.toString() === reverseArr.toString()) {
      return true;
      } else {
        return false;
        }
  }
  
  palindrome("eye");