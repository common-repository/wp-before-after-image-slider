var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./src/common/scripts/control-image-picker.js ***!
  \****************************************************/
window.addEventListener('elementor/init', () => {
  const elementor = window.elementor;
  const imagePickerItemView = elementor.modules.controls.BaseData.extend({
    onReady() {
      [].map.call(this.ui.input, inputElement => {
        if (inputElement.value === inputElement.dataset.value) {
          inputElement.parentNode.classList.add('active');
        } else {
          inputElement.parentNode.classList.remove('active');
        }
        inputElement.addEventListener('click', event => {
          [].map.call(this.ui.input, input => {
            input.dataset.state = '';
            input.parentNode.classList.remove('active');
          });

          // Set active state to current element.
          event.target.dataset.state = 'clicked';
          inputElement.parentNode.classList.add('active');
          this.setValue(event.target.dataset.value);
        });
      });
    }
  });
  elementor.addControlView('coca-image-picker-control', imagePickerItemView);
});

//# sourceMappingURL=image-picker.js.map