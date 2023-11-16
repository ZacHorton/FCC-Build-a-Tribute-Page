function pairElement(str) {
    let newArr = [];
    for (let i in str) {
        if (str[i] === "A") {newArr.push(["A", "T"]);}
        else if (str[i] === "T") {newArr.push(["T", "A"])}
        else if (str[i] === "C") {newArr.push(["C", "G"])}
        else if (str[i] === "G") {newArr.push(["G", "C"])}
    }
    return newArr;
  }

pairElement("GCG");
