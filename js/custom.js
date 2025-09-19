// Smooth scroll untuk link navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Tombol Back to Top
const backToTop = document.createElement("button");
backToTop.innerHTML = "⬆";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

// Styling tombol back-to-top via JS
backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.padding = "10px 15px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#007bff";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "18px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
backToTop.style.zIndex = "999";

// Show/hide tombol ketika scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll ke atas jika tombol diklik
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
