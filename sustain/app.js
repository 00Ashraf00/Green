/* filepath: a:\HP\Desktop\Pedo\sustain\app.js */
let selectedMaterial = null;
let selectedCategory = null;

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  setupSearch();
  setupCategoryToggle();
});

// Render category buttons
function renderCategories() {
  const categoryGrid = document.getElementById("categoryGrid");
  categoryGrid.innerHTML = "";

  Object.keys(materialsDatabase).forEach(category => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = category;
    btn.addEventListener("click", () => selectCategory(category, btn));
    categoryGrid.appendChild(btn);
  });
}

// Select a category
function selectCategory(category, btnElement) {
  selectedMaterial = null;

  // Update active button
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  btnElement.classList.add("active");

  // Update toggle button text with selected category name
  const toggleBtn = document.getElementById("categoryToggle");
  toggleBtn.textContent = category;

  // Render materials list
  renderMaterials(category);

  // Clear comparison
  clearComparison();
}

// Render material list
function renderMaterials(category) {
  const materialList = document.getElementById("materialList");
  materialList.innerHTML = "";

  materialsDatabase[category].forEach(material => {
    const li = document.createElement("li");
    li.textContent = material.name;

    // make item keyboard-focusable and announce as button
    li.tabIndex = 0;
    li.setAttribute('role', 'button');
    li.setAttribute('aria-pressed', 'false');

    // click and keyboard handlers
    li.addEventListener("click", () => selectMaterial(material, li));
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectMaterial(material, li);
      }
    });

    materialList.appendChild(li);
  });
}

// Select a material for comparison
function selectMaterial(material, liElement) {
  selectedMaterial = material;

  // Update active item styles and aria
  document.querySelectorAll(".material-list li").forEach(item => {
    item.classList.remove("active");
    item.setAttribute('aria-pressed', 'false');
  });
  liElement.classList.add("active");
  liElement.setAttribute('aria-pressed', 'true');
  liElement.focus();

  // Render comparison
  renderComparison(material);
}

// Render comparison panel (updated: certifications removed)
function renderComparison(material) {
  const comparisonContent = document.getElementById("comparisonContent");
  comparisonContent.classList.add("comparison-content");

  let html = `<h2 class="material-title">${material.name}</h2>`;
  // Grid with two columns: left = traditional, right = alternatives stacked
  html += `<div class="comparison-cards">`;

  // Left column: Traditional material
  html += `<div class="left-column">
        <div class="material-card traditional">
            <div class="card-header traditional"><span>📍</span> Traditional Material</div>
            <div class="card-image">${material.traditional.image}</div>
            <div class="card-info">
                <div class="info-row"><span class="info-label">Material:</span><span class="info-value">${material.traditional.material}</span></div>
                <div class="info-row"><span class="info-label">Description:</span><span class="info-value">${material.traditional.description}</span></div>
                <div class="info-row"><span class="info-label">Waste:</span><span class="info-value">${material.traditional.waste}</span></div>
                <div class="info-row"><span class="info-label">Recyclability:</span><span class="info-value">${material.traditional.recyclability}</span></div>
                <div class="info-row"><span class="info-label">CO₂ Impact:</span><span class="info-value">${material.traditional.co2Impact}</span></div>
            </div>
        </div>
    </div>`;

  // Right column: stack of sustainable alternatives
  html += `<div class="right-column">
                <div class="alternatives-list">`;

  material.sustainable.forEach((alt) => {
    html += `
            <div class="material-card sustainable alt-item">
                <div class="card-header sustainable"><span>♻️</span> ${alt.type}</div>
                <div class="card-image">${alt.image}</div>
                <div class="card-info">
                    <div class="info-row"><span class="info-label">Material Type:</span><span class="info-value">${alt.material}</span></div>
                    <div class="info-row"><span class="info-label">Description:</span><span class="info-value">${alt.description}</span></div>
                    <div class="info-row"><span class="info-label">Waste Reduction:</span><span class="info-value">–${alt.wasteReduction}</span></div>
                    <div class="info-row"><span class="info-label">Recyclability:</span><span class="info-value">${alt.recyclability}</span></div>
                    <div class="info-row"><span class="info-label">CO₂ Impact:</span><span class="info-value">${alt.co2Impact}</span></div>
                </div>
            </div>
        `;
  });

  html += `</div></div>`; // close alternatives-list and right-column
  html += `</div>`; // close comparison-cards

  // Impact Summary
  const wasteReduction = material.sustainable[0].wasteReduction;
  const co2Reduction = calculateCO2Reduction(material.traditional.co2Impact, material.sustainable[0].co2Impact);

  html += `
        <div class="impact-summary">
            <div class="impact-card"><div class="impact-icon">♻️</div><div class="impact-label">Waste Reduction</div><div class="impact-value">–${wasteReduction}</div></div>
            <div class="impact-card"><div class="impact-icon">🌍</div><div class="impact-label">CO₂ Reduction</div><div class="impact-value">–${co2Reduction}</div></div>
            <div class="impact-card"><div class="impact-icon">📦</div><div class="impact-label">Type</div><div class="impact-value">${material.sustainable[0].recyclability}</div></div>
        </div>
    `;

  comparisonContent.innerHTML = html;
}

// Calculate CO2 reduction
function calculateCO2Reduction(traditional, sustainable) {
  const tradValue = parseFloat(traditional.split(' ')[0]);
  const sustValue = parseFloat(sustainable.split(' ')[0]);
  const reduction = ((tradValue - sustValue) / tradValue * 100).toFixed(1);
  return `${reduction}%`;
}

// Clear comparison
function clearComparison() {
  document.getElementById("comparisonContent").innerHTML = `
        <p style="text-align: center; padding: 60px 20px; color: #95a5a6; font-size: 1.1em;">
            Select a material to compare traditional vs sustainable alternatives
        </p>
    `;
}

// Setup search functionality
function setupSearch() {
  const searchBar = document.getElementById("searchBar");
  const searchResults = document.getElementById("searchResults");

  searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (query.length === 0) {
      searchResults.classList.remove("active");
      return;
    }

    let results = [];
    Object.keys(materialsDatabase).forEach(category => {
      materialsDatabase[category].forEach(material => {
        // Split material name into words and check if any word includes query
        const nameWords = material.name.toLowerCase().split(/\s+/);
        const matches = nameWords.some(word => word.includes(query));

        // Also check if full name includes the query
        const fullNameMatch = material.name.toLowerCase().includes(query);

        if (matches || fullNameMatch) {
          results.push({ material, category });
        }
      });
    });

    if (results.length > 0) {
      searchResults.classList.add("active");
      results.forEach(({ material, category }) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${material.name}</strong> <small>(${category})</small>`;
        li.addEventListener("click", () => {
          searchBar.value = material.name;
          searchResults.classList.remove("active");

          // Find and click the category button
          const categoryBtn = Array.from(document.querySelectorAll(".category-btn"))
            .find(btn => btn.textContent === category);
          if (categoryBtn) categoryBtn.click();

          // Find and click the material
          setTimeout(() => {
            const materialLi = Array.from(document.querySelectorAll(".material-list li"))
              .find(li => li.textContent === material.name);
            if (materialLi) materialLi.click();
          }, 100);
        });
        searchResults.appendChild(li);
      });
    } else {
      searchResults.classList.remove("active");
    }
  });

  // Close search on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      searchResults.classList.remove("active");
    }
  });
}

// Toggle category dropdown
function setupCategoryToggle() {
  const toggleBtn = document.getElementById("categoryToggle");
  const categoryGrid = document.getElementById("categoryGrid");

  // Toggle on button click
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    categoryGrid.classList.toggle("active");
  });

  // Close on category selection
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
      categoryGrid.classList.remove("active");
    }
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".category-section")) {
      categoryGrid.classList.remove("active");
    }
  });
}