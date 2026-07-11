const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("idk-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  );
  document.querySelector('meta[name="theme-color"]').content =
    theme === "dark" ? "#191917" : "#f4f1ea";
}

setTheme(storedTheme || (systemPrefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("idk-theme", nextTheme);
});

document.querySelector("#year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
