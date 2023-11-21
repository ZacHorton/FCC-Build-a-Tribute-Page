function telephoneCheck(str) {
  let testRegex = /1 \d{3}-\d{3}-\d{4}|1 \(\d{3}\) \d{3}-\d{4}|\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}|1\(\d{3}\)\d{3}-\d{4}|1 \d{3} \d{3} \d{4}/g
  if (str.replace(testRegex, "true") === "true") {return true;}
  else {return false;}
}

telephoneCheck("555-555-5555");
