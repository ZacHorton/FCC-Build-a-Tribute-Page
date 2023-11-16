function myReplace(str, before, after) {
    let beforeCharCapitalized = Boolean;
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {beforeCharCapitalized = true;}
    else {beforeCharCapitalized = false;}

    let newAfter = String;
    if (beforeCharCapitalized) {newAfter = after[0].toUpperCase() + after.slice(1, after.length);}
    else {newAfter = after[0].toLowerCase() + after.slice(1, after.length);}

    return str.replace(before, newAfter);
  }

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
