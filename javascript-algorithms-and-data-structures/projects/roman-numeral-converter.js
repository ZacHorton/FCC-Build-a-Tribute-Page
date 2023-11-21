function convertToRoman(num) {
  let romanNumerals = "";
  function helper(num) {
    if (num - 1000 >= 0) {
      num -= 1000;
      romanNumerals += "M";
      helper(num);
    }
    else if (num - 900 >= 0) {
      num -= 900;
      romanNumerals += "CM";
      helper(num);
    }
    else if (num - 500 >= 0) {
      num -= 500;
      romanNumerals += "D";
      helper(num);
    }
    else if (num - 400 >= 0) {
      num -= 400;
      romanNumerals += "CD";
      helper(num);
    }
    else if (num - 100 >= 0) {
      num -= 100;
      romanNumerals += "C";
      helper(num);
    }
    else if (num - 90 >= 0) {
      num -= 90;
      romanNumerals += "XC";
      helper(num);
    }
    else if (num - 50 >= 0) {
      num -= 50;
      romanNumerals += "L";
      helper(num);
    }
    else if (num - 40 >= 0) {
      num -= 40;
      romanNumerals += "XL";
      helper(num);
    }
    else if (num - 10 >= 0) {
      num -= 10;
      romanNumerals += "X";
      helper(num);
    }
    else if (num - 9 >= 0) {
      num -= 9;
      romanNumerals += "IX";
      helper(num);
    }
    else if (num - 9 >= 0) {
      num -= 9;
      romanNumerals += "IX";
      helper(num);
    }
    else if (num - 5 >= 0) {
      num -= 5;
      romanNumerals += "V";
      helper(num);
    }
    else if (num - 4 >= 0) {
      num -= 4;
      romanNumerals += "IV";
      helper(num);
    }
    else if (num - 1 >= 0) {
      num -= 1;
      romanNumerals += "I";
      helper(num);
      }       
    }

    helper(num);
    return romanNumerals;
  }


convertToRoman(36);
