import { createElement } from '../utils/dom';

export function createFinalMessage(): HTMLElement {
  const section = createElement('section', 'final-section');

  const heart = createElement('div', 'final-heart', '&#10084;');
  const message = createElement('p', 'final-message', 'Y esta historia apenas comienza... Te amo con todo mi corazon.');
  const footer = createElement('p', 'final-footer', 'Hecho con amor, para ti.');

  section.appendChild(heart);
  section.appendChild(message);
  section.appendChild(footer);

  return section;
}
