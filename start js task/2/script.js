function computeCircle(radius) {
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    return {
        area: area.toFixed(2),
        circumference: circumference.toFixed(2)
    };
}

const radius = parseFloat(prompt("Enter the radius of the circle:"));
const circle = computeCircle(radius);
console.log(`Area: ${circle.area}, Circumference: ${circle.circumference}`);