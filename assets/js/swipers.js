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
    pagination: {
      el: '.swiper-pagination', // Указываем контейнер для точек
      clickable: true,         // Делаем точки кликабельными
    },
});


const swiperContainer = document.querySelector('.bestselling-swiper');
const swiperSlides = swiperContainer.querySelectorAll('.organic-swiper-slide'); // Получаем все слайды

const bestswiper = new Swiper('.bestselling-swiper', {
  initialSlide: swiperSlides.length - 1,
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.bestselling-swiper-button-next',
    prevEl: '.bestselling-swiper-button-prev',
  }
});



var relatedswiper = new Swiper('.related-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true
});