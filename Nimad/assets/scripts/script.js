document.addEventListener("DOMContentLoaded", function () {

  const headerSwiper = new Swiper('.header-swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      200: {
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
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });


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
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      200: {
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


  const projectSwiper = new Swiper('.project-swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      200: {
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
