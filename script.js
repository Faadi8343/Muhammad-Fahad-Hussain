// script.js - small interactions, animations & contact UX
document.addEventListener('DOMContentLoaded', function () {
  // Set current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    navToggle.classList.toggle('active');
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
      nav.classList.remove('show');
      navToggle.classList.remove('active');
    }
  });

  // Simple client-side form handler: show feedback (server handles actual send)
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', function (e) {
    // Basic client validation
    formMsg.textContent = 'Sending...';
    formMsg.style.color = '#6b7280';
    // let the browser POST to contact.php. On success, contact.php will redirect back with ?success=1 or ?error=1 ideally.
    // For better UX you can use fetch() here to submit asynchronously.
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav on click
        nav.classList.remove('show');
        navToggle.classList.remove('active');
      }
    });
  });

});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
n