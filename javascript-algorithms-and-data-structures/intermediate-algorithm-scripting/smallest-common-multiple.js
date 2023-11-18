function descendingOrder(arr) {
  let newArr = new Array;
  let sameNumber = new Boolean;

  if (arr[0] > arr[1]) {
    newArr.push(arr[0], arr[1]);
    sameNumber = false;
  }
  else if (arr[0] < arr[1]) {
    newArr.push(arr[1], arr[0]);
    sameNumber = false;
  }
  else {
    sameNumber = true;
  }

  return [newArr, sameNumber];
}

// Also called Greatest Common Factor or Highest Common Factor
function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  else {
    return greatestCommonDivisor(b, a % b);
  }
}

function leastCommonMultiple (a, b) {
  return a * b / greatestCommonDivisor(a, b);
}

function smallestCommons(arr) {
  let [newArr, sameNumber] = descendingOrder(arr);
  let largerNum = newArr[0];
  let smallerNum = newArr[1];

  if (sameNumber) {
    return arr[0];
  }
  else {
    let lcm = smallerNum;
    for (let i = smallerNum; i < largerNum; i++) {
      lcm = leastCommonMultiple(i + 1, lcm);
      }
    
    return lcm;
    }
  }

smallestCommons([1,5]);
