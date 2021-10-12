const menuBtn = document.querySelector('.menu__btn');
const navLinks = document.querySelectorAll('.menu-list__link');

menuBtn.addEventListener('click', () =>{
	menuBtn.classList.toggle('menu__btn--active');
});
navLinks.forEach(function(navLink){
	navLink.addEventListener('click', () => {
		if(menuBtn.classList.contains('menu__btn--active')){
			menuBtn.classList.remove('menu__btn--active')
		}
	})}
)

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};