/**
 * Mangaung Digital Art Print - Image Lightbox
 * Displays an enlarged modal view for artwork and service images
 */

document.addEventListener("DOMContentLoaded", () => {
  initLightbox();
});

function initLightbox() {
  // Targetable images
  const targetSelectors = [
    ".services-grid article img",
    ".suggestions-grid .suggestion-card img",
    ".about-image-box img",
    ".hero-image-container img"
  ];

  const images = document.querySelectorAll(targetSelectors.join(", "));
  if (images.length === 0) return;

  // Build Lightbox DOM Overlay
  const modal = document.createElement("div");
  modal.id = "customLightbox";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Image Preview");

  Object.assign(modal.style, {
    position: "fixed",
    inset: "0",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9999",
    flexDirection: "column",
    padding: "20px"
  });

  const modalImg = document.createElement("img");
  Object.assign(modalImg.style, {
    maxWidth: "90%",
    maxHeight: "80vh",
    borderRadius: "8px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
    objectFit: "contain"
  });

  const caption = document.createElement("p");
  Object.assign(caption.style, {
    color: "#ffffff",
    marginTop: "12px",
    fontSize: "1rem",
    textAlign: "center"
  });

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";
  closeBtn.setAttribute("aria-label", "Close image viewer");
  Object.assign(closeBtn.style, {
    position: "absolute",
    top: "20px",
    right: "30px",
    background: "transparent",
    border: "none",
    color: "#ffffff",
    fontSize: "36px",
    cursor: "pointer",
    lineHeight: "1"
  });

  modal.appendChild(closeBtn);
  modal.appendChild(modalImg);
  modal.appendChild(caption);
  document.body.appendChild(modal);

  // Open modal handler
  images.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt || "Mangaung Digital Art Print Item";
      caption.textContent = img.alt || "";
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  // Close handlers
  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
}
