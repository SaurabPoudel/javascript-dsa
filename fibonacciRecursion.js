// Without Memoization
// const fibonacciRecursion = (n) => {
//     if (n <= 2) return 1;
//     else return fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1)
// }

// With Memoization
// const fib = (n, prevValues = []) => {
//     if (prevValues[n] != null) {
//         return prevValues[n];
//     }
//     let result
//     if (n <= 2) {
//         result = 1
//     } else {
//         result = fib(n - 1, prevValues) + fib(n - 2, prevValues)
//     }
//     prevValues[n] = result;
//     return result
// }
const fib = (n, prevValues = []) => {
    let result;
    if (prevValues[n] != null) {
        return prevValues[n];
    }
    if (n <= 2) {
        result = 1;
    } else {
        result = fib(n - 1, prevValues) + fib(n - 2, prevValues)
    }
    prevValues[n] = result;
    return result;
}

console.log(fib(41))