/* -------------------------------------------------------------------------
myKeys App
------------------------------------------------------------------------- */

const keyCodeContainer = document.querySelector('.key-code');
const keyPressedContainer = document.querySelector('.key');

function displayCode(e) {
  let displayedKey = e.key;
   
  if (e.keyCode === 32) {
    displayedKey = 'Spacebar';
  }

  keyCodeContainer.textContent = e.keyCode;
  keyPressedContainer.textContent = displayedKey;
  keyPressedContainer.style.setProperty('display', 'block');
}

window.addEventListener('keydown', displayCode);
