// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const text = "Frontend Developer | Electronics Engineer | AI&ML Enthusiast";
const typingTextElement = document.getElementById("typing-text");
let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        typingTextElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed (milliseconds)
    }
}

type();
