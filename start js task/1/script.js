function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}

var number = parseInt(prompt("Enter a number:"));
console.log(checkEvenOdd(number));