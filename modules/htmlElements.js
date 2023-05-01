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
    textArea.id = 'textarea';

    const keyBoard = document.createElement('section');
    keyBoard.classList.add('keyboard');

    const opetationSystem = document.createElement('h3');
    opetationSystem.classList.add('operation-system');
    opetationSystem.textContent = 'Клавиатура создана в операционной системе Windows';

    const keyBoardLayout = document.createElement('h3');
    keyBoardLayout.classList.add('keyboard-layout');
    keyBoardLayout.textContent = 'Комбинация для переключения раскладки shift + alt';

    body.appendChild(wrapper);
    wrapper.append(title, textArea, keyBoard, opetationSystem, keyBoardLayout);

    const keyDataEn = [
      {
        type: 'row',
        keys: [
          { text: '`', char: '`', shift: '~' },
          {
            text: '1', char: '1', shift: '!', subtext: '~',
          },
          {
            text: '2', char: '2', shift: '"', subtext: '"',
          },
          {
            text: '3', char: '3', shift: '№', subtext: '№',
          },
          {
            text: '4', char: '4', shift: ';', subtext: ';',
          },
          {
            text: '5', char: '5', shift: '%', subtext: '%',
          },
          {
            text: '6', char: '6', shift: ':', subtext: '^',
          },
          {
            text: '7', char: '7', shift: '?', subtext: '&',
          },
          {
            text: '8', char: '8', shift: '*', subtext: '*',
          },
          {
            text: '9', char: '9', shift: '(', subtext: '(',
          },
          {
            text: '0', char: '0', shift: ')', subtext: ')',
          },
          {
            text: '-', char: '-', shift: '_', subtext: '_',
          },
          {
            text: '=', char: '=', shift: '+', subtext: '=',
          },
          { text: 'Backspace', char: '' },
        ],
      },
      {
        type: 'row',
        keys: [
          { text: 'Tab', char: '' },
          { text: 'q', char: 'q', shift: 'Q' },
          { text: 'w', char: 'w', shift: 'W' },
          { text: 'e', char: 'e', shift: 'E' },
          { text: 'r', char: 'r', shift: 'R' },
          { text: 't', char: 't', shift: 'T' },
          { text: 'y', char: 'y', shift: 'Y' },
          { text: 'u', char: 'u', shift: 'U' },
          { text: 'i', char: 'i', shift: 'I' },
          { text: 'o', char: 'o', shift: 'O' },
          { text: 'p', char: 'p', shift: 'P' },
          { text: '[', char: '[', shift: '{' },
          { text: ']', char: ']', shift: '}' },
          { text: '\\', char: '\\', shift: '|' },
        ],
      },
      {
        type: 'row',
        keys: [
          { text: 'Caps Lock', char: '' },
          { text: 'a', char: 'a', shift: 'A' },
          { text: 's', char: 's', shift: 'S' },
          { text: 'd', char: 'd', shift: 'D' },
          { text: 'f', char: 'f', shift: 'F' },
          { text: 'g', char: 'g', shift: 'G' },
          { text: 'h', char: 'h', shift: 'H' },
          { text: 'j', char: 'j', shift: 'J' },
          { text: 'k', char: 'k', shift: 'K' },
          { text: 'l', char: 'l', shift: 'L' },
          { text: ';', char: ';', shift: ':' },
          { text: '\'', char: '\'', shift: '"' },
          { text: 'Enter', char: '' },
        ],
      },
      {
        type: 'row',
        keys: [
          { text: 'Shift', char: '' },
          { text: 'z', char: 'z', shift: 'Z' },
          { text: 'x', char: 'x', shift: 'X' },
          { text: 'c', char: 'c', shift: 'C' },
          { text: 'v', char: 'v', shift: 'V' },
          { text: 'b', char: 'b', shift: 'B' },
          { text: 'n', char: 'n', shift: 'N' },
          { text: 'm', char: 'm', shift: 'M' },
          { text: ',', char: ',', shift: '<' },
          { text: '.', char: '.', shift: '>' },
          { text: '/', char: '/', shift: '?' },
          { text: '↑', char: '↑' },
          { text: 'Shift', shift: 'pause', char: '' },
        ],
      },
      {
        type: 'row',
        keys: [
          { text: 'сtrl', char: '' },
          { text: 'win', char: '' },
          { text: 'alt', char: '' },
          { text: '', alttext: 'space', char: '' },
          { text: 'alt', char: '' },
          { text: 'сtrl', char: '' },
          { text: '←', char: '←' },
          { text: '↓', char: '↓' },
          { text: '→', char: '→' },
        ],
      },
    ];

    function createKeyboard() {
      const keyboard = document.querySelector('.keyboard');
      keyDataEn.forEach((row) => {
        const rowEl = document.createElement('div');
        rowEl.classList.add('row');

        row.keys.forEach((key) => {
          const keyEl = document.createElement('div');
          keyEl.classList.add('key');
          keyEl.setAttribute('data-char', key.char);
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
          if (key.alttext === 'space') {
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
const newHtml = new CreateHtml();

export default newHtml;
