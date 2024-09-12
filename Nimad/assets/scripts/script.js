document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.blog-swiper', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20, 
      speed: 1500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        500: { slidesPerView: 2 },
        700: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });


    const projectSwiper = new Swiper('.project-swiper', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20, 
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        200:{
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
});
  