/******/ "use strict";
/******/ var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps}                                 props icon is the SVG component to render
 *                                                          size is a number specifiying the icon size in pixels
 *                                                          Other props will be passed to wrapped SVG component
 * @param {import('react').ForwardedRef<HTMLElement>} ref   The forwarded ref to the SVG element.
 *
 * @return {JSX.Element}  Icon component
 */
function Icon({
  icon,
  size = 24,
  ...props
}, ref) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props,
    ref
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Icon));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/image.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/image.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (image);
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/trash.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/trash.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const trash = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trash);
//# sourceMappingURL=trash.js.map

/***/ }),

/***/ "./src/admin/scripts/components/EditPost.jsx":
/*!***************************************************!*\
  !*** ./src/admin/scripts/components/EditPost.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tabs */ "./src/admin/scripts/components/Tabs.jsx");

// External dependencies


// WordPress dependencies




// Internal dependencies

class EditPost extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.defaultColorProps = {
      hex: '',
      rgb: {},
      hsv: {},
      hsl: {},
      source: 'hex',
      oldHue: 0
    };
    this.defaultPaddingProps = {
      top: '0',
      right: '20px',
      bottom: '0',
      left: '20px'
    };
    this.state = {
      is_mounted: false,
      post_id: document.querySelector('#post_ID').value,
      active_tab: 'content',
      slider_type: 'default',
      before_after_panel_open: true,
      indicator_panel_open: false,
      settings_panel_open: false,
      overlay_panel_open: true,
      handle_panel_open: false,
      divider_panel_open: false,
      label_panel_open: false,
      before_image: '',
      middle_image: '',
      after_image: '',
      indicator_image: '',
      image_size: 'full',
      before_image_label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Before', 'wp-before-after-image-slider'),
      middle_image_label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Middle', 'wp-before-after-image-slider'),
      after_image_label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('After', 'wp-before-after-image-slider'),
      default_offset: 50,
      trigger_type: 'drag',
      orientation: 'horizontal',
      show_overlay: true,
      show_labels: true,
      slider_template: 'default',
      show_popup: false,
      popup_position: 'bottom-right',
      overlay_color_normal: this.defaultColorProps,
      overlay_color_hover: this.defaultColorProps,
      handle_icon_color_normal: this.defaultColorProps,
      handle_icon_color_hover: this.defaultColorProps,
      handle_background_color_normal: this.defaultColorProps,
      handle_background_color_hover: this.defaultColorProps,
      handle_border_style: 'solid',
      handle_border_width: '3px',
      handle_border_color_normal: this.defaultColorProps,
      handle_border_color_hover: this.defaultColorProps,
      divider_color_normal: this.defaultColorProps,
      divider_width: '3px',
      label_horizontal_alignment: 'middle',
      label_vertical_alignment: 'middle',
      label_alignment: 0,
      label_text_color_before: this.defaultColorProps,
      label_text_color_middle: this.defaultColorProps,
      label_text_color_after: this.defaultColorProps,
      label_background_color_before: this.defaultColorProps,
      label_background_color_middle: this.defaultColorProps,
      label_background_color_after: this.defaultColorProps,
      label_border_style: 'none',
      label_border_width: '2px',
      label_border_color_normal: this.defaultColorProps,
      label_padding: null,
      customToggles: {}
    };
    this.proFeatures = ['indicator_image', 'default_offset', 'slider_template', 'show_popup', 'popup_position', 'overlay_color_normal', 'overlay_color_hover', 'overlay_gradient_normal', 'overlay_gradient_hover', 'handle_icon_color_normal', 'handle_icon_color_hover', 'handle_background_color_normal', 'handle_background_color_hover', 'handle_background_gradient_normal', 'handle_background_gradient_hover', 'handle_border_style', 'handle_border_width', 'handle_border_color_normal', 'handle_border_color_hover', 'divider_color_normal', 'divider_width', 'label_horizontal_alignment', 'label_vertical_alignment', 'label_alignment', 'label_text_color_normal', 'label_text_color_hover', 'label_background_color_normal', 'label_background_color_hover', 'label_border_color_normal', 'label_border_color_hover', 'label_padding'];
    this.defaultProSettings = {
      is_pro_active: false,
      is_triple_active: false
    };
    this.proSettings = window.COCA_BAIS_PRO || this.defaultProSettings;
    this.buyNowUrl = 'https://codecanel.com/wp-before-after-image-slider/';
    this.handleUpdateAttributes = this.handleUpdateAttributes.bind(this);
  }
  componentDidMount() {
    // clean local cache
    window.localStorage.removeItem('coca_bais_data');

    // data from database
    const savedMetadata = window.COCA_BAIS_META_DATA || {};
    this.setState(prevState => ({
      ...prevState,
      ...savedMetadata,
      is_mounted: true
    }));
  }

  // Update all attributes
  handleUpdateAttributes(attributes) {
    this.setState(prevState => ({
      ...prevState,
      ...attributes
    }));

    // update to local storage
    window.localStorage.setItem('coca_bais_data', JSON.stringify({
      ...this.state,
      ...attributes
    }));
  }
  render() {
    if (this.state.is_mounted) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: 'panel-wrapper'
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
        updateAttributes: this.handleUpdateAttributes,
        attributes: this.state,
        proSettings: this.proSettings,
        proFeatureEnabled: this.proSettings.is_pro_active,
        proFeatures: this.proFeatures,
        buyPro: this.buyNowUrl
      }));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditPost);

/***/ }),

/***/ "./src/admin/scripts/components/Tabs.jsx":
/*!***********************************************!*\
  !*** ./src/admin/scripts/components/Tabs.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tabs_ContentTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/ContentTab */ "./src/admin/scripts/components/tabs/ContentTab.jsx");
/* harmony import */ var _tabs_StylesTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/StylesTab */ "./src/admin/scripts/components/tabs/StylesTab.jsx");

// WordPress dependencies



// Internal dependencies


const TabsList = [{
  name: 'content',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content ', 'wp-before-after-image-slider'),
  className: 'tab-one-content'
}, {
  name: 'styles',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Styles ', 'wp-before-after-image-slider'),
  className: 'tab-two-styles'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  // update parent attributes
  const updateAttributes = stateOptions => {
    const features = props.proFeatures;
    const isProFeature = props.proFeatureEnabled;
    [].forEach.call(Object.entries(stateOptions), ([key, value]) => {
      if (features.includes(key) && !isProFeature) {
        return;
      }
      props.updateAttributes({
        ...props.attributes,
        [key]: value
      });
    });
  };
  const renderTab = tab => {
    let ActiveTab = _tabs_ContentTab__WEBPACK_IMPORTED_MODULE_3__["default"];
    if (tab.name === 'styles') {
      ActiveTab = _tabs_StylesTab__WEBPACK_IMPORTED_MODULE_4__["default"];
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActiveTab, {
      ...props,
      tabInfo: tab,
      updateAttributes: updateAttributes
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "coca-bais-panel",
    orientation: "horizontal",
    tabs: TabsList,
    initialTabName: props.attributes.active_tab,
    selectOnMove: true,
    onSelect: tabName => {
      updateAttributes({
        active_tab: tabName
      });
    }
  }, tab => renderTab(tab));
});

/***/ }),

/***/ "./src/admin/scripts/components/control/color-control.jsx":
/*!****************************************************************!*\
  !*** ./src/admin/scripts/components/control/color-control.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

// External dependencies

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userOptions => {
  const getAttr = attribute => {
    const store = userOptions.props.attributes;
    return !!store[attribute] ? store[attribute] : '';
  };
  let verifiedValue;
  const currentValue = getAttr(userOptions.attribute);
  if (!!currentValue.hex) {
    verifiedValue = currentValue.hex;
  } else {
    verifiedValue = userOptions.defaultValue || '';
  }
  const toggleOpen = () => userOptions.props.updateAttributes({
    customToggles: {
      [userOptions.attribute]: true
    }
  });
  const toggleClose = () => userOptions.props.updateAttributes({
    customToggles: {
      [userOptions.attribute]: false
    }
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    label: userOptions.labelText,
    onClick: toggleOpen,
    style: {
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: getAttr(userOptions.attribute).hex
  }), userOptions.labelText), userOptions.props.attributes.customToggles[userOptions.attribute] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    animate: true,
    flip: true,
    expandOnMobile: true,
    onClose: toggleClose
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: verifiedValue,
    enableAlpha: true,
    onChangeComplete: value => userOptions.props.updateAttributes({
      [userOptions.attribute]: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    onClick: () => userOptions.props.updateAttributes({
      [userOptions.attribute]: ''
    }),
    style: {
      padding: '5px 10px',
      marginLeft: '18px',
      marginBottom: '18px'
    }
  }, userOptions.resetText)));
});

/***/ }),

/***/ "./src/admin/scripts/components/control/gradient-control.jsx":
/*!*******************************************************************!*\
  !*** ./src/admin/scripts/components/control/gradient-control.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

// External dependencies

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userOptions => {
  const getAttr = attribute => {
    const store = userOptions.props.attributes;
    return !!store[attribute] ? store[attribute] : '';
  };
  const attribute = getAttr(userOptions.attribute);
  /* eslint-disable-next-line */
  const defaultValue = 'linear-gradient(, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)';
  /* eslint-disable-next-line */
  const verifiedValue = attribute ? attribute : userOptions.defaultValue || defaultValue;
  const toggleOpen = () => userOptions.props.updateAttributes({
    customToggles: {
      ...userOptions.props.attributes.customToggles,
      /* eslint-disable-next-line */
      [userOptions.attribute]: !userOptions.props.attributes.customToggles[userOptions.attribute]
    }
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    label: userOptions.labelText,
    showTooltip: true,
    onClick: toggleOpen,
    style: {
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: verifiedValue
  }), userOptions.labelText), userOptions.props.attributes.customToggles[userOptions.attribute] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
    gradients: [],
    value: verifiedValue,
    onChange: value => userOptions.props.updateAttributes({
      [userOptions.attribute]: value
    })
  }));
});

/***/ }),

/***/ "./src/admin/scripts/components/elements/image-picker.jsx":
/*!****************************************************************!*\
  !*** ./src/admin/scripts/components/elements/image-picker.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImagePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ImagePicker(props) {
  const pickerList = props.options || [];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'coca-image-picker'
  }, [].map.call(pickerList, item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    key: item.value,
    className: `picker-item ${item.value === props.value ? 'active' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    value: item.value,
    checked: item.value === props.value,
    onChange: event => props.onChange(event.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: item.imageUrl,
    alt: item.label
  }))));
}

/***/ }),

/***/ "./src/admin/scripts/components/elements/media-uploader.jsx":
/*!******************************************************************!*\
  !*** ./src/admin/scripts/components/elements/media-uploader.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/image.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/trash.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);

// WordPress dependencies.




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  const [uploadOptions, setUploadOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }
  const uploadMedia = event => {
    event.preventDefault();
    if (!event.target.closest('.remove-icon')) {
      if (uploadOptions.frame) {
        uploadOptions.frame.open();
        return;
      }

      // Create a new media frame
      // ref: https://codex.wordpress.org/Javascript_Reference/wp.media
      // ref: https://wp-mix.com/wordpress-image-upload-jquery/
      // ref: https://gist.github.com/RadGH/966f8c756c5e142a5f489e86e751eacb
      const frame = window.wp.media.frames.file_frame = window.wp.media({
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select or Upload an image', 'wp-before-after-image-slider-pro'),
        button: {
          text: 'Select Image'
        },
        library: {
          type: 'image'
        },
        multiple: false
      });

      // Fire select event on user activity.
      frame.on('select', function () {
        const attachment = frame.state().get('selection').first().toJSON();
        if (props.onChange && !!attachment.url && isImage(attachment.url)) {
          props.onChange(attachment);
          setUploadOptions(prevState => ({
            ...prevState,
            attachment,
            invalidImage: false,
            noticeClose: false
          }));
        } else {
          setUploadOptions(prevState => ({
            ...prevState,
            attachment,
            invalidImage: true,
            noticeClose: false
          }));
        }
      });

      // Finally, open the modal on click
      frame.open();

      // Update state with the frame data.
      setUploadOptions(prevState => ({
        ...prevState,
        attachment: {},
        frame,
        noticeClose: false
      }));
    }
  };
  const onRemoveImage = () => {
    if (props.onChange) {
      props.onChange(null);
    }
  };

  // Placeholder image styles.
  const ImageStyles = {
    margin: '0 auto',
    width: '100%',
    height: '60%',
    verticalAlign: 'middle',
    marginTop: '10px'
  };
  const viewImage = () => {
    // Render broken uploader placeholder to preview panel.
    if (!!uploadOptions.invalidImage || !!props.value && !isImage(props.value.url)) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
        className: 'placeholder-broken-image',
        style: ImageStyles
      });
    }

    // Render uploaded image to preview panel.
    if (props.value && props.value.url && isImage(props.value.url)) {
      const imageSrcUrl = props.value.sizes && props.value.sizes.thumbnail ? props.value.sizes.thumbnail.url : props.value.url;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: imageSrcUrl,
        alt: props.value.alt
      });
    }

    // Render uploader placeholder to preview panel.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      className: 'placeholder-upload-image',
      style: ImageStyles
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'coca-upload-media__component'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'coca-upload-media',
    onClick: uploadMedia
  }, !uploadOptions.invalidImage && props.value && props.value.url && isImage(props.value.url) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: 'remove-icon',
    href: '#',
    onClick: onRemoveImage
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
  })), viewImage(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'overlay'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Choose a image', 'wp-before-after-image-slider-pro')))), (!!uploadOptions.invalidImage || !!props.value && !isImage(props.value.url)) && !uploadOptions.noticeClose && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: "error",
    politeness: "assertive",
    onRemove: () => setUploadOptions(prevState => ({
      ...prevState,
      noticeClose: true
    })),
    spokenMessage: `Filetype ${uploadOptions.attachment.mime} is not supported for Image Slider. Please select an Image file.`
  }, "Filetype ", uploadOptions.attachment.mime, " is not supported for Image Slider. Please select an Image file."));
}

// const ALLOWED_MEDIA_TYPES = [ 'audio' ];
//
// export default function() {
//   return (
// 	<MediaUploadCheck>
// 	  <MediaUpload
// 		onSelect={ ( media ) =>
// 		  console.log( 'selected ' + media.length )
// 		}
// 		allowedTypes={ ALLOWED_MEDIA_TYPES }
// 		value={ mediaId }
// 		render={ ( { open } ) => (
// 		  <Button onClick={ open }>Open Media Library</Button>
// 		) }
// 	  />
// 	</MediaUploadCheck>
//   );
// }

/***/ }),

/***/ "./src/admin/scripts/components/elements/pro-feature-control.jsx":
/*!***********************************************************************!*\
  !*** ./src/admin/scripts/components/elements/pro-feature-control.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

// WordPress dependencies


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  if (!props.proFeatureEnabled && props.proFeatures && props.proFeatures.includes(props.value)) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'coca-disable-feature',
      style: props.style
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Disabled, null, props.children), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'buy-pro-overlay'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
      href: props.buyPro,
      className: "components-button is-primary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BUY PRO', 'wp-before-after-image-slider'))));
  }
  return props.children;
}

/***/ }),

/***/ "./src/admin/scripts/components/panels/DividerStylesTab.jsx":
/*!******************************************************************!*\
  !*** ./src/admin/scripts/components/panels/DividerStylesTab.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/pro-feature-control */ "./src/admin/scripts/components/elements/pro-feature-control.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/admin/scripts/utils.js");
/* harmony import */ var _control_color_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../control/color-control */ "./src/admin/scripts/components/control/color-control.jsx");

// WordPress dependencies
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis



// Internal dependencies



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  const getAttr = attribute => {
    const store = props.attributes;
    return !!store[attribute] ? store[attribute] : '';
  };
  const BorderColorField = (0,_control_color_control__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props,
    attribute: 'divider_color_normal',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Divider', 'wp-before-after-image-slider'),
    initialOpen: false,
    opened: props.attributes.divider_panel_open,
    onToggle: () => props.updateAttributes({
      divider_panel_open: !props.attributes.divider_panel_open
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props,
    value: 'divider_color_normal'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('COLOR:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, BorderColorField))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('WIDTH:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'group-field',
    style: {
      width: '100%',
      display: 'flex',
      gap: '10px',
      marginRight: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    isPressEnterToChange: true,
    onChange: value => props.updateAttributes({
      divider_width: value
    }),
    value: getAttr('divider_width')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    onChange: value => props.updateAttributes({
      divider_width: value
    }),
    max: 100,
    min: 0,
    step: 1,
    allowReset: true,
    withInputField: false,
    value: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getNumberFromString)(getAttr('divider_width'))
  })))))));
});

/***/ }),

/***/ "./src/admin/scripts/components/panels/HandleStylesTab.jsx":
/*!*****************************************************************!*\
  !*** ./src/admin/scripts/components/panels/HandleStylesTab.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/pro-feature-control */ "./src/admin/scripts/components/elements/pro-feature-control.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/admin/scripts/utils.js");
/* harmony import */ var _control_color_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../control/color-control */ "./src/admin/scripts/components/control/color-control.jsx");

// External dependencies


// WordPress dependencies
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis




// Internal dependencies



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  const [toggleOptions, updateToggleOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const getAttr = attribute => {
    const store = props.attributes;
    return !!store[attribute] ? store[attribute] : '';
  };
  const HandleBorderField = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'field-control__label'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BORDER STYLE', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: props.attributes.handle_border_style,
    onChange: value => props.updateAttributes({
      handle_border_style: value
    }),
    options: [].map.call(['none', 'solid', 'double', 'dotted', 'dashed', 'groove'], borderType => ({
      // eslint-disable-next-line @wordpress/i18n-no-variables
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)((0,_utils__WEBPACK_IMPORTED_MODULE_5__.ucFirst)(borderType), 'wp-before-after-image-slider'),
      value: borderType
    }))
  }))), props.attributes.handle_border_style !== 'none' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'field-control__label'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BORDER WIDTH:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'group-field',
    style: {
      width: '100%',
      display: 'flex',
      gap: '10px',
      marginRight: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    isPressEnterToChange: true,
    onChange: value => props.updateAttributes({
      handle_border_width: value
    }),
    value: getAttr('handle_border_width')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    onChange: value => props.updateAttributes({
      handle_border_width: value
    }),
    max: 100,
    min: 0,
    step: 1,
    allowReset: true,
    withInputField: false,
    value: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getNumberFromString)(getAttr('handle_border_width'))
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'field-control__label'
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BORDER COLOR:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'handle_border_color_normal',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'handle_border_color_hover',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  }))))) : null);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Handle', 'wp-before-after-image-slider'),
    initialOpen: false,
    opened: props.attributes.handle_panel_open,
    onToggle: () => props.updateAttributes({
      handle_panel_open: !props.attributes.handle_panel_open
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props,
    value: 'handle_icon_color_normal'
  }, props.attributes.slider_template !== 'style07' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ARROW COLOR:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'handle_icon_color_normal',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'handle_icon_color_hover',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })))), !['style03', 'style04', 'style06'].includes(props.attributes.slider_template) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BACKGROUND COLOR:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'handle_background_color_normal',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'handle_background_color_hover',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BACKGROUND GRADIENT:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wp-before-after-image-slider'),
    showTooltip: true,
    onClick: () => updateToggleOptions({
      ...toggleOptions,
      background_gradient_default: !toggleOptions.background_gradient_default
    }),
    style: {
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: getAttr('handle_background_gradient_normal')
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wp-before-after-image-slider')), toggleOptions.background_gradient_default && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
    gradients: [],
    value: getAttr('handle_background_gradient_normal'),
    onChange: value => props.updateAttributes({
      handle_background_gradient_normal: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wp-before-after-image-slider'),
    showTooltip: true,
    onClick: () => updateToggleOptions({
      ...toggleOptions,
      background_gradient_hover: !toggleOptions.background_gradient_hover
    }),
    style: {
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: getAttr('handle_background_gradient_hover')
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wp-before-after-image-slider')), toggleOptions.background_gradient_hover && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
    gradients: [],
    value: getAttr('handle_background_gradient_hover'),
    onChange: value => props.updateAttributes({
      handle_background_gradient_hover: value
    })
  }))))), !['style02', 'style04', 'style07'].includes(props.attributes.slider_template) && HandleBorderField)));
});

/***/ }),

/***/ "./src/admin/scripts/components/panels/ImagesContentTab.jsx":
/*!******************************************************************!*\
  !*** ./src/admin/scripts/components/panels/ImagesContentTab.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/admin/scripts/utils.js");
/* harmony import */ var _elements_media_uploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/media-uploader */ "./src/admin/scripts/components/elements/media-uploader.jsx");
/* harmony import */ var _common_scripts_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/scripts/utils */ "./src/common/scripts/utils.js");

// WordPress dependencies



// Internal dependencies



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  const isTripleEnabled = !!props.proSettings.is_triple_active;
  const sliderType = props.attributes.slider_type;
  const isTriple = isTripleEnabled && sliderType === 'triple';
  let tabTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before & After Images', 'wp-before-after-image-slider');
  if (isTripleEnabled) {
    tabTitle = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Comparable Images', 'wp-before-after-image-slider');
  }
  const SliderTypeField = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SLIDER TYPE', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: props.attributes.slider_type,
    onChange: value => props.updateAttributes({
      slider_type: value
    }),
    options: [{
      label: 'Two Image',
      value: 'default'
    }, {
      label: 'Three Image',
      value: 'triple'
    }]
  })));
  const ImageSizeField = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('IMAGE SIZE', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: props.attributes.image_size || 'full',
    onChange: value => props.updateAttributes({
      image_size: value
    }),
    options: [].map.call(window.COCA_MEDIA_SIZES, size => ({
      label: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.ucFirst)(size),
      value: size
    }))
  })));
  const ImageUploadField = options => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, options.labelText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_media_uploader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: options.value,
    onChange: attachment => props.updateAttributes({
      [options.attribute]: attachment
    })
  })));
  const ImageLabelField = options => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, options.labelText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: (0,_common_scripts_utils__WEBPACK_IMPORTED_MODULE_5__.stripAllTags)(options.value),
    onChange: value => props.updateAttributes({
      [options.attribute]: (0,_common_scripts_utils__WEBPACK_IMPORTED_MODULE_5__.stripAllTags)(value)
    })
  })));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: tabTitle,
    initialOpen: false,
    opened: props.attributes.before_after_panel_open,
    onToggle: () => props.updateAttributes({
      before_after_panel_open: !props.attributes.before_after_panel_open
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, isTripleEnabled && SliderTypeField, !isTriple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ImageUploadField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BEFORE IMAGE', 'wp-before-after-image-slider'),
    attribute: 'before_image',
    value: props.attributes.before_image
  }), ImageUploadField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('AFTER IMAGE', 'wp-before-after-image-slider'),
    attribute: 'after_image',
    value: props.attributes.after_image
  })), isTriple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ImageUploadField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BEFORE IMAGE', 'wp-before-after-image-slider'),
    attribute: 'before_image',
    value: props.attributes.before_image
  }), ImageUploadField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MIDDLE IMAGE', 'wp-before-after-image-slider'),
    attribute: 'middle_image',
    value: props.attributes.middle_image
  }), ImageUploadField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('AFTER IMAGE', 'wp-before-after-image-slider'),
    attribute: 'after_image',
    value: props.attributes.after_image
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-gap'
  }), ImageSizeField, !isTriple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ImageLabelField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BEFORE IMAGE LABEL', 'wp-before-after-image-slider'),
    attribute: 'before_image_label',
    value: props.attributes.before_image_label
  }), ImageLabelField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('AFTER IMAGE LABEL', 'wp-before-after-image-slider'),
    attribute: 'after_image_label',
    value: props.attributes.after_image_label
  })), isTriple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ImageLabelField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BEFORE IMAGE LABEL', 'wp-before-after-image-slider'),
    attribute: 'before_image_label',
    value: props.attributes.before_image_label
  }), ImageLabelField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MIDDLE IMAGE LABEL', 'wp-before-after-image-slider'),
    attribute: 'middle_image_label',
    value: props.attributes.middle_image_label
  }), ImageLabelField({
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('AFTER IMAGE LABEL', 'wp-before-after-image-slider'),
    attribute: 'after_image_label',
    value: props.attributes.after_image_label
  }))));
});

/***/ }),

/***/ "./src/admin/scripts/components/panels/IndicatorImageContentTab.jsx":
/*!**************************************************************************!*\
  !*** ./src/admin/scripts/components/panels/IndicatorImageContentTab.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_media_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/media-uploader */ "./src/admin/scripts/components/elements/media-uploader.jsx");
/* harmony import */ var _elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/pro-feature-control */ "./src/admin/scripts/components/elements/pro-feature-control.jsx");

// WordPress dependencies



// Internal dependencies


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indicator Image', 'wp-before-after-image-slider'),
  initialOpen: false,
  opened: props.attributes.indicator_panel_open,
  onToggle: () => props.updateAttributes({
    indicator_panel_open: !props.attributes.indicator_panel_open
  })
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
  ...props,
  value: 'indicator_image'
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: 'field-control field-inline'
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
  className: "field-control__label"
}, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('IMAGE', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
  className: 'fields-wrapper inline'
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_media_uploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
  value: props.attributes.indicator_image,
  onChange: attachment => props.updateAttributes({
    indicator_image: attachment
  })
})))))));

/***/ }),

/***/ "./src/admin/scripts/components/panels/LabelStylesTab.jsx":
/*!****************************************************************!*\
  !*** ./src/admin/scripts/components/panels/LabelStylesTab.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/pro-feature-control */ "./src/admin/scripts/components/elements/pro-feature-control.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/admin/scripts/utils.js");
/* harmony import */ var _control_color_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../control/color-control */ "./src/admin/scripts/components/control/color-control.jsx");

// WordPress dependencies
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis




// Internal dependencies




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  const [toggleOptions, updateToggleOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const isTripleEnabled = !!props.proSettings.is_triple_active;
  const sliderType = props.attributes.slider_type;
  const isTriple = isTripleEnabled && sliderType === 'triple';
  const getAttr = attribute => {
    const store = props.attributes;
    return !!store[attribute] ? store[attribute] : '';
  };
  const verticalAlignments = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'wp-before-after-image-slider'),
    value: 'left'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'wp-before-after-image-slider'),
    value: 'middle'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'wp-before-after-image-slider'),
    value: 'right'
  }];
  const horizontalAlignments = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top', 'wp-before-after-image-slider'),
    value: 'top'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'wp-before-after-image-slider'),
    value: 'middle'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom', 'wp-before-after-image-slider'),
    value: 'bottom'
  }];
  const LabelAlignmentControls = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, props.attributes.orientation === 'horizontal' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    onChange: value => props.updateAttributes({
      label_horizontal_alignment: value
    }),
    value: getAttr('label_horizontal_alignment'),
    options: horizontalAlignments
  }), props.attributes.orientation === 'vertical' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    onChange: value => props.updateAttributes({
      label_vertical_alignment: value
    }),
    value: getAttr('label_vertical_alignment'),
    options: verticalAlignments
  }));
  const isDefaultState = !isTriple && props.attributes.slider_template === 'default';
  const LabelAlign = isDefaultState && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ALIGN:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'group-field',
    style: {
      width: '100%',
      display: 'flex',
      gap: '10px',
      marginRight: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    onChange: value => props.updateAttributes({
      label_alignment: value
    }),
    max: 100,
    min: 0,
    step: 1,
    allowReset: true,
    withInputField: false,
    value: props.attributes.handle_border_radius
  }))));
  const LabelTextColorsField = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'label_text_color_before',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, isTriple && (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'label_text_color_middle',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Middle', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'label_text_color_after',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })));
  const LabelBackgroundColorsField = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'label_background_color_before',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, isTriple && (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'label_background_color_middle',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Middle', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'label_background_color_after',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })));
  const BorderTypeField = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: props.attributes.label_border_style,
    onChange: value => props.updateAttributes({
      label_border_style: value
    }),
    options: [].map.call(['none', 'solid', 'double', 'dotted', 'dashed', 'groove'], borderType => ({
      // eslint-disable-next-line @wordpress/i18n-no-variables
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)((0,_utils__WEBPACK_IMPORTED_MODULE_5__.ucFirst)(borderType), 'wp-before-after-image-slider'),
      value: borderType
    }))
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'wp-before-after-image-slider'),
    initialOpen: false,
    opened: props.attributes.label_panel_open,
    onToggle: () => props.updateAttributes({
      label_panel_open: !props.attributes.label_panel_open
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props,
    value: 'label_horizontal_alignment'
  }, props.attributes.slider_template === 'default' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ALIGNMENT:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LabelAlignmentControls, null))), LabelAlign, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('TEXT COLOR:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, LabelTextColorsField)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BACKGROUND COLOR:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, LabelBackgroundColorsField)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BACKGROUND GRADIENT:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wp-before-after-image-slider'),
    showTooltip: true,
    onClick: () => updateToggleOptions({
      ...toggleOptions,
      background_gradient_before: !toggleOptions.background_gradient_before
    }),
    style: {
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: getAttr('label_background_gradient_before')
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Before', 'wp-before-after-image-slider')), toggleOptions.background_gradient_before && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
    gradients: [],
    value: getAttr('label_background_gradient_before'),
    onChange: value => props.updateAttributes({
      label_background_gradient_before: value
    })
  })), isTriple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Middle', 'wp-before-after-image-slider'),
    showTooltip: true,
    onClick: () => updateToggleOptions({
      ...toggleOptions,
      background_gradient_middle: !toggleOptions.background_gradient_middle
    }),
    style: {
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: getAttr('label_background_gradient_middle')
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Middle', 'wp-before-after-image-slider')), toggleOptions.background_gradient_middle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
    gradients: [],
    value: getAttr('label_background_gradient_middle'),
    onChange: value => props.updateAttributes({
      label_background_gradient_middle: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wp-before-after-image-slider'),
    showTooltip: true,
    onClick: () => updateToggleOptions({
      ...toggleOptions,
      background_gradient_after: !toggleOptions.background_gradient_after
    }),
    style: {
      gap: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: getAttr('label_background_gradient_after')
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('After', 'wp-before-after-image-slider')), toggleOptions.background_gradient_after && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
    gradients: [],
    value: getAttr('label_background_gradient_after'),
    onChange: value => props.updateAttributes({
      label_background_gradient_after: value
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BORDER STYLE', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, BorderTypeField)), props.attributes.label_border_style !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BORDER WIDTH:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'group-field',
    style: {
      width: '100%',
      display: 'flex',
      gap: '10px',
      marginRight: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    isPressEnterToChange: true,
    onChange: value => props.updateAttributes({
      label_border_width: value
    }),
    value: getAttr('label_border_width')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    onChange: value => props.updateAttributes({
      label_border_width: value
    }),
    max: 100,
    min: 0,
    step: 1,
    allowReset: true,
    withInputField: false,
    value: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getNumberFromString)(getAttr('label_border_width'))
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BORDER COLOR:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props,
    attribute: 'label_border_color_normal',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PADDING:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'group-field',
    style: {
      width: '100%',
      display: 'flex',
      gap: '10px',
      marginRight: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: '',
    values: getAttr('label_padding'),
    onChange: value => props.updateAttributes({
      label_padding: value
    })
  })))))));
});

/***/ }),

/***/ "./src/admin/scripts/components/panels/OverlayStylesTab.jsx":
/*!******************************************************************!*\
  !*** ./src/admin/scripts/components/panels/OverlayStylesTab.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/pro-feature-control */ "./src/admin/scripts/components/elements/pro-feature-control.jsx");
/* harmony import */ var _control_color_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../control/color-control */ "./src/admin/scripts/components/control/color-control.jsx");
/* harmony import */ var _control_gradient_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../control/gradient-control */ "./src/admin/scripts/components/control/gradient-control.jsx");

// WordPress dependencies



// Internal dependencies



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  const getAttr = attribute => {
    const store = props.attributes;
    return !!store[attribute] ? store[attribute] : '';
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Overlay', 'wp-before-after-image-slider'),
    initialOpen: false,
    opened: props.attributes.overlay_panel_open,
    onToggle: () => props.updateAttributes({
      overlay_panel_open: !props.attributes.overlay_panel_open
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props,
    value: 'overlay_color_normal'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label",
    style: {
      maxWidth: '200px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BACKGROUND COLOR:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_4__["default"])({
    props,
    attribute: 'overlay_color_normal',
    defaultValue: 'rgba(0, 0, 0, 0)',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_color_control__WEBPACK_IMPORTED_MODULE_4__["default"])({
    props,
    attribute: 'overlay_color_hover',
    defaultValue: 'rgba(0, 0, 0, 0.5)',
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wp-before-after-image-slider'),
    resetText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'wp-before-after-image-slider')
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('BACKGROUND GRADIENT:', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_gradient_control__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props,
    attribute: 'overlay_gradient_normal',
    defaultValue: getAttr('overlay_gradient_normal'),
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default', 'wp-before-after-image-slider')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field'
  }, (0,_control_gradient_control__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props,
    attribute: 'overlay_gradient_hover',
    defaultValue: getAttr('overlay_gradient_hover'),
    labelText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wp-before-after-image-slider')
  })))))));
});

/***/ }),

/***/ "./src/admin/scripts/components/panels/SettingsContentTab.jsx":
/*!********************************************************************!*\
  !*** ./src/admin/scripts/components/panels/SettingsContentTab.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_image_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/image-picker */ "./src/admin/scripts/components/elements/image-picker.jsx");
/* harmony import */ var _elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/pro-feature-control */ "./src/admin/scripts/components/elements/pro-feature-control.jsx");

// WordPress dependencies




const coreAssets = window.COCA_BAIS_ASSETS;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  const isTripleEnabled = !!props.proSettings.is_triple_active;
  const sliderType = props.attributes.slider_type;
  const isTriple = isTripleEnabled && sliderType === 'triple';
  const OffsetField = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('DIVIDER DEFAULT OFFSET', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    initialPosition: 50,
    max: 100,
    min: 0,
    value: parseInt(props.attributes.default_offset),
    onChange: value => props.updateAttributes({
      default_offset: value
    })
  })));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Settings', 'wp-before-after-image-slider'),
    initialOpen: false,
    opened: props.attributes.settings_panel_open,
    onToggle: () => props.updateAttributes({
      settings_panel_open: !props.attributes.settings_panel_open
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, !isTriple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props,
    value: 'default_offset'
  }, OffsetField), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('TRIGGER TYPE', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: props.attributes.trigger_type || 'drag',
    onChange: value => props.updateAttributes({
      trigger_type: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Drag', 'wp-before-after-image-slider'),
      value: 'drag'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hover', 'wp-before-after-image-slider'),
      value: 'hover'
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SLIDER ORIENTATION', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_image_picker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    options: [{
      value: 'horizontal',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal', 'wp-before-after-image-slider'),
      imageUrl: coreAssets.orientation.hr
    }, {
      value: 'vertical',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical', 'wp-before-after-image-slider'),
      imageUrl: coreAssets.orientation.vr
    }],
    value: props.attributes.orientation || 'horizontal',
    onChange: value => props.updateAttributes({
      orientation: value
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SHOW OVERLAY', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: '',
    checked: props.attributes.show_overlay || false,
    onChange: value => props.updateAttributes({
      show_overlay: value
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SHOW Labels', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: '',
    checked: props.attributes.show_labels || false,
    onChange: value => props.updateAttributes({
      show_labels: value
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props,
    value: 'slider_template'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SLIDER TEMPLATE', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_image_picker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    options: [{
      value: 'default',
      label: 'default',
      imageUrl: coreAssets.templates.st01
    }, {
      value: 'style01',
      label: 'Item 1',
      imageUrl: coreAssets.templates.st02
    }, {
      value: 'style02',
      label: 'Item 2',
      imageUrl: coreAssets.templates.st03
    }, {
      value: 'style03',
      label: 'Item 3',
      imageUrl: coreAssets.templates.st04
    }, {
      value: 'style04',
      label: 'Item 4',
      imageUrl: coreAssets.templates.st05
    }, {
      value: 'style05',
      label: 'Item 5',
      imageUrl: coreAssets.templates.st06
    }, {
      value: 'style06',
      label: 'Item 6',
      imageUrl: coreAssets.templates.st07
    }, {
      value: 'style07',
      label: 'Item 7',
      imageUrl: coreAssets.templates.st08
    }],
    value: props.attributes.slider_template || 'default',
    onChange: value => props.updateAttributes({
      slider_template: value
    })
  })))), props.attributes.slider_type === 'default' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_elements_pro_feature_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props,
    value: 'slider_template'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SHOW POPUP', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: '',
    checked: props.attributes.show_popup || false,
    onChange: value => props.updateAttributes({
      show_popup: value
    })
  }))), props.attributes.show_popup && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'field-control field-inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "field-control__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('POPUP POSITION', 'wp-before-after-image-slider')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'fields-wrapper inline'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    value: props.attributes.popup_position,
    onChange: value => props.updateAttributes({
      popup_position: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Left', 'wp-before-after-image-slider'),
      value: 'top-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top Right', 'wp-before-after-image-slider'),
      value: 'top-right'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Left', 'wp-before-after-image-slider'),
      value: 'bottom-left'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bottom Right', 'wp-before-after-image-slider'),
      value: 'bottom-right'
    }]
  }))))));
});

/***/ }),

/***/ "./src/admin/scripts/components/tabs/ContentTab.jsx":
/*!**********************************************************!*\
  !*** ./src/admin/scripts/components/tabs/ContentTab.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _panels_ImagesContentTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panels/ImagesContentTab */ "./src/admin/scripts/components/panels/ImagesContentTab.jsx");
/* harmony import */ var _panels_IndicatorImageContentTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panels/IndicatorImageContentTab */ "./src/admin/scripts/components/panels/IndicatorImageContentTab.jsx");
/* harmony import */ var _panels_SettingsContentTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panels/SettingsContentTab */ "./src/admin/scripts/components/panels/SettingsContentTab.jsx");

// WordPress dependencies


// Internal dependencies



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  const isTripleEnabled = !!props.proSettings.is_triple_active;
  const sliderType = props.attributes.slider_type;
  const isTriple = isTripleEnabled && sliderType === 'triple';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_ImagesContentTab__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...props
  }), !isTriple && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_IndicatorImageContentTab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_SettingsContentTab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props
  }));
});

/***/ }),

/***/ "./src/admin/scripts/components/tabs/StylesTab.jsx":
/*!*********************************************************!*\
  !*** ./src/admin/scripts/components/tabs/StylesTab.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _panels_OverlayStylesTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panels/OverlayStylesTab */ "./src/admin/scripts/components/panels/OverlayStylesTab.jsx");
/* harmony import */ var _panels_HandleStylesTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panels/HandleStylesTab */ "./src/admin/scripts/components/panels/HandleStylesTab.jsx");
/* harmony import */ var _panels_DividerStylesTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panels/DividerStylesTab */ "./src/admin/scripts/components/panels/DividerStylesTab.jsx");
/* harmony import */ var _panels_LabelStylesTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../panels/LabelStylesTab */ "./src/admin/scripts/components/panels/LabelStylesTab.jsx");

// WordPress dependencies


// Internal dependencies




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, props.attributes.show_overlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_OverlayStylesTab__WEBPACK_IMPORTED_MODULE_2__["default"], {
  ...props
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_HandleStylesTab__WEBPACK_IMPORTED_MODULE_3__["default"], {
  ...props
}), !['style01', 'style07'].includes(props.attributes.slider_template) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_DividerStylesTab__WEBPACK_IMPORTED_MODULE_4__["default"], {
  ...props
}), props.attributes.show_labels && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_panels_LabelStylesTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
  ...props
})));

/***/ }),

/***/ "./src/admin/scripts/utils.js":
/*!************************************!*\
  !*** ./src/admin/scripts/utils.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNumberFromString: () => (/* binding */ getNumberFromString),
/* harmony export */   ucFirst: () => (/* binding */ ucFirst)
/* harmony export */ });
const ucFirst = str => {
  str = str.replace(/(\-|\_)/g, ' ');
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const getNumberFromString = string => {
  if (!!string.toString() && string.toString().match(/\d+/)) {
    return Number(string.toString().match(/\d+/).join());
  }
  return 0;
};

/***/ }),

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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

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
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
/*!************************************!*\
  !*** ./src/admin/scripts/panel.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_EditPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/EditPost */ "./src/admin/scripts/components/EditPost.jsx");

// WordPress dependencies


// Internal dependencies

function App() {
  // const params = new URLSearchParams( document.location.search );
  // const page = params.get( 'page' );

  let PageComponent = null;
  if (document.body.classList.contains('post-type-coca_bais')) {
    PageComponent = _components_EditPost__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PageComponent, null);
}
window.addEventListener('load', function () {
  const editorRootId = '#coca_bais__edit_panel_root';
  if (document.querySelector(editorRootId)) {
    // render components in reactjs 18
    if (typeof _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot === 'function') {
      const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector(editorRootId));
      root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null));
    } else {
      // render components in reactjs 17
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null), document.querySelector(editorRootId));
    }
  }
}, false);
})();


//# sourceMappingURL=panel.js.map