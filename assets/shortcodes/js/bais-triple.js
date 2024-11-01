var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./src/shortcodes/bais-triples/scripts.js ***!
  \************************************************/
['resize'].forEach(eventType => {
  window.jQuery(window).on(eventType, function () {
    window.jQuery('.coca-bais-shortcode .coca-bais-triple-container').each(function () {
      window.jQuery(window).trigger('resize.coca_triple_image_compare');
    });
  });
});
window.jQuery(document).ready(() => {
  [].map.call(window.jQuery('.coca-bais-shortcode'), element => {
    const wrapper = window.jQuery(element).find('.coca-bais-triple-container');
    if (typeof wrapper.coca_tripleImageCompare === 'function') {
      wrapper.coca_tripleImageCompare(wrapper.data('settings'));
    }
  });
});

//# sourceMappingURL=bais-triple.js.map