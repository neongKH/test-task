import "inputmask";
import $ from "jquery";
$('[data-toggle="anchor"]').on("click", function (e) {
	e.preventDefault();

	const $dataTarget = $(this).attr("data-target");
	const $targetPos = $($dataTarget).offset().top - 50;
	const $href = $(this).attr("href");
	$("body").removeClass("menu-open");
	$(".menu").removeClass("active");
	$(".menu-button").removeClass("active");
	$("html,body").animate(
		{
			scrollTop: $targetPos,
		},
		1500,
		function () {
			window.history.pushState(null, null, $href);
		}
	);
});

$(function () {
	Inputmask({
		mask: "+38 (099) 999 99 99",
		keepStatic: true,
		clearIncomplete: true,
		autoUnmask: false,
		removeMaskOnSubmit: false,
		showMaskOnHover: false,
		alternatormarker: "|",
	}).mask(".input-mask");
});
