export class СreateHtml {
  constructor(){
    const {body} = document;
    const wrapper = this.wrapper.CreateElement ('div');
    const title = this.title.CreateElement ('h1');
    const textArea = this.textArea.CreateElement ('textarea');
    const keyBoard = this.keyBoard.CreateElement ('section');

    wrapper.classList.add ('wrapper');
    title.classList.add ('header__title');
    textArea.classList.add ('input__text-keyboard')
    keyBoard.classList.add ('keyboard')

    body.appendChild(wrapper);
    wrapper.append (title,textArea,keyBoard);

  }
}
