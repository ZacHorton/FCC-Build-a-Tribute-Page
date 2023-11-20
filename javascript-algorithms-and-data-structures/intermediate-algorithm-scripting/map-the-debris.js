function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = new Array;

  for (let i = 0; i < arr.length; i++) {
    let a = Math.pow(earthRadius + arr[i].avgAlt, 3);
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(a / GM)); 
    newArr.push({name: arr[i].name, orbitalPeriod: orbitalPeriod})
  }

  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
