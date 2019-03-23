function bandSlide(change) {
	var slide = document.getElementsByClassName("bandSlide");
	slide.forEach(s => (s.style.display = "none"));
	slide[change].style.display = "block";
	change = change === slide.length - 1 ? 0 : change + 1;
	setTimeout(() => bandSlide(change), 3000);
}

bandSlide(0);
