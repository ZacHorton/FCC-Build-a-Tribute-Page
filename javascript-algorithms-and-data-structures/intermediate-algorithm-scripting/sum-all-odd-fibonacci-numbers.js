function sumFibs(num) {
    let allFibonacci = [0, 1];
    let oddFibonacci = [1];
    for (let i = 1; i < num; i++) {
        let value = allFibonacci[i] + allFibonacci[i - 1];
        allFibonacci.push(value);
        if (value % 2 != 0) {oddFibonacci.push(value);}
    }

    let total = 0;
    for (let oddNumber of oddFibonacci) {
        if (oddNumber <= num) {
            total += oddNumber;
        }
        
    }

    return total;
  }

sumFibs(4);
