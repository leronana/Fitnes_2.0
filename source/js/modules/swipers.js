const swiperReviews = new Swiper('.reviews__swiper', {

  slidesPerView: 1,

  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
    disabledClass: 'reviews__button-disabled',
  },
});

const swiperTrainers = new Swiper('.trainers__swiper', {
  // Optional parameters
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    1360: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.trainers__swiper-button--next',
    prevEl: '.trainers__swiper-button--prev',
  },
});
