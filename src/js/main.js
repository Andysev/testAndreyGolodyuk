/* eslint-disable no-console */
console.log('Hello from Andrey Golodyuk');

//очистка формы при перезагрузке
document.getElementById('mainForm').reset();

//slider
$('.lastwork_elements').slick({
	infinite: true,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
    prevArrow: '<div class="prevarrow"></div>',
    nextArrow: '<div class="nextarrow"></div>',
    
	responsive: [
	    {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});
// $('next.arrow').on('click', function(){
//     $('slider').slick('slickNext');
// });
// $('.nextarrow').slick({
//     prevArrow: '.nextarrow',
//     nextArrow: '.название класса',
// });
function mobMenuDrop() {
    const mobBtn = document.querySelector('.mob_btn');
    const mobList = document.querySelector('.mob_menu');
	const headMenu = document.querySelector('.header_menu')
	
    mobBtn.addEventListener('click', (event) => {
        const target = event.target;
        mobBtn.classList.toggle('mob_btn-active');
        mobList.classList.toggle('mob_menu-active');
		headMenu.classList.toggle('header_menu-active');
    });
	
}
mobMenuDrop();
