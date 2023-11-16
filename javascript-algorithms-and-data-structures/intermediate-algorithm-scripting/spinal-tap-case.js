function spinalCase(str) {
  let newStr = str;
  newStr = newStr.replace(/[a-z]([A-Z])/g, (match, p1) => `${match[0]}-${p1.toLowerCase()}`);
  newStr = newStr.replace(/[A-Z]/g, match => match.toLowerCase())
  newStr = newStr.replace(/[ _]/g, "-");

  return newStr;
}

spinalCase('This Is Spinal Tap');
