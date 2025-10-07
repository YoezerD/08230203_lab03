// ======== Portfolio Interactivity (Fixed for your HTML) ========

// Wait until everything is loaded
document.addEventListener("DOMContentLoaded", () => {

  // --- Smooth Section Navigation ---
  const navLinks = document.querySelectorAll('.menu a');
  const sections = document.querySelectorAll('section');

  function switchSection(targetId) {
    sections.forEach(sec => sec.style.display = "none");
    const next = document.getElementById(targetId);
    if (next) next.style.display = "block";

    // Highlight active link
    navLinks.forEach(link => link.classList.remove('active-link'));
    const active = document.querySelector(`.menu a[href="#${targetId}"]`);
    if (active) active.classList.add('active-link');
  }

  // Initially show only the hero section
  sections.forEach((sec, i) => {
    if (i > 0) sec.style.display = "none";
  });

  // Nav clicks
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      switchSection(targetId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // --- Welcome Message ---
  const userName = "Sonam Yoezer Dendup";
  const welcome = document.createElement('div');
  welcome.textContent = `👋 Welcome to ${userName}'s Portfolio!`;
  welcome.style.background = "#00b4d8";
  welcome.style.color = "white";
  welcome.style.padding = "10px";
  welcome.style.textAlign = "center";
  welcome.style.fontWeight = "bold";
  welcome.style.position = "sticky";
  welcome.style.top = "0";
  welcome.style.zIndex = "999";
  document.body.prepend(welcome);
  setTimeout(() => welcome.remove(), 4000);

  // --- Dark/Light Mode Toggle ---
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = "🌙 Dark Mode";
  Object.assign(toggleBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    background: "#00b4d8",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    zIndex: "1000"
  });
  document.body.appendChild(toggleBtn);

  let darkMode = false;
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkMode = !darkMode;
    toggleBtn.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

  // --- Add styles for dark mode dynamically ---
  const style = document.createElement('style');
  style.textContent = `
    .dark-mode {
      background-color: #181818;
      color: #f5f5f5;
    }
    .dark-mode header {
      background: #222;
    }
    .dark-mode .logo { color: #f5f5f5; }
    .dark-mode nav a { color: #f5f5f5; }
    .dark-mode nav a:hover,
    .dark-mode nav a.active-link { color: #00b4d8; }
    .dark-mode .project-card { background: #242424; color: #f5f5f5; border: 1px solid #333; }
    .dark-mode .project-card:hover { background: #2d2d2d; }
    .dark-mode #contact button { background: #0077b6; color: white; }
    .dark-mode #contact button:hover { background: #00b4d8; }
    .dark-mode input, .dark-mode textarea {
      background: #2a2a2a;
      color: #f5f5f5;
      border: 1px solid #444;
    }
    .dark-mode footer {
      background: #222;
      color: #f5f5f5;
    }
  `;
  document.head.appendChild(style);

  // --- Contact Form Validation ---
  const form = document.querySelector('#contact form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields before submitting.");
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        alert("❌ Please enter a valid email address.");
        return;
      }
      alert(`✅ Thank you, ${name}! Your message has been received.`);
      form.reset();
    });
  }

  // --- Project Card Hover Animation ---
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = "scale(1.03)";
      card.style.transition = "0.3s";
      card.style.backgroundColor = darkMode ? "#2d2d2d" : "#e0f7fa";
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = "scale(1)";
      card.style.backgroundColor = darkMode ? "#242424" : "#fff";
    });
  });
});
