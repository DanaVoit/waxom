//Header fixed
const header = document.querySelector('#header');
const intro = document.querySelector("#intro")

window.addEventListener("scroll", function () {
	let scrollPoss = window.scrollY;

	if (scrollPoss > 1000) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}


});


