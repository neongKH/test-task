/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/eco-question/eco-question.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/eco-question/eco-question.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! matter-js */ "./node_modules/matter-js/build/matter.js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_1__);



if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".forest-container").length) {
  var shovel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".shovel");
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    defaults: {
      ease: "linear"
    }
  });
  var tlRowFirst = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    defaults: {
      ease: "linear"
    }
  });
  var tlRowSecond = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    defaults: {
      ease: "linear"
    }
  });
  var tlRowThird = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    defaults: {
      ease: "linear"
    }
  });
  var isMobile = window.matchMedia("(max-width: 768px)").matches;
  tl.to(shovel, {
    left: "84%",
    duration: 3
  }).to(shovel, {
    rotate: "270deg",
    rotateY: "180deg",
    duration: 0
  }).to(shovel, {
    top: isMobile ? "70px" : "100px",
    duration: 1.5
  }).to(shovel, {
    rotate: "0deg",
    rotateY: "180deg",
    duration: 0
  }).to(shovel, {
    left: "0%",
    duration: 3
  }).to(shovel, {
    rotate: "270deg",
    rotateY: "180deg",
    duration: 0
  }).to(shovel, {
    top: isMobile ? "150px" : "200px",
    duration: 1.5
  }).to(shovel, {
    rotate: "0deg",
    rotateY: "0deg",
    duration: 0
  }).to(shovel, {
    left: "68%",
    duration: 3
  });
  tlRowFirst.to(".row.first .tree:nth-child(2)", {
    opacity: "0",
    duration: 0,
    delay: "0.2"
  }).to(".row.first .tree:nth-child(3)", {
    opacity: "0",
    duration: 0,
    delay: "0.4"
  }).to(".row.first .tree:nth-child(4)", {
    opacity: "0",
    duration: 0,
    delay: "0.6"
  }).to(".row.first .tree:nth-child(5)", {
    opacity: "0",
    duration: 0,
    delay: "0.8"
  }).to(".row.first .tree:nth-child(6)", {
    opacity: "0",
    duration: 0,
    delay: "0.8"
  });
  tlRowSecond.to(".row.second .tree:nth-child(6)", {
    opacity: "0",
    duration: 0,
    delay: "3.5"
  }).to(".row.second .tree:nth-child(5)", {
    opacity: "0",
    duration: 0,
    delay: "1"
  }).to(".row.second .tree:nth-child(4)", {
    opacity: "0",
    duration: 0,
    delay: "0.7"
  }).to(".row.second .tree:nth-child(3)", {
    opacity: "0",
    duration: 0,
    delay: "0.7"
  }).to(".row.second .tree:nth-child(2)", {
    opacity: "0",
    duration: 0,
    delay: "0.7"
  }).to(".row.second .tree:nth-child(1)", {
    opacity: "0",
    duration: 0,
    delay: "0.7"
  });
  tlRowThird.to(".row.third .tree:nth-child(1)", {
    opacity: "0",
    duration: 0,
    delay: "8"
  }).to(".row.third .tree:nth-child(2)", {
    opacity: "0",
    duration: 0,
    delay: "1"
  }).to(".row.third .tree:nth-child(3)", {
    opacity: "0",
    duration: 0,
    delay: "0.7"
  }).to(".row.third .tree:nth-child(4)", {
    opacity: "0",
    duration: 0,
    delay: "0.7"
  }).to(".row.third .tree:nth-child(5)", {
    opacity: "0",
    duration: 0,
    delay: "0.7"
  });
}
function clearAnimations(exceptCanvasId) {
  var canvases = jquery__WEBPACK_IMPORTED_MODULE_0___default()("canvas");
  canvases.each(function () {
    var canvas = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var canvasId = canvas.attr("id");
    if (canvasId !== exceptCanvasId) {
      var ctx = canvas[0].getContext("2d");
      ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
      var canvasClone = canvas.clone(true);
      canvas.replaceWith(canvasClone);
      if (matter_js__WEBPACK_IMPORTED_MODULE_1__.RenderPixi && matter_js__WEBPACK_IMPORTED_MODULE_1__.RenderPixi.ins && matter_js__WEBPACK_IMPORTED_MODULE_1__.RenderPixi.ins[canvasId]) {
        matter_js__WEBPACK_IMPORTED_MODULE_1__.RenderPixi.ins[canvasId].stop();
        delete matter_js__WEBPACK_IMPORTED_MODULE_1__.RenderPixi.ins[canvasId];
      }
    }
  });
}
function generateFallingFlowers(canvasId, flowerCount, flowerWidth, flowerHeight) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  var engine = matter_js__WEBPACK_IMPORTED_MODULE_1__.Engine.create();
  var renderer = matter_js__WEBPACK_IMPORTED_MODULE_1__.Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: canvas.width,
      height: canvas.height,
      wireframes: false
    }
  });
  var flowers = [];
  function addFlower(x, y, width, height, imageUrl) {
    var flowerImage = new Image();
    flowerImage.src = imageUrl;
    flowerImage.onload = function () {
      var flowerOptions = {
        render: {
          sprite: {
            texture: flowerImage,
            xScale: width / flowerImage.width,
            yScale: height / flowerImage.height
          }
        }
      };
      var flower = matter_js__WEBPACK_IMPORTED_MODULE_1__.Bodies.rectangle(x, y, width, height, flowerOptions);
      var density = 0.0004;
      var friction = 0.1;
      var restitution = 0.1;
      flower.density = density;
      flower.friction = friction;
      flower.restitution = restitution;
      flowers.push(flower);
      matter_js__WEBPACK_IMPORTED_MODULE_1__.World.add(engine.world, flower);
    };
  }
  function drawFlower(flower) {
    var position = flower.position;
    var angle = flower.angle;
    var flowerImage = flower.render.sprite.texture;
    var width = flowerImage.width * flower.render.sprite.xScale;
    var height = flowerImage.height * flower.render.sprite.yScale;
    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.rotate(angle);
    ctx.drawImage(flowerImage, -width / 2, -height / 2, width, height);
    ctx.restore();
  }
  function animate() {
    engine.timing.timeScale = 0.5;
    matter_js__WEBPACK_IMPORTED_MODULE_1__.Engine.update(engine);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flowers.forEach(function (flower) {
      var position = flower.position;
      var flowerImage = flower.render.sprite.texture;
      var width = flowerImage.width * flower.render.sprite.xScale;
      var height = flowerImage.height * flower.render.sprite.yScale;
      if (position.x < width / 2) {
        matter_js__WEBPACK_IMPORTED_MODULE_1__.Body.setPosition(flower, {
          x: width / 2,
          y: position.y
        });
        matter_js__WEBPACK_IMPORTED_MODULE_1__.Body.setVelocity(flower, {
          x: 0,
          y: 0.1
        });
      } else if (position.x > canvas.width - width / 2) {
        matter_js__WEBPACK_IMPORTED_MODULE_1__.Body.setPosition(flower, {
          x: canvas.width - width / 2,
          y: position.y
        });
        matter_js__WEBPACK_IMPORTED_MODULE_1__.Body.setVelocity(flower, {
          x: 0,
          y: 0.1
        });
      }
      if (position.y > canvas.height + height / 2) {
        matter_js__WEBPACK_IMPORTED_MODULE_1__.Body.setStatic(flower, true);
        matter_js__WEBPACK_IMPORTED_MODULE_1__.Body.setVelocity(flower, {
          x: 0,
          y: 0
        });
        matter_js__WEBPACK_IMPORTED_MODULE_1__.Body.setAngularVelocity(flower, 0);
        matter_js__WEBPACK_IMPORTED_MODULE_1__.World.remove(engine.world, flower);
        var index = flowers.indexOf(flower);
        flowers.splice(index, 1);
      } else if (position.y > canvas.height - height / 2) {
        matter_js__WEBPACK_IMPORTED_MODULE_1__.Body.setPosition(flower, {
          x: position.x,
          y: canvas.height - height / 2
        });
        matter_js__WEBPACK_IMPORTED_MODULE_1__.Body.setVelocity(flower, {
          x: 0,
          y: 0
        });
      }
      drawFlower(flower);
    });
    requestAnimationFrame(animate);
  }
  for (var i = 0; i < flowerCount; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height + -150;
    var imageUrl = canvas.getAttribute("data-img");
    addFlower(x, y, flowerWidth, flowerHeight, imageUrl);
  }
  animate();
}
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sunflower-trigger").on("mouseenter", function () {
  clearAnimations("sunflower");
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1200) {
    generateFallingFlowers("sunflower", 24, 120, 70);
  } else {
    generateFallingFlowers("sunflower", 24, 100, 60);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".rapeseed-trigger").on("mouseenter", function () {
  clearAnimations("rapeseed");
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1200) {
    generateFallingFlowers("rapeseed", 24, 90, 100);
  } else {
    generateFallingFlowers("rapeseed", 24, 70, 90);
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".palm-trigger").on("mouseenter", function () {
  clearAnimations("palm");
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 1200) {
    generateFallingFlowers("palm", 24, 130, 100);
  } else {
    generateFallingFlowers("palm", 24, 110, 90);
  }
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var $menuButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".menu-button");
var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()("body");
var header = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header");
$menuButton.on("click", function (e) {
  var _this = this;
  e.preventDefault();
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass("active")) {
    $body.removeClass("menu-open");
    setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".menu").toggleClass("active");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this).toggleClass("active");
    }, 1500);
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".menu").toggleClass("active");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass("active");
    setTimeout(function () {
      $body.toggleClass("menu-open");
    }, 500);
  }
});
function stickyHeader() {
  var currentScroll = window.pageYOffset;
  if (currentScroll > 0) {
    header.addClass("sticky");
  } else {
    header.removeClass("sticky");
  }
}
window.addEventListener("load", function () {
  stickyHeader();
});
window.addEventListener("scroll", function () {
  stickyHeader();
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".menu").on("click", function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").removeClass("menu-open");
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(".menu__holder").on("click", function (e) {
  e.stopPropagation();
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-toggle="anchor"]').on("click", function (e) {
  e.preventDefault();
  var $dataTarget = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr("data-target");
  var $targetPos = jquery__WEBPACK_IMPORTED_MODULE_1___default()($dataTarget).offset().top - 50;
  var $href = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr("href");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("body").removeClass("menu-open");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".menu").removeClass("active");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(".menu-button").removeClass("active");
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("html,body").animate({
    scrollTop: $targetPos
  }, 1500, function () {
    window.history.pushState(null, null, $href);
  });
});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  Inputmask({
    mask: "+38 (099) 999 99 99",
    keepStatic: true,
    clearIncomplete: true,
    autoUnmask: false,
    removeMaskOnSubmit: false,
    showMaskOnHover: false,
    alternatormarker: "|"
  }).mask(".input-mask");
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header.js */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_eco_question_eco_question_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/eco-question/eco-question.js */ "./src/blocks/modules/eco-question/eco-question.js");



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map