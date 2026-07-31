import { createElement } from '../utils/dom';

export function createHeartHeader(): HTMLElement {
  const header = createElement('header', 'heart-header');

  const heart = createElement('div', 'header-heart', '&#10084;');
  const title = createElement('h1', 'header-title', 'Abre Cuando...');
  const subtitle = createElement('p', 'header-subtitle', 'Cartas escritas con amor para cada momento');

  header.appendChild(heart);
  header.appendChild(title);
  header.appendChild(subtitle);

  return header;
}
