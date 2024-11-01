var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/widgets/bais-triples/scripts.js ***!
  \*********************************************/
const tripleWidgetSlug = 'coca_bais_before_after_image_slider';
['resize'].forEach(eventType => {
  window.jQuery(window).on(eventType, function () {
    window.jQuery(`.elementor-widget-${tripleWidgetSlug} .coca-bais-triple-container`).each(function () {
      window.jQuery(window).trigger('resize.coca_triple_image_compare');
    });
  });
});
window.jQuery(window).on('elementor/frontend/init', function () {
  window.elementorFrontend.hooks.addAction(`frontend/element_ready/${tripleWidgetSlug}.default`, function ($scope) {
    const $container = $scope.find('.coca-bais-triple-container');
    const $options = $container.data('settings');
    if (typeof $options === 'object' && typeof $container.coca_tripleImageCompare === 'function') {
      $scope.find('.coca-bais-triple-container').coca_tripleImageCompare($options);
    }
  });
});

//# sourceMappingURL=bais-triple.js.map