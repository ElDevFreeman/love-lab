import { createElement } from '../utils/dom';
import { AlbumItem } from '../types/album';
import { createSlideshowController } from '../utils/slideshow';

export function createSlideshow(items: AlbumItem[], onClose: () => void): HTMLElement {
  const overlay = createElement('div', 'slideshow-overlay');

  const container = createElement('div', 'slideshow-container');

  const display = createElement('div', 'slideshow-display');
  const caption = createElement('div', 'slideshow-caption');
  const controls = createElement('div', 'slideshow-controls');

  function updateSlide(index: number): void {
    const item = items[index];
    display.innerHTML = `<div class="slideshow-placeholder"><span class="slideshow-emoji">📷</span><span>${item.title}</span></div>`;
    caption.innerHTML = `<h3>${item.title}</h3><p>${item.caption}</p>`;
  }

  const controller = createSlideshowController(items.length, updateSlide);

  const prevBtn = createElement('button', 'slideshow-btn', '&#10094;');
  const playBtn = createElement('button', 'slideshow-btn slideshow-btn--play', '&#9654;');
  const nextBtn = createElement('button', 'slideshow-btn', '&#10095;');
  const closeBtn = createElement('button', 'slideshow-btn slideshow-btn--close', '&times;');

  prevBtn.addEventListener('click', () => controller.prev());
  nextBtn.addEventListener('click', () => controller.next());
  playBtn.addEventListener('click', () => {
    const state = controller.getState();
    if (state.isPlaying) {
      controller.pause();
      playBtn.innerHTML = '&#9654;';
    } else {
      controller.play();
      playBtn.innerHTML = '&#9646;&#9646;';
    }
  });
  closeBtn.addEventListener('click', () => {
    controller.pause();
    onClose();
  });

  controls.appendChild(prevBtn);
  controls.appendChild(playBtn);
  controls.appendChild(nextBtn);
  controls.appendChild(closeBtn);

  container.appendChild(display);
  container.appendChild(caption);
  container.appendChild(controls);
  overlay.appendChild(container);

  updateSlide(0);

  return overlay;
}
