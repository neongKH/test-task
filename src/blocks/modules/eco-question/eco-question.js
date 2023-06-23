import gsap from "gsap";
import $ from "jquery";
import * as Matter from "matter-js";

if ($(".forest-container").length) {
	const shovel = $(".shovel");
	const tl = gsap.timeline({ defaults: { ease: "linear" } });
	const tlRowFirst = gsap.timeline({ defaults: { ease: "linear" } });
	const tlRowSecond = gsap.timeline({
		defaults: { ease: "linear" },
	});
	const tlRowThird = gsap.timeline({ defaults: { ease: "linear" } });
	const isMobile = window.matchMedia("(max-width: 768px)").matches;
	tl.to(shovel, {
		left: "84%",
		duration: 3,
	})
		.to(shovel, {
			rotate: "270deg",
			rotateY: "180deg",
			duration: 0,
		})
		.to(shovel, {
			top: isMobile ? "70px" : "100px",
			duration: 1.5,
		})
		.to(shovel, {
			rotate: "0deg",
			rotateY: "180deg",
			duration: 0,
		})
		.to(shovel, {
			left: "0%",
			duration: 3,
		})
		.to(shovel, {
			rotate: "270deg",
			rotateY: "180deg",
			duration: 0,
		})
		.to(shovel, {
			top: isMobile ? "150px" : "200px",
			duration: 1.5,
		})
		.to(shovel, {
			rotate: "0deg",
			rotateY: "0deg",
			duration: 0,
		})
		.to(shovel, {
			left: "68%",
			duration: 3,
		});

	tlRowFirst
		.to(".row.first .tree:nth-child(2)", {
			opacity: "0",
			duration: 0,
			delay: "0.2",
		})
		.to(".row.first .tree:nth-child(3)", {
			opacity: "0",
			duration: 0,
			delay: "0.4",
		})
		.to(".row.first .tree:nth-child(4)", {
			opacity: "0",
			duration: 0,
			delay: "0.6",
		})
		.to(".row.first .tree:nth-child(5)", {
			opacity: "0",
			duration: 0,
			delay: "0.8",
		})
		.to(".row.first .tree:nth-child(6)", {
			opacity: "0",
			duration: 0,
			delay: "0.8",
		});
	tlRowSecond
		.to(".row.second .tree:nth-child(6)", {
			opacity: "0",
			duration: 0,
			delay: "3.5",
		})
		.to(".row.second .tree:nth-child(5)", {
			opacity: "0",
			duration: 0,
			delay: "1",
		})
		.to(".row.second .tree:nth-child(4)", {
			opacity: "0",
			duration: 0,
			delay: "0.7",
		})
		.to(".row.second .tree:nth-child(3)", {
			opacity: "0",
			duration: 0,
			delay: "0.7",
		})
		.to(".row.second .tree:nth-child(2)", {
			opacity: "0",
			duration: 0,
			delay: "0.7",
		})
		.to(".row.second .tree:nth-child(1)", {
			opacity: "0",
			duration: 0,
			delay: "0.7",
		});

	tlRowThird
		.to(".row.third .tree:nth-child(1)", {
			opacity: "0",
			duration: 0,
			delay: "8",
		})
		.to(".row.third .tree:nth-child(2)", {
			opacity: "0",
			duration: 0,
			delay: "1",
		})
		.to(".row.third .tree:nth-child(3)", {
			opacity: "0",
			duration: 0,
			delay: "0.7",
		})
		.to(".row.third .tree:nth-child(4)", {
			opacity: "0",
			duration: 0,
			delay: "0.7",
		})
		.to(".row.third .tree:nth-child(5)", {
			opacity: "0",
			duration: 0,
			delay: "0.7",
		});
}

function clearAnimations(exceptCanvasId) {
	const canvases = $("canvas");

	canvases.each(function () {
		const canvas = $(this);
		const canvasId = canvas.attr("id");

		if (canvasId !== exceptCanvasId) {
			const ctx = canvas[0].getContext("2d");
			ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);

			const canvasClone = canvas.clone(true);
			canvas.replaceWith(canvasClone);

			if (
				Matter.RenderPixi &&
				Matter.RenderPixi.ins &&
				Matter.RenderPixi.ins[canvasId]
			) {
				Matter.RenderPixi.ins[canvasId].stop();
				delete Matter.RenderPixi.ins[canvasId];
			}
		}
	});
}

function generateFallingFlowers(
	canvasId,
	flowerCount,
	flowerWidth,
	flowerHeight
) {
	const canvas = document.getElementById(canvasId);
	const ctx = canvas.getContext("2d");

	const engine = Matter.Engine.create();
	const renderer = Matter.Render.create({
		canvas: canvas,
		engine: engine,
		options: {
			width: canvas.width,
			height: canvas.height,
			wireframes: false,
		},
	});

	const flowers = [];

	function addFlower(x, y, width, height, imageUrl) {
		const flowerImage = new Image();
		flowerImage.src = imageUrl;

		flowerImage.onload = function () {
			const flowerOptions = {
				render: {
					sprite: {
						texture: flowerImage,
						xScale: width / flowerImage.width,
						yScale: height / flowerImage.height,
					},
				},
			};

			const flower = Matter.Bodies.rectangle(
				x,
				y,
				width,
				height,
				flowerOptions
			);

			const density = 0.0004;
			const friction = 0.1;
			const restitution = 0.1;

			flower.density = density;
			flower.friction = friction;
			flower.restitution = restitution;

			flowers.push(flower);
			Matter.World.add(engine.world, flower);
		};
	}

	function drawFlower(flower) {
		const position = flower.position;
		const angle = flower.angle;
		const flowerImage = flower.render.sprite.texture;
		const width = flowerImage.width * flower.render.sprite.xScale;
		const height = flowerImage.height * flower.render.sprite.yScale;

		ctx.save();
		ctx.translate(position.x, position.y);
		ctx.rotate(angle);
		ctx.drawImage(flowerImage, -width / 2, -height / 2, width, height);
		ctx.restore();
	}

	function animate() {
		engine.timing.timeScale = 0.5;
		Matter.Engine.update(engine);

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		flowers.forEach(function (flower) {
			const position = flower.position;
			const flowerImage = flower.render.sprite.texture;
			const width = flowerImage.width * flower.render.sprite.xScale;
			const height = flowerImage.height * flower.render.sprite.yScale;

			if (position.x < width / 2) {
				Matter.Body.setPosition(flower, {
					x: width / 2,
					y: position.y,
				});
				Matter.Body.setVelocity(flower, { x: 0, y: 0.1 });
			} else if (position.x > canvas.width - width / 2) {
				Matter.Body.setPosition(flower, {
					x: canvas.width - width / 2,
					y: position.y,
				});
				Matter.Body.setVelocity(flower, { x: 0, y: 0.1 });
			}

			if (position.y > canvas.height + height / 2) {
				Matter.Body.setStatic(flower, true);
				Matter.Body.setVelocity(flower, { x: 0, y: 0 });
				Matter.Body.setAngularVelocity(flower, 0);
				Matter.World.remove(engine.world, flower);
				const index = flowers.indexOf(flower);
				flowers.splice(index, 1);
			} else if (position.y > canvas.height - height / 2) {
				Matter.Body.setPosition(flower, {
					x: position.x,
					y: canvas.height - height / 2,
				});
				Matter.Body.setVelocity(flower, { x: 0, y: 0 });
			}

			drawFlower(flower);
		});

		requestAnimationFrame(animate);
	}

	for (let i = 0; i < flowerCount; i++) {
		const x = Math.random() * canvas.width;
		const y = Math.random() * canvas.height + -150;
		const imageUrl = canvas.getAttribute("data-img");
		addFlower(x, y, flowerWidth, flowerHeight, imageUrl);
	}

	animate();
}

$(".sunflower-trigger").on("mouseenter", function () {
	clearAnimations("sunflower");
	if ($(window).width() > 1200) {
		generateFallingFlowers("sunflower", 24, 120, 70);
	} else {
		generateFallingFlowers("sunflower", 24, 100, 60);
	}
});
$(".rapeseed-trigger").on("mouseenter", function () {
	clearAnimations("rapeseed");
	if ($(window).width() > 1200) {
		generateFallingFlowers("rapeseed", 24, 90, 100);
	} else {
		generateFallingFlowers("rapeseed", 24, 70, 90);
	}
});
$(".palm-trigger").on("mouseenter", function () {
	clearAnimations("palm");
	if ($(window).width() > 1200) {
		generateFallingFlowers("palm", 24, 130, 100);
	} else {
		generateFallingFlowers("palm", 24, 110, 90);
	}
});
