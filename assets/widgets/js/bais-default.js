var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/widgets/bais-default/scripts.js ***!
  \*********************************************/
const defaultWidgetSlug = 'coca_bais_before_after_image_slider';
['resize'].forEach(eventType => {
  window.jQuery(window).on(eventType, function () {
    window.jQuery(`.elementor-widget-${defaultWidgetSlug} .coca-bais-container`).each(function () {
      window.jQuery(window).trigger('resize.coca_image_compare');
    });
  });
});
window.jQuery(window).on('elementor/frontend/init', function () {
  window.elementorFrontend.hooks.addAction(`frontend/element_ready/${defaultWidgetSlug}.default`, function ($scope) {
    const $container = $scope.find('.coca-bais-container');
    const $options = $container.data('settings');
    if (typeof $options === 'object' && typeof $container.coca_imageCompare === 'function') {
      $scope.find('.coca-bais-container').coca_imageCompare($options);
    }
  });
});

//# sourceMappingURL=bais-default.js.map