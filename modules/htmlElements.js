class CreateHtml {
  constructor() {
    const { body } = document;

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const title = document.createElement('h1');
    title.classList.add('header__title');
    title.textContent = 'Виртуальная клавиатура';

    const textArea = document.createElement('textarea');
    textArea.classList.add('input__text-keyboard');

    const keyBoard = document.createElement('section');
    keyBoard.classList.add('keyboard');

    const keyDataEn = [
      {
        type: 'row',
        keys: [
          { text: '`', keycode: 192, shift: '~' },
          {
            text: '1', keycode: 49, shift: '!', subtext: '~',
          },
          {
            text: '2', keycode: 50, shift: '"', subtext: '"',
          },
          {
            text: '3', keycode: 51, shift: '№', subtext: '№',
          },
          {
            text: '4', keycode: 52, shift: ';', subtext: ';',
          },
          {
            text: '5', keycode: 53, shift: '%', subtext: '%',
          },
          {
            text: '6', keycode: 54, shift: ':', subtext: '^',
          },
          {
            text: '7', keycode: 55, shift: '?', subtext: '&',
          },
          {
            text: '8', keycode: 56, shift: '*', subtext: '*',
          },
          {
            text: '9', keycode: 57, shift: '(', subtext: '(',
          },
          {
            text: '0', keycode: 48, shift: ')', subtext: ')',
          },
          {
            text: '-', keycode: 189, shift: '_', subtext: '_',
          },
          {
            text: '=', keycode: 187, shift: '+', subtext: '=',
          },
          { text: 'Backspace', keycode: 8 },
        ],
      },
      {
        type: 'row',
        keys: [
          { text: 'Tab', keycode: 9 },
          { text: 'q', keycode: 81, shift: 'Й' },
          { text: 'w', keycode: 87, shift: 'Ц' },
          { text: 'e', keycode: 69, shift: 'У' },
          { text: 'r', keycode: 82, shift: 'К' },
          { text: 't', keycode: 84, shift: 'Е' },
          { text: 'y', keycode: 89, shift: 'Н' },
          { text: 'u', keycode: 85, shift: 'Г' },
          { text: 'i', keycode: 73, shift: 'Ш' },
          { text: 'o', keycode: 79, shift: 'Щ' },
          { text: '[', keycode: 219, shift: '{' },
          { text: ']', keycode: 221, shift: '}' },
          { text: '\\', keycode: 220, shift: '|' },
          { text: 'Del', keycode: 46 },
        ],
      },
      {
        type: 'row',
        keys: [
          { text: 'Caps Lock', keycode: 20 },
          { text: 'a', keycode: 65, shift: 'A' },
          { text: 's', keycode: 83, shift: 'S' },
          { text: 'd', keycode: 68, shift: 'D' },
          { text: 'f', keycode: 70, shift: 'F' },
          { text: 'g', keycode: 71, shift: 'G' },
          { text: 'h', keycode: 72, shift: 'H' },
          { text: 'j', keycode: 74, shift: 'J' },
          { text: 'k', keycode: 75, shift: 'K' },
          { text: 'l', keycode: 76, shift: 'L' },
          { text: ';', keycode: 186, shift: ':' },
          { text: '\'', keycode: 222, shift: '"' },
          { text: 'Enter', keycode: 13 },
        ],
      },
      {
        type: 'row',
        keys: [
          { text: 'Shift', keycode: 16 },
          { text: 'z', keycode: 90, shift: 'Z' },
          { text: 'x', keycode: 88, shift: 'X' },
          { text: 'c', keycode: 67, shift: 'C' },
          { text: 'v', keycode: 86, shift: 'V' },
          { text: 'b', keycode: 66, shift: 'B' },
          { text: 'n', keycode: 78, shift: 'N' },
          { text: 'm', keycode: 77, shift: 'M' },
          { text: ',', keycode: 188, shift: '<' },
          { text: '.', keycode: 190, shift: '>' },
          { text: '/', keycode: 191, shift: '?' },
          { text: '↑', keycode: 38 },
          { text: 'Shift', keycode: 16, shift: 'pause' },
        ],
      },
      {
        type: 'row',
        keys: [
          { text: 'сtrl', keycode: 17 },
          { text: 'win', keycode: 91 },
          { text: 'alt', keycode: 18 },
          { text: '', keycode: 32 },
          { text: 'alt', keycode: 18 },
          { text: 'сtrl', keycode: 17 },
          { text: '←', keycode: 37 },
          { text: '↓', keycode: 40 },
          { text: '→', keycode: 39 },
        ],
      },
    ];

    const opetationSystem = document.createElement('h3');
    opetationSystem.classList.add('operation-system');
    opetationSystem.textContent = 'Клавиатура создана в операционной системе Windows';

    const keyBoardLayout = document.createElement('h3');
    keyBoardLayout.classList.add('keyboard-layout');
    keyBoardLayout.textContent = 'Комбинация для переключения раскладки shift + alt';

    body.appendChild(wrapper);
    wrapper.append(title, textArea, keyBoard, opetationSystem, keyBoardLayout);

    function createKeyboard() {
      const keyboard = document.querySelector('.keyboard');
      keyDataEn.forEach((row) => {
        const rowEl = document.createElement('div');
        rowEl.classList.add('row');
        row.keys.forEach((key) => {
          const keyEl = document.createElement('div');
          keyEl.classList.add('key');
          keyEl.textContent = key.text;

          if (key.text === 'Backspace') {
            keyEl.classList.add('backspace');
          }
          if (key.text === 'Tab') {
            keyEl.classList.add('tab');
          }
          if (key.text === 'Caps Lock') {
            keyEl.classList.add('caps');
          }
          if (key.text === 'Enter') {
            keyEl.classList.add('enter');
          }
          if (key.text === 'Shift') {
            keyEl.classList.add('shift');
          }
          if (key.text === 'сtrl') {
            keyEl.classList.add('сtrl');
          }
          if (key.keycode === 32) {
            keyEl.classList.add('space');
          }
          if (key.shift === 'pause') {
            keyEl.classList.add('r-shift');
          }
          keyboard.appendChild(keyEl);
          rowEl.appendChild(keyEl);
        });
        keyboard.appendChild(rowEl);
      });
    }
    document.addEventListener('DOMContentLoaded', () => {
      createKeyboard();
    });
  }
}
export default CreateHtml;
