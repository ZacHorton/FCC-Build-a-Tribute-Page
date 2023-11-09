function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  } 
  
}

factorialize(5);
