const swiper = new Swiper(".mainSlider", {
  // Optional parameters
  slidesPerView: 4,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".arrow-left",
    prevEl: ".arrow-right",
  },
  breakpoints: {
    310: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 1,
    },
    820: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const swiper2 = new Swiper(".slider-photo", {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
