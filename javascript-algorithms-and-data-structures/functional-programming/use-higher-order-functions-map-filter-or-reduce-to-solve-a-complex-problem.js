const squareList = arr => {
const filterdArr = arr.filter(filter => filter > 0 && filter === parseInt(filter, 10));
  arr = filterdArr.map(data => data ** 2);
  return arr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
