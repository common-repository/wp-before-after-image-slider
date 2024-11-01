/******/ "use strict";
/******/ var __webpack_modules__ = ({

/***/ "./src/common/scripts/utils.js":
/*!*************************************!*\
  !*** ./src/common/scripts/utils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateElementOffset: () => (/* binding */ calculateElementOffset),
/* harmony export */   stripAllTags: () => (/* binding */ stripAllTags)
/* harmony export */ });
// calculate the offset.
const calculateElementOffset = function (options) {
  let scaledHeight, scaledWidth;
  const userOptions = options || {
    container: null,
    width: 0,
    height: 0,
    dimension: 0,
    use_dimension: false
  };
  if (userOptions.container.attr('data-id')) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const expectedWidth = windowWidth * 0.2;
    const expectedHeight = windowHeight * 0.2;
    const targetWidth = windowWidth - expectedWidth;
    const targetHeight = windowHeight - expectedHeight;
    const ratio = userOptions.width / userOptions.height;
    if (ratio > targetWidth / targetHeight) {
      scaledWidth = targetWidth;
      scaledHeight = targetWidth / ratio;
    } else {
      scaledHeight = targetHeight;
      scaledWidth = targetHeight * ratio;
    }
  } else {
    scaledWidth = userOptions.width;
    scaledHeight = userOptions.height;
  }
  let dimension = {};
  if (userOptions.use_dimension) {
    dimension = {
      cw: `${userOptions.dimension * scaledWidth}px`,
      ch: `${userOptions.dimension * scaledHeight}px`
    };
  }
  return {
    w: `${scaledWidth}px`,
    h: `${scaledHeight}px`,
    ...dimension
  };
};
function stripAllTags(htmlString) {
  if (htmlString === null || htmlString === '') {
    return '';
  }
  htmlString = htmlString.toString();

  // Remove HTML tags
  let cleanedHtml = htmlString.replace(/<\/?[^>]+(>|$)/g, '');

  // Replace all double quote.
  cleanedHtml = cleanedHtml.replace(/"/g, '\\\"');
  cleanedHtml = cleanedHtml.replace(/'/g, '\\\'');
  cleanedHtml = cleanedHtml.replace(/\\\\/g, '\\');
  return cleanedHtml.trim();
}

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************************!*\
  !*** ./src/common/scripts/jquery.image-compare-triple.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/common/scripts/utils.js");
// Internal dependencies


// Define image compare function.
window.jQuery.fn.coca_tripleImageCompare = function (userOptions) {
  const jquery = window.jQuery;
  const defaultOptions = {
    before_label: 'Before',
    middle_label: 'Middle',
    after_label: 'After',
    classes: [],
    no_overlay: false,
    handle_bottom_only: false
  };
  const options = jquery.extend(defaultOptions, userOptions);
  return this.each(function () {
    const container = jquery(this);
    const wrapperClasses = [...options.classes];
    const cssPrefix = 'coca-image-compare';
    if (options.handle_bottom_only) {
      wrapperClasses.push('handle-bottom');
      container.find('.scroller').wrap('<div class="triple-handle-wrapper"></div>');
    }
    wrapperClasses.push(`${cssPrefix}-triple-wrapper`);
    container.wrap(`<div class='${wrapperClasses.join(' ')}'></div>`);
    container.addClass(`${cssPrefix}-triple-container`);

    // Add overlay when it permitted showing.
    if (!options.no_overlay) {
      container.append('<div class="overlay"></div>');
    }

    // set label with each image.
    const ImageTop = container.find('.top');
    const ImageMiddle = container.find('.middle');
    const ImageBottom = container.find('.bottom');
    const beforeLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripAllTags)(options.before_label) || 'Before';
    const middleLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripAllTags)(options.middle_label) || 'Middle';
    const afterLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripAllTags)(options.after_label) || 'After';
    ImageTop.append(`<div class="label">${beforeLabel}</div>`);
    ImageMiddle.append(`<div class="label">${middleLabel}</div>`);
    ImageBottom.append(`<div class="label">${afterLabel}</div>`);

    // set action for resize the triple image compare wrapper.
    jquery(window).on('resize.coca_triple_image_compare', () => {
      // clean pre-defined styles from container.
      container.removeAttr('style');
      container.find('.top img').removeAttr('style');
      if (container.find('.top img').width() > container.width()) {
        container.find('img').css('max-width', container.width());
        container.find('img').css('width', container.width());
      }

      // Adjust width, height for the container.
      /* eslint-disable-next-line */
      container.attr('data-max-width', container.find('.top img').width());
      /* eslint-disable-next-line */
      container.attr('data-height', container.find('.top img').height());
      container.css('max-width', container.find('.top img').width());
      container.css('height', container.find('.top img').height());
      container.css('opacity', 1);
    });

    // I hope this over-commenting helps. Let's do this!
    // Let's use the 'active' variable to let us know when we're using it
    let active = false;

    // and define our dom elements to make it easier to read
    const scrollerMiddle = container.find('.scroller-middle');
    const scrollerTop = container.find('.scroller-top');

    // Let's use this function
    const scrollIt = function (x) {
      // Calculate our transform
      const lowestPosition = Math.min(x, container.width());
      const transform = Math.max(0, lowestPosition);

      // relates an element's border box to the document original.
      const topOffset = Math.round(scrollerTop.offset().left);
      const middleOffset = Math.round(scrollerMiddle.offset().left);

      // Set variable for scroller with.
      const scroller = 45;
      const scrlHalf = Math.round(scroller / 2);
      const border = 3;
      let leftOffset = 0;

      // we show all our bottom image but how much of our middle and top,
      // that'll depend on what we're dragging
      // if we're dragging the middle slider
      if (active === 'middle') {
        ImageMiddle.css('width', transform + 'px');
        scrollerMiddle.css('left', `${transform - scrlHalf}px`);

        // if we're using scroller-middle, middle must always be to the right of top
        if (topOffset > middleOffset - border) {
          const topWidth = transform - border;
          leftOffset = transform - (scrlHalf + border);
          ImageTop.css('width', `${topWidth}px`);
          scrollerTop.css('left', `${leftOffset}px`);
        }
      }

      // if we're dragging the top slider
      if (active === 'top') {
        ImageTop.css('width', transform + 'px');
        scrollerTop.css('left', `${transform - scrlHalf}px`);

        // if we're using scroller-top, top must always be to the left
        if (topOffset > middleOffset - border) {
          const middleWidth = transform - border;
          leftOffset = transform - (scrlHalf - border);
          ImageMiddle.css('width', `${middleWidth}px`);
          scrollerMiddle.css('left', `${leftOffset}px`);
        }
      }
    };

    // First, we'll have to set up our event listeners
    // We want to watch for clicks on our scroller
    scrollerMiddle.on('mousedown', () => {
      active = 'middle';
      scrollerMiddle.addClass('scrolling');
    });
    jquery(document.body).on('mouseup', () => {
      active = false;
      scrollerMiddle.removeClass('scrolling');
    });
    jquery(document.body).on('mouseleave', () => {
      active = false;
      scrollerMiddle.removeClass('scrolling');
    });

    // We'll have to do the same for our top scroller
    scrollerTop.on('mousedown', function () {
      active = 'top';
      scrollerTop.addClass('scrolling');
    });
    jquery(document.body).on('mouseup', () => {
      active = false;
      scrollerTop.removeClass('scrolling');
    });
    jquery(document.body).on('mouseleave', () => {
      active = false;
      scrollerTop.removeClass('scrolling');
    });

    // Let's figure out where their mouse is at
    jquery(document.body).on('mousemove', eMouseMove => {
      if (!active) {
        return;
      }
      // Their mouse is here...
      let x = eMouseMove.pageX;
      // but we want it relative to our wrapper
      x -= container.offset().left;
      // Okay, let's change our state
      scrollIt(x);
    });

    // And finally, let's repeat the process for touch events
    // first our middle scroller...
    scrollerMiddle.on('touchstart', () => {
      active = 'middle';
      scrollerMiddle.addClass('scrolling');
    });
    jquery(document.body).on('touchend', () => {
      active = false;
      scrollerMiddle.removeClass('scrolling');
    });
    jquery(document.body).on('touchcancel', () => {
      active = false;
      scrollerMiddle.removeClass('scrolling');
    });

    // then scroller top, our second scroller
    scrollerTop.on('touchstart', () => {
      active = 'top';
      scrollerTop.addClass('scrolling');
    });
    jquery(document.body).on('touchend', () => {
      active = false;
      scrollerTop.removeClass('scrolling');
    });
    jquery(document.body).on('touchcancel', () => {
      active = false;
      scrollerTop.removeClass('scrolling');
    });
    container.on('touchmove', eTouchMove => {
      if (!active) {
        return;
      }
      eTouchMove.preventDefault();
      let x = eTouchMove.touches[0].pageX;
      x -= container.offset().left;
      scrollIt(x);
    });

    // Let's set our opening state based off the width,
    // we want to show a bit of both images so the user can see what's going on
    container.imagesLoaded().done(function () {
      const actualWidth = container.data('maxWidth');
      active = 'middle';
      scrollIt(Math.round(actualWidth) * 0.7);
      active = 'top';
      scrollIt(Math.round(actualWidth) * 0.3);
      active = false;
    });
    const observer = new window.MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes') {
          const actualWidth = mutation.target.dataset.maxWidth;
          active = 'middle';
          scrollIt(Math.round(actualWidth) * 0.7);
          active = 'top';
          scrollIt(Math.round(actualWidth) * 0.3);
          active = false;
        }
      });
    });
    observer.observe(container[0], {
      attributes: true //configure it to listen to attribute changes
    });

    // fire resize event.
    jquery(window).trigger('resize.coca_triple_image_compare');
  });
};
})();


//# sourceMappingURL=jquery.image-compare-triple.js.map