var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/common/scripts/copy.js ***!
  \************************************/
// coca_do_copy_the_shortcode
const cocaDoCopyTheShortcode = event => {
  const copyText = event.target;
  let time = 0;
  if (copyText.value !== '') {
    copyText.focus();
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    const elem = document.getElementById('coca_bais_copy_html');
    elem.style.display = 'block';
    const copyAlert = function () {
      if (time === 200) {
        window.clearInterval(id);
        elem.style.transform = 'translateX(200%)';
        elem.style.opacity = '0';
      } else {
        time++;
        elem.style.transform = 'translateX(0%)';
        elem.style.opacity = '1';
      }
    };
    const id = window.setInterval(copyAlert, 10);
  }
};

// fire copy
if (!!document.querySelectorAll('.coca_bais_slider_shortcode').length) {
  [].map.call(document.querySelectorAll('.coca_bais_slider_shortcode'), shortcode => {
    shortcode.addEventListener('click', cocaDoCopyTheShortcode);
  });
}

//# sourceMappingURL=copy-shortcode.js.map