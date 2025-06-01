// script.js
import { menuData } from "./menu.js";

let currentLanguage = "es";

// FUNCTIONS
function isImageFile(filename) {
  return (
    filename &&
    (filename.includes(".jpg") ||
      filename.includes(".jpeg") ||
      filename.includes(".png") ||
      filename.includes(".gif") ||
      filename.includes(".webp"))
  );
}

function showImage(imageSource) {
  const overlay = document.querySelector(".image-overlay");
  const modalImage = document.querySelector(".modal-image");
  const modalEmoji = document.querySelector(".modal-emoji");

  if (isImageFile(imageSource)) {
    // Show real image
    modalImage.src = `images/${imageSource}`;
    modalImage.style.display = "block";
    modalEmoji.style.display = "none";
    modalImage.classList.add("active");
  } else {
    // Show emoji
    modalEmoji.textContent = imageSource;
    modalEmoji.style.display = "flex";
    modalImage.style.display = "none";
    modalEmoji.classList.add("active");
  }

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImage() {
  const overlay = document.querySelector(".image-overlay");
  const modalImage = document.querySelector(".modal-image");
  const modalEmoji = document.querySelector(".modal-emoji");

  overlay.classList.remove("active");
  modalImage.classList.remove("active");
  modalEmoji.classList.remove("active");

  setTimeout(() => {
    modalImage.style.display = "none";
    modalEmoji.style.display = "none";
  }, 300);

  document.body.style.overflow = "";
}

function toggleSection(button) {
  const content = button.nextElementSibling;
  const isExpanded = content.classList.contains("expanded");

  // Close all other sections
  document.querySelectorAll(".menu-content").forEach((section) => {
    section.classList.remove("expanded");
  });

  // Toggle current section
  if (!isExpanded) {
    content.classList.add("expanded");
  }
}

function toggleLanguageDropdown(event) {
  event.stopPropagation();
  const dropdown = document.getElementById("language-dropdown");
  const selector = document.querySelector(".language-selector");

  dropdown.classList.toggle("active");
  selector.classList.toggle("open");
}

function selectLanguage(event, languageCode) {
  event.stopPropagation();

  // Update current language
  currentLanguage = languageCode;
  const languageData = menuData[languageCode];

  document.getElementById("current-language").textContent =
    languageCode.toUpperCase();
  document.getElementById("current-flag").textContent = languageData.flag;

  // Update dropdown selection
  document.querySelectorAll(".language-option").forEach((option) => {
    option.classList.remove("selected");
  });
  event.currentTarget.classList.add("selected");

  // Close dropdown
  document.getElementById("language-dropdown").classList.remove("active");
  document.querySelector(".language-selector").classList.remove("open");

  // Re-render menu
  renderMenu();
}

function closeLanguageDropdown() {
  document.getElementById("language-dropdown").classList.remove("active");
  document.querySelector(".language-selector").classList.remove("open");
}

function getSocialIcon(platform) {
  switch (platform) {
    case "instagram":
      return '<i class="fab fa-instagram"></i>';
    case "whatsapp":
      return '<i class="fab fa-whatsapp"></i>';
    case "facebook":
      return '<i class="fab fa-facebook-f"></i>';
    case "twitter":
      return '<i class="fab fa-twitter"></i>';
    default:
      return '<i class="fas fa-link"></i>';
  }
}

function renderMenu() {
  const data = menuData[currentLanguage];

  // Update restaurant info
  const restaurantNameEl = document.getElementById("restaurant-name");
  const restaurantLogoEl = document.getElementById("restaurant-logo");

  if (data.restaurant.logo) {
    restaurantLogoEl.src = `images/${data.restaurant.logo}`;
    restaurantLogoEl.alt = data.restaurant.name;
    restaurantLogoEl.style.display = "block";
    restaurantNameEl.style.display = "none";
  } else {
    restaurantNameEl.textContent = data.restaurant.name;
    restaurantNameEl.style.display = "block";
    restaurantLogoEl.style.display = "none";
  }

  document.getElementById("footer-name").textContent = data.restaurant.name;

  const footerInfo = document.getElementById("footer-info");
  footerInfo.innerHTML = `
                <p>${data.restaurant.address}</p>
                <p>Reservations: ${data.restaurant.phone}</p>
                <p>${data.restaurant.hours}</p>
            `;

  // Render social icons
  const socialIcons = document.getElementById("social-icons");
  socialIcons.innerHTML = data.restaurant.socialMedia
    .map(
      (social) =>
        `<a href="${social.link}" class="social-icon ${
          social.platform
        }" title="${social.name}" target="_blank">${getSocialIcon(
          social.platform
        )}</a>`
    )
    .join("");

  // Render menu sections
  const container = document.getElementById("menu-container");
  container.innerHTML = data.sections
    .map(
      (section, index) => `
                <section class="menu-section" style="animation-delay: ${
                  (index + 1) * 0.1
                }s;">
                    <button class="section-button ${
                      section.type
                    }" onclick="toggleSection(this)" style="animation-delay: ${
        (index + 1) * 0.5
      }s;">
                        ${section.name}
                    </button>
                    <div class="menu-content">
                        ${section.items
                          .map(
                            (item) => `
                            <div class="menu-item" onclick="showImage('${
                              item.image
                            }')">
                                <div class="item-header">
                                    <h3 class="item-name">${item.name}</h3>
                                    <span class="item-price">${
                                      item.price
                                    }</span>
                                </div>
                                <p class="item-description">${
                                  item.description
                                }</p>
                                <div class="item-tags">
                                    ${item.tags
                                      .map(
                                        (tag) =>
                                          `<span class="tag">${tag}</span>`
                                      )
                                      .join("")}
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </section>
            `
    )
    .join("");
}

window.showImage = showImage;
window.closeImage = closeImage;
window.toggleSection = toggleSection;
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.selectLanguage = selectLanguage;
window.closeLanguageDropdown = closeLanguageDropdown;
window.getSocialIcon = getSocialIcon;
window.renderMenu = renderMenu;

// Initialize the menu when page loads
document.addEventListener("DOMContentLoaded", function () {
  renderMenu();

  // Close modal on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeImage();
      closeLanguageDropdown();
    }
  });

  // Close language dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".language-selector")) {
      closeLanguageDropdown();
    }
  });
});
