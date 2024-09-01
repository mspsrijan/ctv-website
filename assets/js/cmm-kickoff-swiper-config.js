var swiper = new Swiper(".cmm-kickoff-swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  lazy: true,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});
