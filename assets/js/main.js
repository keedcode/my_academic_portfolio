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

const slides = [
	{
		image: "assets/img/gallery/gallery1.png",
		caption: "Photography",
		label: "01",
		subtitle: "Travel pro",
		description:
			"Etiam tristique, metus pretium rutrum elementumv, risus tortor.",
	},
	{
		image: "assets/img/gallery/gallery2.png",
		caption: "Nature",
		label: "02",
		subtitle: "Nature Lover",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		image: "assets/img/gallery/gallery3.png",
		caption: "Urban",
		label: "03",
		subtitle: "City Life",
		description: "Suspendisse varius enim in eros elementum tristique.",
	},
	{
		image: "assets/img/gallery/gallery4.png",
		caption: "Wildlife",
		label: "04",
		subtitle: "Wildlife Explorer",
		description:
			"Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
	},
];

function changeSlide(index) {
	const slide = slides[index];
	document.querySelector(
		".slider-bg1"
	).style.backgroundImage = `url(${slide.image})`;
	document.getElementById("slider-caption").textContent = slide.caption;
	document.getElementById("slider-label").textContent = slide.label;
	document.getElementById("slider-subtitle").textContent = slide.subtitle;
	document.getElementById("slider-description").textContent = slide.description;
}
