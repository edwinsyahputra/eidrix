// Inisialisasi SwiperJS Carousel
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3500,
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
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// Smooth scroll untuk navigasi link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
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

// 🔁 Aktifkan thumbnail click setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-card").forEach((card) => {
    const mainImage = card.querySelector(".main-image");
    const thumbnails = card.querySelectorAll(".thumbnails img");

    // Ganti gambar utama saat thumbnail diklik + animasi & highlight
    thumbnails.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        // Hapus class aktif dari semua thumbnail
        thumbnails.forEach((t) => t.classList.remove("active"));

        // Tambahkan class aktif ke thumbnail yang diklik
        thumb.classList.add("active");

        // Tambahkan efek fade-out sebelum mengganti gambar
        mainImage.classList.add("fade-out");

        // Setelah animasi selesai, ganti gambar dan hapus fade-out
        setTimeout(() => {
          mainImage.src = thumb.src;
          mainImage.classList.remove("fade-out");
        }, 250);
      });
    });
  });
});
