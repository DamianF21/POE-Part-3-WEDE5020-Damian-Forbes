/**
 * Mangaung Digital Art Print - Live Search & Filter
 * Filters training programs and focus areas dynamically
 */

document.addEventListener("DOMContentLoaded", () => {
  initLiveSearch();
});

function initLiveSearch() {
  const servicesGrid = document.querySelector(".services-grid");
  const suggestionsGrid = document.querySelector(".suggestions-grid");

  const targetContainer = servicesGrid || suggestionsGrid;
  if (!targetContainer) return;

  const isServicesPage = Boolean(servicesGrid);
  const cardSelector = isServicesPage ? ".service-card" : ".suggestion-card";

  // Create Search Bar UI
  const searchWrapper = document.createElement("div");
  searchWrapper.className = "search-wrapper container";
  Object.assign(searchWrapper.style, {
    margin: "1.5rem auto",
    display: "flex",
    justifyContent: "center"
  });

  const searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.placeholder = isServicesPage 
    ? "Search services (e.g., Photography, Graphic Design, Print)..." 
    : "Filter focus areas...";
  searchInput.setAttribute("aria-label", "Search programs and services");

  Object.assign(searchInput.style, {
    width: "100%",
    maxWidth: "500px",
    padding: "10px 16px",
    borderRadius: "24px",
    border: "1px solid #cbd5e1",
    fontSize: "0.95rem",
    outline: "none",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
  });

  searchInput.addEventListener("focus", () => {
    searchInput.style.borderColor = "#2563eb";
  });
  searchInput.addEventListener("blur", () => {
    searchInput.style.borderColor = "#cbd5e1";
  });

  searchWrapper.appendChild(searchInput);

  // Insert search bar right before the grid container
  targetContainer.parentNode.insertBefore(searchWrapper, targetContainer);

  // Create 'No results' fallback notification
  const emptyState = document.createElement("p");
  emptyState.textContent = "No matching courses or areas found.";
  emptyState.style.display = "none";
  emptyState.style.textAlign = "center";
  emptyState.style.color = "#64748b";
  emptyState.style.padding = "20px";
  targetContainer.parentNode.insertBefore(emptyState, targetContainer.nextSibling);

  // Filtering event
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = targetContainer.querySelectorAll(cardSelector);
    let visibleCount = 0;

    cards.forEach((card) => {
      const heading = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const text = card.querySelector("p")?.textContent.toLowerCase() || "";
      const matches = heading.includes(query) || text.includes(query);

      card.style.display = matches ? "" : "none";
      if (matches) visibleCount++;
    });

    emptyState.style.display = visibleCount === 0 ? "block" : "none";
  });
}





document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const noResults = document.getElementById("noResults");

    // Works for both index.html (.suggestion-card) and Services.html (.service-card)
    const cards = document.querySelectorAll(".suggestion-card, .service-card");

    if (!searchInput || cards.length === 0) return;

    function filterCards() {
        const query = searchInput.value.toLowerCase().trim();
        let matchCount = 0;

        cards.forEach(function (card) {
            const title = card.querySelector("h3") ? card.querySelector("h3").textContent.toLowerCase() : "";
            const text = card.querySelector("p") ? card.querySelector("p").textContent.toLowerCase() : "";

            if (title.includes(query) || text.includes(query)) {
                card.style.display = "";
                matchCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (noResults) {
            noResults.style.display = matchCount === 0 ? "block" : "none";
        }
    }

    // Filter when clicking the Search button
    if (searchBtn) {
        searchBtn.addEventListener("click", filterCards);
    }

    // Also filter live as the user types or presses Enter
    searchInput.addEventListener("input", filterCards);
    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            filterCards();
        }
    });
});