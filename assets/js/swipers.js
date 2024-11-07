var swiper = new Swiper('.organic-swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: false,
    navigation: {
      nextEl: '.oranic-swiper-button-next',
      prevEl: '.oranic-swiper-button-prev',
    },
});

var bestswiper = new Swiper('.bestselling-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.bestselling-swiper-button-next',
    prevEl: '.bestselling-swiper-button-prev',
  },
});