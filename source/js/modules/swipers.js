const swiperReviews = new Swiper('.reviews__swiper', {

  slidesPerView: 1,

  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
    disabledClass: 'reviews__button-disabled',
  },
});
