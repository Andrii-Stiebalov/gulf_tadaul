import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

// let swiper = new Swiper(".swiper-js", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });

var swiper; 

function resize() { 
  var ww = window.innerWidth; 
  console.log(ww)
  if (ww <= 768) {
     if (swiper) return; 
     else swiper = new Swiper(".swiper-js", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    } else { if (swiper) { swiper.destroy(); swiper = undefined; } } };


 window.addEventListener('resize' , resize )

