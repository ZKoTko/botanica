$(document).ready(function(){
    $('.menu-product-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});


$(document).ready(function(){
    $('.our-menu-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            }
          ]
    });
});

$(document).ready(function(){
    $('.feedback-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$(document).ready(function(){
    $('.blog-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
    });
});

$(document).ready(function(){
  $('.shop-page-banner-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1
            }
        }
      ]
  });
});



