import { createElement } from '../utils/dom';
import { AlbumItem } from '../types/album';

export function createPhotoDetail(item: AlbumItem, onClose: () => void): HTMLElement {
  const overlay = createElement('div', 'detail-overlay');

  const detail = createElement('div', 'photo-detail');

  const imgContainer = createElement('div', 'detail-img-container');
  const placeholder = createElement('div', 'detail-placeholder');
  placeholder.innerHTML = `<span class="detail-placeholder-emoji">📷</span><span class="detail-placeholder-text">Coloca tu foto aqui:<br>${item.photo}</span>`;
  imgContainer.appendChild(placeholder);

  const caption = createElement('div', 'detail-caption');
  caption.innerHTML = `
    <h2 class="detail-title">${item.title}</h2>
    <p class="detail-date">${item.date}</p>
    <p class="detail-text">${item.caption}</p>
  `;

  const closeBtn = createElement('button', 'detail-close', '&times;');
  closeBtn.addEventListener('click', onClose);

  detail.appendChild(closeBtn);
  detail.appendChild(imgContainer);
  detail.appendChild(caption);
  overlay.appendChild(detail);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) onClose();
  });

  return overlay;
}
