function sumPrimes(num) {
    // Sieve of Eratosthenes
    let sieve = new Array;
    let primes = new Array;

    // Populate the sieve array from 2 to the input number inclusive with boolean values of true
    for (let i = 2; i <= num; i++) {
        sieve.push([i, true]);
    } 

    // Step through the sieve array while adding prime numbers to the primes array
    for (let j = 0; j < sieve.length; j++) {
        if (sieve[j][1] === true) {
            primes.push(sieve[j][0]);
        }

        // Eliminate composite numbers by flipping their boolean values to false 
        for (let k = j; k < sieve.length; k += sieve[j][0] ) {
            sieve[k][1] = false;
        }
    }

    // Sum all the numbers inside the primes array and return to function call
    return primes.reduce((accumulator, currentValue) => accumulator + currentValue);
}

sumPrimes(10);
