// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  if (window.lucide) lucide.createIcons();
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });
});

// Reveal sections as they enter the viewport.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Copy email to clipboard.
const copyButton = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");
copyButton.addEventListener("click", async () => {
  const email = "durgaeswar666@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email copied to clipboard.";
  } catch {
    window.location.href = `mailto:${email}`;
    copyStatus.textContent = "Opening your email application.";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
if (window.lucide) lucide.createIcons();
