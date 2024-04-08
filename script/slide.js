const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: "auto",
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
        delay: 4000, // 4초마다 슬라이드
        disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
    },
    loop: true, // 무한 루프 옵션 추가
  });