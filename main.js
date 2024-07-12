// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
// import "swiper/css";
// import "swiper/css/navigation";

(function () {
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    // centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
      },
    },
  });
})();
