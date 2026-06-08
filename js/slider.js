document.addEventListener('DOMContentLoaded', function () {
  var heroSwiper = document.querySelector('.top-hero .swiper');
  if (!heroSwiper) return;

  new Swiper(heroSwiper, {
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: '前のスライド',
      nextSlideMessage: '次のスライド',
    },
  });
});
