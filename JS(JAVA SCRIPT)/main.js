/**
 * Mangaung Digital Art Print - Main Scripts
 * Global functionality across all pages
 */

document.addEventListener("DOMContentLoaded", () => {
  initActiveNavigation();
  initBackToTop();
  initFooterYear();
});

/**
 * Highlights the current active navigation item dynamically
 */
function initActiveNavigation() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".site-nav a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
}

/**
 * Automatically creates and handles a smooth 'Back to Top' button
 */
function initBackToTop() {
  const topBtn = document.createElement("button");
  topBtn.id = "backToTopBtn";
  topBtn.setAttribute("aria-label", "Scroll back to top");
  topBtn.innerHTML = "&#8679;";
  
  // Basic inline fallback styling
  Object.assign(topBtn.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#1e293b",
    color: "#ffffff",
    fontSize: "20px",
    cursor: "pointer",
    display: "none",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
    zIndex: "999",
    transition: "opacity 0.3s ease, transform 0.2s ease"
  });

  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * Appends current year to footer if dynamic placeholder exists
 */
function initFooterYear() {
  const footerText = document.querySelector(".site-footer .footer-col p");
  if (footerText && !footerText.dataset.yearAppended) {
    const yearSpan = document.createElement("span");
    yearSpan.textContent = ` © ${new Date().getFullYear()}`;
    footerText.appendChild(yearSpan);
    footerText.dataset.yearAppended = "true";
  }
}