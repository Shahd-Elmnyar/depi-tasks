function checkPositiveNegative(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return true;
    } else {
        return false;
    }
}

const num1 = number(prompt("Enter the first number:")); 
const num2 = number(prompt("Enter the second number:")); 

console.log(checkPositiveNegative(num1, num2)); 