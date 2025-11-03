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

const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  images[index].classList.add('active');
  dots[index].classList.add('active');
}

prev.addEventListener('click', () => {
  current = (current === 0) ? images.length - 1 : current - 1;
  showImage(current);
});

next.addEventListener('click', () => {
  current = (current === images.length - 1) ? 0 : current + 1;
  showImage(current);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    current = index;
    showImage(current);
  });
});

showImage(current);
