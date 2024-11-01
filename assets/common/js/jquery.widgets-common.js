var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./src/common/scripts/jquery.is-in-viewport.js ***!
  \*****************************************************/
// Define view port counter function.
window.jQuery.fn.coca_isInViewPort = function () {
  const jquery = window.jQuery;
  const elementTop = jquery(this).offset().top;
  const elementBottom = elementTop + jquery(this).outerHeight();
  const viewportTop = jquery(window).scrollTop();
  const viewportBottom = viewportTop + jquery(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

//# sourceMappingURL=jquery.widgets-common.js.map