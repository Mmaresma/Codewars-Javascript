//JavaScript: 5 kyu - Factorial decomposition
//https://www.codewars.com/kata/5a045fee46d843effa000070

function decomp(n) {
    let result = "";
    let primes = getPrimes(n);
    for (let i = 0; i < primes.length; i++) {
        let exponent = 0;
        let prime = primes[i];
        for (let j = prime; j <= n; j *= prime) {
            exponent += Math.floor(n / j);
        }
        result += prime + (exponent > 1 ? "^" + exponent : "") + " * ";
    }
    return result.slice(0, -3);
}

function getPrimes(n) {
    let primes = [];
    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = 2; i * j <= n; j++) {
                isPrime[i * j] = false;
            }
        }
    }
    return primes;
}
