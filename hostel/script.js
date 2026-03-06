// Dark Mode Toggle
function toggleMode() {
  document.body.classList.toggle("dark");
}

// Accordion
const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
  header.addEventListener("click", function() {
    this.parentElement.classList.toggle("active");
  });
});

// Loading Screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if(loader){
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  }
});

// Auto Highlight Current Page
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if(linkPage === currentPage){
      link.classList.add("active");
    }
  });
});

