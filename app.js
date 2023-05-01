import CreateHtml from './modules/htmlElements.js';

console.log(CreateHtml);
const textarea = document.getElementById('textarea');
const virtualKeyboard = document.querySelector('.keyboard');

virtualKeyboard.addEventListener('click', (event) => {
  const key = event.target.closest('.key');
  if (!key) return;
  const { char } = key.dataset;
  textarea.value += char;
  textarea.focus();
});

document.addEventListener('DOMContentLoaded', () => {
  textarea.focus();
});
