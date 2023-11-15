function whatIsInAName(collection, source) {
  let newArr = [];
  let sourceNumOfProps = Object.keys(source).length;
  let truthCounter = 0; 

  for (let i = 0; i < collection.length; i++) {
    let collectionItem = collection[i];
    let collectionItemNumOfProps = Object.keys(collectionItem).length;
    
    if (collectionItemNumOfProps >= sourceNumOfProps) {
      for (let [key, value] of Object.entries(source)) {
        if (collectionItem.hasOwnProperty(key) && collectionItem[key] === value) {truthCounter += 1;}
        if (truthCounter === sourceNumOfProps) {newArr.push(collectionItem);}
        }
        truthCounter = 0;
      }
    }

    return newArr;
  }

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
