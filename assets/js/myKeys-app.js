/* -------------------------------------------------------------------------
myKeys App
------------------------------------------------------------------------- */

const keyCodeContainer = document.querySelector('.key-code');
const keyPressedContainer = document.querySelector('.key');

function displayCode(e) {
  keyCodeContainer.textContent = e.keyCode;
  keyPressedContainer.textContent = e.key;
  keyPressedContainer.style.setProperty('display', 'block');
}

window.addEventListener('keydown', displayCode);
