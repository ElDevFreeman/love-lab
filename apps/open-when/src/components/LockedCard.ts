import { createElement } from '../utils/dom';
import { OpenWhenLetter } from '../types/openWhen';

export function createLockedCard(letter: OpenWhenLetter, onOpen: (letter: OpenWhenLetter) => void): HTMLElement {
  const card = createElement('div', 'locked-card');
  card.style.setProperty('--card-color', letter.color);

  const emoji = createElement('div', 'locked-card-emoji', letter.emoji);
  const title = createElement('h3', 'locked-card-title', letter.title);
  const hint = createElement('p', 'locked-card-hint', 'Toca para abrir');

  card.appendChild(emoji);
  card.appendChild(title);
  card.appendChild(hint);

  card.addEventListener('click', () => onOpen(letter));

  return card;
}
