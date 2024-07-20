function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7)); 