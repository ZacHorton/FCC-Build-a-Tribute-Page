/*
Telephone Number Validator
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
*/

function telephoneCheck(str) {
    let testRegex = /1 \d{3}-\d{3}-\d{4}|1 \(\d{3}\) \d{3}-\d{4}|\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}|1\(\d{3}\)\d{3}-\d{4}|1 \d{3} \d{3} \d{4}/g
    if (str.replace(testRegex, "true") === "true") {return true;}
    else {return false;}
  }
  
  telephoneCheck("555-555-5555");