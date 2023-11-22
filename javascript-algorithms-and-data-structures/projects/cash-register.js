function deepCopyArray(arr) {
  let copyArr = new Array;
  for (let i = 0; i < arr.length; i++) {
    copyArr.push([arr[i][0], arr[i][1]])
  }
  return copyArr;
}

function pushMoreData(arr) {
  const newArr = [...arr];
  let howMany = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === "PENNY") {
      howMany = parseFloat((newArr[i][1] / .01).toFixed(2));
      newArr[i].push(.01, howMany, 0);
    }
    else if (newArr[i][0] === "NICKEL") {
      howMany = parseFloat((newArr[i][1] / .05).toFixed(2));
      newArr[i].push(.05, howMany, 0);
    }
    else if (newArr[i][0] === "DIME") {
      howMany = parseFloat((newArr[i][1] / .1).toFixed(2));
      newArr[i].push(.1, howMany, 0);
    }
    else if (newArr[i][0] === "QUARTER") {
      howMany = parseFloat((newArr[i][1] / .25).toFixed(2));
      newArr[i].push(.25, howMany, 0);
    }
    else if (newArr[i][0] === "ONE") {
      howMany = parseFloat((newArr[i][1] / 1).toFixed(2));
      newArr[i].push(1, howMany, 0);
    }
    else if (newArr[i][0] === "FIVE") {
      howMany = parseFloat((newArr[i][1] / 5).toFixed(2));
      newArr[i].push(5, howMany, 0);
    }
    else if (newArr[i][0] === "TEN") {
      howMany = parseFloat((newArr[i][1] / 10).toFixed(2));
      newArr[i].push(10, howMany, 0);
    }
    else if (newArr[i][0] === "TWENTY") {
      howMany = parseFloat((newArr[i][1] / 20).toFixed(2));
      newArr[i].push(20, howMany, 0);
    }
    else if (newArr[i][0] === "ONE HUNDRED") {
      howMany = parseFloat((newArr[i][1] / 100).toFixed(2));
      newArr[i].push(100, howMany, 0);
    }
  }

  return newArr;
}

function checkCashRegister(price, cash, cid) {
  let copyArr = deepCopyArray(cid);
  let differenceOwed = parseFloat((cash - price).toFixed(2));
  let newArr = pushMoreData(cid);
  let changeDueArr = new Array;
  let leftover = 0;
  for (let i = newArr.length - 1; i >= 0; i--) {
    let currency = newArr[i][0];
    let totalValue = newArr[i][1];
    let singleValue = newArr[i][2];
    let howMany = newArr[i][3];
    let change = newArr[i][4];
    while (differenceOwed >= singleValue && howMany > 0) {
        totalValue = parseFloat((totalValue - singleValue).toFixed(2)); 
        howMany--; 
        differenceOwed = parseFloat((differenceOwed - singleValue).toFixed(2));
        change = parseFloat((change + singleValue).toFixed(2));
        if (differenceOwed < singleValue || howMany === 0) {
          changeDueArr.push([currency, change]);
          leftover = parseFloat((leftover + totalValue).toFixed(2));
        }
      }
    }

    if (differenceOwed > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    else if (differenceOwed === 0 && leftover === 0) {
      return {status: "CLOSED", change: copyArr}
    }
    else {
      return {status: "OPEN", change: changeDueArr}
    }
  }

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
