import  keyDataRu from './modules/keyEnForKeyboard.js';
import  keyDataEn  from './modules/keyRuForKeyboard.js';

class keyBoardKey {
  constructor(keyDataRu) {
    this.keyDataRu = keyDataRu;
    this.element = null;
  }
}

createKeyElement() {
  this.element = document.createElement('div');
  this.element.classList.add('key');
  this.element.textContent = this.keyData.text;
  this.element.dataset.keyCode = this.keyData.keyCode;
  this.element.dataset.shift = this.keyData.shift;

  this.element.addEventListener('click', function ()  {
    this.onClick();
  });

  return this.element;
};
