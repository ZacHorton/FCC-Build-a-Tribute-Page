function translatePigLatin(str) {
    if (/^[^aeiou]/.test(str)) {
        return str.replace(/(^[^aeiou]+)(\w*)/, (match, p1, p2) => `${p2}${p1}ay`);
    } else {
        return str + "way";
    }
}

translatePigLatin("consonant");
