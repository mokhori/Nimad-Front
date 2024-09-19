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
});


$('.custom-input').on("click", function() {
  $(this).closest('.custom-input-group').find('input, span').addClass('login-form-custom-style');
});

$('.custom-input').on("blur", function() {
  $(this).closest('.custom-input-group').find('input, span').removeClass('login-form-custom-style');
});


$(document).ready(function() {
  $('.project-info-slider').hover(
    function() {
      $(this).find('.view-project-btn').removeClass('d-none');
      $(this).find('.view-project-btn').addClass('fw-bold');
      $(this).find('.project-info-text h6').addClass('text--primary');
    },
    function() {
      $(this).find('.view-project-btn').addClass('d-none');
      $(this).find('.project-info-text h6').removeClass('text--primary');
    }
  );

});
