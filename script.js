const displayInput = document.getElementById("displayInput");
const buttons = document.querySelectorAll("button");
let currentInput = "";
let currentOperator = "";
let previousInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.textContent;

    if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
      currentOperator = buttonText;
      previousInput = currentInput;
      currentInput = "";
    } else if (buttonText === "=") {
      if (currentInput !== "") {
        const result = calculate(previousInput, currentOperator, currentInput);
        currentInput = result;
        displayInput.value = result;
        previousInput = "";
        currentOperator = "";
      }
    } else if (buttonText === "C") {
      currentInput = "";
      currentOperator = "";
      previousInput = "";
      displayInput.value = "";
    } else {
      currentInput += buttonText;
      displayInput.value = currentInput;
    }
  });
});

function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "";
  }
}

function setDynamicGradient() {
    const angle = Math.random() * 360; 
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  }
  

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  setDynamicGradient();

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particles = [];
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();
    if (particle.size <= 0.3) {
      particles.splice(index, 1);
    }
  });
  requestAnimationFrame(animate);
}

addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

addEventListener("click", (event) => {
  for (let i = 0; i < 30; i++) {
    particles.push(new Particle());
  }
});

animate();


