import { createElement } from '../utils/dom';
import { Message } from '../types/message';

export function createMessageCard(message: Message): HTMLElement {
  const card = createElement('div', 'message-card');

  const paper = createElement('div', 'message-paper');
  const text = createElement('p', 'message-text', message.text);
  const close = createElement('button', 'message-close', 'Guardar &hearts;');

  close.addEventListener('click', () => {
    card.classList.add('message-card--closing');
    setTimeout(() => card.remove(), 400);
  });

  paper.appendChild(text);
  paper.appendChild(close);
  card.appendChild(paper);

  return card;
}
