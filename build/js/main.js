/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
var preloaderEl = document.getElementById('preloader');
document.addEventListener("DOMContentLoaded", function () {
  console.log('ДОМ загружен');
});

window.onload = function () {
  console.log('Страница загружена');

  function delay() {
    preloaderEl.classList.remove('visible');
    preloaderEl.classList.add('hidden');
  }

  setTimeout(delay, 2000);
};
/* eslint-disable no-console */


console.log('Hello from Andrey Golodyuk'); //очистка формы при перезагрузке

document.getElementById('mainForm').reset(); //slider

$('.lastwork_elements').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="prevarrow"></div>',
  nextArrow: '<div class="nextarrow"></div>',
  responsive: [{
    breakpoint: 800,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
}); // $('next.arrow').on('click', function(){
//     $('slider').slick('slickNext');
// });
// $('.nextarrow').slick({
//     prevArrow: '.nextarrow',
//     nextArrow: '.название класса',
// });

function mobMenuDrop() {
  var mobBtn = document.querySelector('.mob_btn');
  var mobList = document.querySelector('.mob_menu');
  var headMenu = document.querySelector('.header_menu');
  mobBtn.addEventListener('click', function (event) {
    var target = event.target;
    mobBtn.classList.toggle('mob_btn-active');
    mobList.classList.toggle('mob_menu-active');
    headMenu.classList.toggle('header_menu-active');
  });
}

mobMenuDrop();
/******/ })()
;
//# sourceMappingURL=main.js.map