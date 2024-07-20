function computeCircle(radius) {
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    return {
        area: area.toFixed(2),
        circumference: circumference.toFixed(2)
    };
}

const circle = computeCircle(5);
console.log(`Area: ${circle.area}, Circumference: ${circle.circumference}`);

