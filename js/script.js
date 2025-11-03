// Άνοιγμα / κλείσιμο μενού
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

// Dropdown λειτουργία
const dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(btn => {
  btn.addEventListener("click", function() {
    const container = this.nextElementSibling; // το div του dropdown
    container.classList.toggle("dropdown-active");

    // Αλλάζει το σύμβολο + / -
    if (container.classList.contains("dropdown-active")) {
      this.textContent = this.textContent.replace('▸', '▾');
    } else {
      this.textContent = this.textContent.replace('▾', '▸');
    }
  });
});

