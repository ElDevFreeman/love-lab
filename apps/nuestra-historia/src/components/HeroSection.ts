import { createElement } from '../utils/dom';

export function createHeroSection(): HTMLElement {
  const hero = createElement('section', 'hero');

  const title = createElement('h1', 'hero-title', 'Nuestra Historia');
  const subtitle = createElement('p', 'hero-subtitle', 'Cada momento contigo es un capitulo hermoso');
  const scrollHint = createElement('div', 'hero-scroll-hint', '&#8595; Descubre nuestra historia');

  hero.appendChild(title);
  hero.appendChild(subtitle);
  hero.appendChild(scrollHint);

  return hero;
}
