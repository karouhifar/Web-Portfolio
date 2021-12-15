$(document).ready(function () {
  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    autoplay: false,
    loop: false,
    autoHeight: false,
    breakpointsBase: "container",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    preventInteractionOnTransition: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  });
});
