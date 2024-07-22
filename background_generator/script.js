const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const body = document.getElementById("change");

const changeGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = `${body.style.background};`;
};

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);