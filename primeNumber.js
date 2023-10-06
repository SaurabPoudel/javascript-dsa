const primeNumber = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true;
}

console.log("1 is prime: ", primeNumber(1))
console.log("6 is prime: ", primeNumber(6))
console.log("31 is prime: ", primeNumber(31))