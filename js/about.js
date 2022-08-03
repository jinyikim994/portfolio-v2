// Typed Text Animation
var typed = new Typed(".auto-desc",{
	strings: ["Im Jinyi Kim" , "Web Publisher" , "Potential Junior"],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true
}) 

// Accordion 
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
		el.addEventListener("click", () => {
			if (el.classList.contains("active")) {
			el.classList.remove("active");
			} else {
			accordionItem.forEach((el2) => el2.classList.remove("active"));
			el.classList.add("active");
		}
	})
);

// About Image Fade In
$(function() {
	$('.image-wrap img').each(function(i) {
	$(this).delay((i++) * 700).fadeTo(2000, 1); })
});
