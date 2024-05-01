const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  grabCursor: true,
  slidesPerView: "auto",

  autoplay: {
      delay: 10000,
      disableOnInteraction: false, 
  },
  loop: true, 
  
  breakpoints: {
    
    320: {
    slidesPerView: 1,
    spaceBetween: 10
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    },
   
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
   
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});