// script.js

// Inisialisasi SwiperJS Carousel
const swiper = new Swiper(".swiper", {
  loop: true, // Slide berulang
  autoplay: {
    delay: 3500, // Auto slide setiap 3 detik
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade", // Efek transisi fade agar elegan
  fadeEffect: {
    crossFade: true,
  },
});

// Smooth scroll untuk navigasi link (opsional)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // offset agar tidak ketutup navbar
        behavior: "smooth",
      });
    }
  });
});

// Toggle hamburger menu
const hamburger = document.getElementById("hamburger-btn");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
