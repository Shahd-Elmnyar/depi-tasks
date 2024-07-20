function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}

// Changed to prompt for user input
const num1 = parseFloat(prompt("Enter the first number:")); 
const num2 = parseFloat(prompt("Enter the second number:")); 

console.log(`Sum: ${sumOfTwoNumbers(num1, num2)}`); 