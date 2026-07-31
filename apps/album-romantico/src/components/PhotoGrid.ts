import { createElement } from '../utils/dom';
import { AlbumItem } from '../types/album';

export function createPhotoGrid(items: AlbumItem[], onSelect: (item: AlbumItem) => void): HTMLElement {
  const section = createElement('section', 'gallery-section');

  const header = createElement('div', 'gallery-header');
  header.innerHTML = '<h2 class="gallery-title">Nuestros Momentos</h2>';
  section.appendChild(header);

  const grid = createElement('div', 'photo-grid');

  items.forEach((item, index) => {
    const card = createElement('div', 'photo-card');
    card.style.animationDelay = `${index * 0.1}s`;

    const imgContainer = createElement('div', 'photo-img-container');
    const placeholder = createElement('div', 'photo-placeholder');
    placeholder.innerHTML = `<span class="placeholder-emoji">📷</span><span class="placeholder-text">${item.title}</span>`;
    imgContainer.appendChild(placeholder);

    const info = createElement('div', 'photo-info');
    info.innerHTML = `<h3 class="photo-title">${item.title}</h3><p class="photo-date">${item.date}</p>`;

    card.appendChild(imgContainer);
    card.appendChild(info);

    card.addEventListener('click', () => onSelect(item));
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}
