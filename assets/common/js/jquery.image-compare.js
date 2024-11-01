var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./src/common/scripts/jquery.image-compare.js ***!
  \****************************************************/
// Define image compare function.
window.jQuery.fn.coca_imageCompare = function (userOptions) {
  const jquery = window.jQuery;
  const defaultOptions = {
    default_offset_pct: 0.5,
    orientation: 'horizontal',
    before_label: 'Before',
    after_label: 'After',
    before_image: '',
    after_image: '',
    indicator_image: '',
    classes: [],
    show_labels: true,
    no_overlay: false,
    handle_bottom_only: false,
    move_slider_on_hover: false,
    move_with_handle_only: true,
    click_to_move: false
  };
  const options = jquery.extend(defaultOptions, userOptions);
  return this.each(function () {
    let imgHeight;
    let imgWidth;
    let offsetY;
    let offsetX;
    const container = jquery(this);
    const orientation = options.orientation;
    const wrapperClassList = [].join.call(options.classes, ' ');
    const classPrefix = 'coca-image-compare';
    const beforeD = orientation === 'vertical' ? 'down' : 'left';
    const afterD = orientation === 'vertical' ? 'up' : 'right';

    // Update wrapper class.
    const handleBottomClass = options.handle_bottom_only ? 'handle-bottom' : '';
    const noOverlayClass = options.no_overlay ? 'no-overlay' : '';
    container.wrap(`<div class='${wrapperClassList} ${classPrefix}-wrapper ${classPrefix}-${orientation} ${handleBottomClass}'></div>`);
    const beforeImg = container.find('img:first');
    const afterImg = container.find('img:last');
    container.addClass(`${classPrefix}-container`);
    beforeImg.addClass(`${classPrefix}-before`);
    afterImg.addClass(`${classPrefix}-after`);

    // create an indicator image feature
    if (options.indicator_image.length) {
      container.append(jquery(options.indicator_image).addClass(`${classPrefix}-overlay-image`));
    }
    container.append(`<div class='${classPrefix}-overlay ${noOverlayClass}'></div>`);
    container.append(`<div class='${classPrefix}-handle'></div>`);
    const overlay = container.find(`.${classPrefix}-overlay`);
    const slider = container.find(`.${classPrefix}-handle`);

    // Set handle position.
    if (options.handle_bottom_only) {
      slider.wrap(`<div class='${classPrefix}-handle-wrapper'></div>`);
    } else {
      slider.append(`<span class='${classPrefix}-${beforeD}-arrow'></span>`);
      slider.append(`<span class='${classPrefix}-${afterD}-arrow'></span>`);
    }

    // Add labels.
    if (options.show_labels) {
      const quote = options.before_label.indexOf("'") !== -1 ? '"' : "'";
      overlay.append(`<div class='${classPrefix}-before-label' data-content=${quote}${options.before_label}${quote}></div>`);
      overlay.append(`<div class='${classPrefix}-after-label' data-content=${quote}${options.after_label}${quote}></div>`);
    }
    const calcOffset = pct => {
      const [root] = container;

      // remove first.
      if (root.querySelector('img:first-child').style.width) {
        root.querySelector('img:first-child').style.width = '';
      }
      const sampleImageWidth = root.querySelector('img:first-child').width;
      [].forEach.call(root.querySelectorAll('img'), function (imageElement) {
        // Set image width.
        if (sampleImageWidth > root.clientWidth) {
          imageElement.style.width = `${root.clientWidth}px`;
        } else {
          imageElement.style.width = `${sampleImageWidth}px`;
        }

        // Set width and height when not exists.
        if (!imageElement.getAttribute('width')) {
          imageElement.setAttribute('width', imageElement.naturalWidth);
        }
        if (!imageElement.getAttribute('height')) {
          imageElement.setAttribute('height', imageElement.naturalHeight);
        }
      });
      let width = root.querySelector('img:first-child').width;
      let height = root.querySelector('img:first-child').height;
      if (container.hasClass('popup-loaded')) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const targetWidth = windowWidth - windowWidth * 0.2;
        const targetHeight = windowHeight - windowHeight * 0.2;
        const ratio = width / height;
        if (ratio > targetWidth / targetHeight) {
          width = targetWidth;
          height = targetWidth / ratio;
        } else {
          height = targetHeight;
          width = targetHeight * ratio;
        }
        [].forEach.call(root.querySelectorAll('img'), function (imageElement) {
          imageElement.style.width = `${width}px`;
        });
        width = root.querySelector('img:first-child').width;
        height = root.querySelector('img:first-child').height;
      }
      return {
        w: `${width}px`,
        h: `${height}px`,
        cw: `${pct * width}px`,
        ch: `${pct * height}px`
      };
    };
    const adjustContainer = function (offset) {
      if (orientation === 'vertical') {
        beforeImg.css('clip', `rect( 0, ${offset.w}, ${offset.ch}, 0)`);
        afterImg.css('clip', `rect( 0, ${offset.w}, ${offset.h}, 0)`);
      } else {
        beforeImg.css('clip', `rect( 0, ${offset.cw}, ${offset.h}, 0)`);
        afterImg.css('clip', `rect( 0, ${offset.w}, ${offset.h} , 0)`);
      }
      container.css('height', offset.h);
    };
    const adjustSliderWidth = function (offset) {
      container.css('max-width', offset.w);
    };
    const adjustSlider = function (offset) {
      slider.css(orientation === 'vertical' ? 'top' : 'left', orientation === 'vertical' ? offset.ch : offset.cw);
      adjustContainer(offset);
    };

    // Return the number specified or the min/max number if it outside the range given.
    const minMaxNumber = function (num, min, max) {
      return Math.max(min, Math.min(max, num));
    };

    // Calculate the slider percentage based on the position.
    const getSliderPercentage = function (positionX, positionY) {
      const vertical = (positionY - offsetY) / imgHeight;
      const horizontal = (positionX - offsetX) / imgWidth;
      const sliderPercentage = orientation === 'vertical' ? vertical : horizontal;
      return minMaxNumber(sliderPercentage, 0, 1);
    };

    // jquery( window ).on( 'resize.coca_image_compare', function() {
    // 	container.imagesLoaded().done( function() {
    // 		window.setTimeout( function() {
    // 			adjustSlider( calcOffset( options.default_offset_pct ) );
    // 			container.css( 'opacity', 1 );
    // 		}, 100 );
    // 	} );
    // } );

    jquery(document).ready(function () {
      container.imagesLoaded().done(function () {
        window.setTimeout(function () {
          const offset = calcOffset(options.default_offset_pct);
          adjustSliderWidth(offset);
          adjustSlider(offset);
          container.css('opacity', 1);
        }, 100);
      });
    });
    offsetX = 0;
    offsetY = 0;
    imgWidth = 0;
    imgHeight = 0;
    const onMoveStart = function (e) {
      if ((e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && orientation !== 'vertical') {
        e.preventDefault();
      } else if ((e.distX < e.distY && e.distX < -e.distY || e.distX > e.distY && e.distX > -e.distY) && orientation === 'vertical') {
        e.preventDefault();
      }
      container.addClass('active');
      offsetX = container.offset().left;
      offsetY = container.offset().top;
      imgWidth = beforeImg.width();
      imgHeight = beforeImg.height();
    };
    const onMove = function (e) {
      if (container.hasClass('active')) {
        adjustSlider(calcOffset(getSliderPercentage(e.pageX, e.pageY)));
        if (e.type === 'mousemove') {
          jquery(this).find(`.${classPrefix}-overlay`).addClass('hover');
        }
      }
    };
    const onMoveEnd = function (e) {
      container.removeClass('active');
      if (e.type === 'mouseleave') {
        jquery(this).find(`.${classPrefix}-overlay`).removeClass('hover');
      }
    };
    const moveTarget = options.move_with_handle_only ? slider : container;
    moveTarget.on('movestart', onMoveStart);
    moveTarget.on('move', onMove);
    if (options.move_slider_on_hover) {
      container.on('mouseenter', onMoveStart);
      container.on('mousemove', onMove);
      container.on('mouseleave', onMoveEnd);
    }
    slider.on('touchmove', function (e) {
      e.preventDefault();
    });
    container.find('img').on('mousedown', function (event) {
      event.preventDefault();
    });
    if (options.click_to_move) {
      container.on('click', function (e) {
        if (!e.target.closest('.popup-button')) {
          offsetX = container.offset().left;
          offsetY = container.offset().top;
          imgWidth = beforeImg.width();
          imgHeight = beforeImg.height();
          adjustSlider(getSliderPercentage(e.pageX, e.pageY));
        }
      });
    }
    window.jQuery(window).trigger('resize.coca_image_compare');
  });
};

//# sourceMappingURL=jquery.image-compare.js.map