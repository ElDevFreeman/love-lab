import { createElement } from '../utils/dom';
import { SurpriseContent } from '../types/letter';

export function createSurpriseButton(surprise: SurpriseContent, delay: number): HTMLElement {
  const container = createElement('div', 'surprise-container');
  container.style.animationDelay = `${delay}s`;

  const button = createElement('button', 'surprise-button', surprise.label);

  const reveal = createElement('div', 'surprise-reveal');
  reveal.style.display = 'none';

  if (surprise.type === 'text') {
    reveal.innerHTML = `<p class="surprise-text">${surprise.value}</p>`;
  } else if (surprise.type === 'image') {
    reveal.innerHTML = `<img class="surprise-image" src="${surprise.value}" alt="Sorpresa" />`;
  }

  button.addEventListener('click', () => {
    button.style.display = 'none';
    reveal.style.display = 'block';
    reveal.classList.add('surprise-reveal--visible');
  });

  container.appendChild(button);
  container.appendChild(reveal);

  return container;
}
