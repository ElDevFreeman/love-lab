import { createElement } from '../utils/dom';

export function createAlbumCover(onOpen: () => void): HTMLElement {
  const cover = createElement('div', 'album-cover');

  const decoration = createElement('div', 'cover-decoration', '&#10084;');
  const title = createElement('h1', 'cover-title', 'Nuestro Album');
  const subtitle = createElement('p', 'cover-subtitle', 'Una coleccion de momentos hermosos');
  const button = createElement('button', 'cover-button', 'Abrir Album');

  button.addEventListener('click', onOpen);

  cover.appendChild(decoration);
  cover.appendChild(title);
  cover.appendChild(subtitle);
  cover.appendChild(button);

  return cover;
}
