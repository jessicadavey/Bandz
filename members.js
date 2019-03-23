function bandSlide(change) {
	var slide = document.getElementsByClassName("bandSlide");
	for (var i = 0; i < slide.length; ++i) {
		slide[i].style.display = "none";
	}
	slide[change].style.display = "block";

	change = change === slide.length - 1 ? 0 : change + 1;
	setTimeout(() => bandSlide(change), 3000);
}

bandSlide(0);
