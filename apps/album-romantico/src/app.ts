import { createAlbumCover } from './components/AlbumCover';
import { createPhotoGrid } from './components/PhotoGrid';
import { createPhotoDetail } from './components/PhotoDetail';
import { createSlideshow } from './components/Slideshow';
import { albumItems } from './data/albumItems';
import { appendToApp, clearApp, createElement } from './utils/dom';
import { AlbumItem } from './types/album';

export function initApp(): void {
  showCover();
}

function showCover(): void {
  clearApp();
  const cover = createAlbumCover(() => showGallery());
  appendToApp(cover);
}

function showGallery(): void {
  clearApp();

  const nav = createElement('nav', 'gallery-nav');
  const backBtn = createElement('button', 'nav-btn', '&larr; Portada');
  const slideshowBtn = createElement('button', 'nav-btn', '&#9654; Slideshow');

  backBtn.addEventListener('click', showCover);
  slideshowBtn.addEventListener('click', () => {
    const slideshow = createSlideshow(albumItems, () => {
      slideshow.remove();
    });
    document.body.appendChild(slideshow);
  });

  nav.appendChild(backBtn);
  nav.appendChild(slideshowBtn);
  appendToApp(nav);

  const grid = createPhotoGrid(albumItems, (item: AlbumItem) => {
    const detail = createPhotoDetail(item, () => {
      detail.remove();
    });
    document.body.appendChild(detail);
  });
  appendToApp(grid);
}
