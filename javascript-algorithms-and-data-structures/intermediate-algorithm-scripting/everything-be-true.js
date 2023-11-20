function truthCheck(collection, pre) {
  let loopCounter = 0;
  let propCounter = 0;
  for (let i = 0; i < collection.length; i++) {
    loopCounter += 1;
    if (collection[i][pre]) {propCounter += 1;}
  }
  if (loopCounter === propCounter) {return true;}
  else {return false;}
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
