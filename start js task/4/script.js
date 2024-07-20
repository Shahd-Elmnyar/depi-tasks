function checkPositiveNegative(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPositiveNegative(5, -10)); 
console.log(checkPositiveNegative(-5, 10));
console.log(checkPositiveNegative(5, 10)); 
console.log(checkPositiveNegative(-5, -10)); 
