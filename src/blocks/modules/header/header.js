import $ from "jquery";

const $menuButton = $(".menu-button");
const $body = $("body");
const header = $(".header");

$menuButton.on("click", function (e) {
	e.preventDefault();
	if ($(this).hasClass("active")) {
		$body.removeClass("menu-open");
		setTimeout(() => {
			$(".menu").toggleClass("active");
			$(this).toggleClass("active");
		}, 1500);
	} else {
		$(".menu").toggleClass("active");
		$(this).toggleClass("active");
		setTimeout(() => {
			$body.toggleClass("menu-open");
		}, 500);
	}
});

function stickyHeader() {
	let currentScroll = window.pageYOffset;
	if (currentScroll > 0) {
		header.addClass("sticky");
	} else {
		header.removeClass("sticky");
	}
}

window.addEventListener("load", () => {
	stickyHeader();
});
window.addEventListener("scroll", () => {
	stickyHeader();
});

$(".menu").on("click", function () {
	$("body").removeClass("menu-open");
});

$(".menu__holder").on("click", function (e) {
	e.stopPropagation();
});
