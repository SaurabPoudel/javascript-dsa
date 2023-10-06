// Method 1 using regex and math function
// const powerOfTwo = (n) => {
//     let regexPattern = /^-?[0-9]+$/;
//     return regexPattern.test(Math.log2(n));
// }

// Method 2 using Math.pow() function
// const powerOfTwo = (n) => {
//     for (let i = 1; i < n; i++)
//         if (n === Math.pow(i, 2)) return true;
//     return false;
// }

// Not using any Math functions

// Method 3
// const powerOfTwo = (n) => {
//     if (n < 1) return false;
//     while (n > 1) {
//         if (n % 2 !== 0) return false
//         n = n / 2
//     }
//     return true;
// }

// Using Bitwise operator (optimal solution O(1))

const powerOfTwo = (n) => {
    if (n < 1) return false
    return (n & (n - 1)) === 0
}

console.log(powerOfTwo(3))
console.log(powerOfTwo(64))
