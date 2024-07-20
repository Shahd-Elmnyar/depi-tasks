function checkPositiveNegative(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return true;
    } else {
        return false;
    }
}

// Changed to prompt for user input
const num1 = parseFloat(prompt("Enter the first number:")); 
const num2 = parseFloat(prompt("Enter the second number:")); 

console.log(checkPositiveNegative(num1, num2)); 