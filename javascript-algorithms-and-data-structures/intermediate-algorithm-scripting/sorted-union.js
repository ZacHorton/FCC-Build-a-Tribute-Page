function uniteUnique(...arr) {
    let newArr = new Array;
    for (let i in arr) {
        for (let j in arr[i]) {
            if (newArr.indexOf(arr[i][j]) === -1) {
                newArr.push(arr[i][j]);
            }
        }
    } 

    return newArr;
  }
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
