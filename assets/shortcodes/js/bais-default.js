var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./src/shortcodes/bais-default/scripts.js ***!
  \************************************************/
['resize'].forEach(eventType => {
  window.jQuery(window).on(eventType, function () {
    window.jQuery('.coca-bais-shortcode .coca-bais-container').each(function () {
      window.jQuery(window).trigger('resize.coca_image_compare');
    });
  });
});
window.jQuery(document).ready(() => {
  [].map.call(window.jQuery('.coca-bais-shortcode'), element => {
    const wrapper = window.jQuery(element).find('.coca-bais-container');
    if (typeof wrapper.coca_imageCompare === 'function') {
      wrapper.coca_imageCompare(wrapper.data('settings'));
    }
  });
});

//# sourceMappingURL=bais-default.js.map