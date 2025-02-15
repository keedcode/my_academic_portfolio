// Add this to your existing JavaScript file
document.addEventListener("DOMContentLoaded", function () {
	var typed = new Typed(".text-slider", {
		strings: document
			.querySelector(".text-slider-items")
			.textContent.split(","),
		typeSpeed: 110,
		loop: true,
		backDelay: 1010,
		backSpeed: 45,
	});
});
