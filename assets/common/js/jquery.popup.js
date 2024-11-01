var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/common/scripts/jquery.popup.js ***!
  \********************************************/
const showPOPUP = event => {
  // External dependencies
  const jquery = window.jQuery;
  const popupRoot = jquery('#coca-popup');

  // Detect the target and container for popup.
  const target = jquery(event.target);
  const containerClassList = target.parent().attr('class').trim();
  const wrapperClassList = target.parent().parent().attr('class').trim();
  const containerClass = containerClassList.split(/\s+/)[0];
  const wrapperClass = wrapperClassList.split(/\s+/)[0];
  if (!!containerClass && !!wrapperClass) {
    const hidePopup = (clickEvent, areaTarget) => {
      const cocaPopupRoot = jquery('#coca-popup');
      const popupContainer = cocaPopupRoot.find('.popup-container');
      if (areaTarget === 'button') {
        cocaPopupRoot.removeClass('view');
        cocaPopupRoot.addClass('hide');
        popupContainer.html('');
      }
      if (areaTarget === 'any' && !clickEvent.target.closest(`.${containerClass}`) && !clickEvent.target.closest('.popup-close')) {
        cocaPopupRoot.removeClass('view');
        cocaPopupRoot.addClass('hide');
        popupContainer.html('');
      }
    };

    // verify the landing element is existed or not.
    if (!popupRoot.length) {
      jquery('body').append(
      // eslint-disable-next-line max-len
      '<div id="coca-popup" class="view"><div class="popup-wrapper"><div class="popup-close">╳</div><div class="popup-container"></div></div></div>');
      const close = jquery('#coca-popup .popup-close');
      const popupContainer = jquery('#coca-popup .popup-container');
      close.on('click', xEvent => hidePopup(xEvent, 'button'));
      popupContainer.on('click', anyEvent => hidePopup(anyEvent, 'any'));
    }

    // Detect the container for popup.
    const container = jquery('#coca-popup div.popup-container');

    // Determine the source root.
    const sourceContent = target.parent().parent().parent().parent();

    // Set html data for popup container.
    const clonedHtml = sourceContent.clone(true);

    // Collect html data from popup container.
    const widget = clonedHtml.find(`.${wrapperClass}`).parent().parent();
    widget.find(`.${containerClass}`).unwrap();
    widget.find(`.${containerClass}`).removeAttr('style');
    container.html(jquery(clonedHtml).prop('outerHTML'));

    // Clean html data from compare container.
    [].map.call(container.find(`.${containerClass}`).children(), (element, index) => {
      // remove old attribute and elements.
      if (containerClass === 'coca-bais-container') {
        if (![0, 1].includes(index)) {
          jquery(element).remove();
        } else {
          jquery(element).removeAttr('style');
        }
      }

      // remove old attribute and elements.
      if (containerClass === 'coca-bais-triple-container') {
        if (jquery(element).hasClass('image-wrapper')) {
          jquery(element).find('.label').remove();
          jquery(element).find('img').removeAttr('style');
        }
        if (jquery(element).hasClass('overlay')) {
          jquery(element).remove();
        }
        if (jquery(element).hasClass('popup-button')) {
          jquery(element).remove();
        }
      }
    });

    // Active the popup for view.
    if (popupRoot.hasClass('hide')) {
      popupRoot.removeClass('hide');
      popupRoot.removeClass('loaded');
      popupRoot.addClass('view');
    }
    if (jquery('#coca-popup.view').length) {
      window.setTimeout(() => {
        const popup = jquery('#coca-popup.view');
        popup.addClass('loaded');
        // let eventName = '';

        if (popup.find(`.${containerClass}`).length) {
          const compareRoot = popup.find(`.${containerClass}`);
          compareRoot.attr('data-id', compareRoot.attr('id'));
          const pluginSettings = compareRoot.data('settings');
          const settingsData = typeof pluginSettings === 'string' ? JSON.parse(pluginSettings) : pluginSettings;

          // Update class-list for elementor.
          // eslint-disable-next-line array-callback-return
          ['wp-post', 'wp-page'].forEach(position => {
            // eslint-disable-next-line
            if (jquery(`div[data-elementor-type="${position}"] #${compareRoot.attr('id')}`).length) {
              // eslint-disable-next-line
              container.addClass(jquery(`div[data-elementor-type="${position}"]`).attr('class'));
            }
          });
          if (containerClass === 'coca-bais-container') {
            // eventName = 'resize.coca_image_compare';
            compareRoot.coca_imageCompare(settingsData);
            compareRoot.addClass('hide');
            compareRoot.addClass('popup-loaded');
          }
          if (containerClass === 'coca-bais-triple-container') {
            // eventName = 'resize.coca_triple_image_compare';
            compareRoot.coca_tripleImageCompare(settingsData);
            compareRoot.addClass('hide');
            compareRoot.addClass('popup-loaded');
          }
        }
      }, 600);
      window.setTimeout(() => {
        const popup = jquery('#coca-popup.view');
        popup.find(`.${containerClass}`).removeClass('hide');
      }, 700);

      // window.setTimeout( () => {
      // 	const popup = jquery( '#coca-popup.view' );
      // 	popup.find( `.${ containerClass } img` ).css( 'height', '100%' );
      // }, 800 );
    }
  }
};

// fire copy
window.jQuery('.coca-bais-triple-container .popup-button, .coca-bais-container .popup-button').on('click', showPOPUP);

//# sourceMappingURL=jquery.popup.js.map