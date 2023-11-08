let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
