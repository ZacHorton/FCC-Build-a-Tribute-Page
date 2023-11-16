function convertHTML(str) {
    let newStr = str.replace(/&/g, "&amp;");
    newStr = newStr.replace(/</g, "&lt;");
    newStr = newStr.replace(/>/g, "&gt;");
    newStr = newStr.replace(/"/g, "&quot;");
    newStr = newStr.replace(/'/g, "&apos;");
    return newStr;
  }

convertHTML("Dolce & Gabbana");
