// Άνοιγμα / κλείσιμο μενού
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

// Dropdown λειτουργία
const dropdowns = document.getElementsByClassName("dropdown-btn");

for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle("dropdown-active");
  });
}
