const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      // dynamicmainBullets: number,

      // type: 'fraction',
      // renderFraction: function(currentClass, totalClass){
      //   return 'Photo <span class="' + currentClass + '"></span>' + ' from ' + '<span class="' + totalClass + '"></span>';
      // },

      // type: 'progressbar',

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    simulateTouch: true,
    touchRatio:1,
    touchAngle: 45,
    grabcursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    speed: 2000,
    effect: 'cover',
    // fadeEffect: {
    //   crossFade: true,
    // },

  //   flipEffect: {
  //   slideShadows: false,
  // },

    // cubeEffect: {
    //   slideShadows: false,
    // },

    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },

  });