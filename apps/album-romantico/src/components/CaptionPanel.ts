import { createElement } from '../utils/dom';
import { AlbumItem } from '../types/album';

export function createCaptionPanel(item: AlbumItem): HTMLElement {
  const panel = createElement('div', 'caption-panel');

  const title = createElement('h3', 'caption-title', item.title);
  const date = createElement('span', 'caption-date', item.date);
  const text = createElement('p', 'caption-text', item.caption);

  panel.appendChild(title);
  panel.appendChild(date);
  panel.appendChild(text);

  return panel;
}
