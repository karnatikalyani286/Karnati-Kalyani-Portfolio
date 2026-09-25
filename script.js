const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const roles = [
  "Software & Digital Technology Enthusiast",
  "Computer Science Graduate",
  "Digital Marketing Learner",
  "Front-End Web Development Learner"
];

let roleIndex = 0;
const roleText = document.getElementById("roleText");

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.style.opacity = "0";
  setTimeout(() => {
    roleText.textContent = roles[roleIndex];
    roleText.style.opacity = "1";
  }, 180);
}, 2600);

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
