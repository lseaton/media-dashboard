let cardImgs = document.querySelectorAll(".card img");
console.log(cardImgs);
for (let i = 0; i < cardImgs.length; i++) {
	cardImgs[i].addEventListener("mouseover", revealInfo);
	cardImgs[i].addEventListener("mouseleave", hideInfo);
}

function revealInfo(e) {
	e.target.style.animation = "three-quarters-fade-out 1s";
	e.target.nextElementSibling.style.animation = "fade-in 2s";
	e.target.style.opacity = "25%";
	e.target.nextElementSibling.style.opacity = "100%";
}

function hideInfo(e) {
	e.target.nextElementSibling.style.animation = "none";
	e.target.style.animation = "three-quarters-fade-in 1s";
	e.target.nextElementSibling.style.opacity = "0%";
	e.target.style.opacity = "100%";
}
