import { createElement } from '../utils/dom';
import { OpenWhenLetter } from '../types/openWhen';

export function createOpenLetter(letter: OpenWhenLetter, onClose: () => void): HTMLElement {
  const overlay = createElement('div', 'letter-overlay');

  const letterEl = createElement('div', 'open-letter');
  letterEl.style.setProperty('--letter-color', letter.color);

  const header = createElement('div', 'open-letter-header');
  header.innerHTML = `<span class="open-letter-emoji">${letter.emoji}</span><h2 class="open-letter-title">${letter.title}</h2>`;

  const body = createElement('div', 'open-letter-body');
  letter.content.forEach((paragraph, index) => {
    const p = createElement('p', 'open-letter-paragraph');
    p.textContent = paragraph;
    p.style.animationDelay = `${index * 0.3}s`;
    body.appendChild(p);
  });

  const closing = createElement('p', 'open-letter-closing', letter.closing);
  closing.style.animationDelay = `${letter.content.length * 0.3}s`;
  body.appendChild(closing);

  const closeBtn = createElement('button', 'open-letter-close', 'Cerrar con amor &hearts;');
  closeBtn.addEventListener('click', () => {
    overlay.classList.add('letter-overlay--closing');
    setTimeout(onClose, 400);
  });

  letterEl.appendChild(header);
  letterEl.appendChild(body);
  letterEl.appendChild(closeBtn);
  overlay.appendChild(letterEl);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.add('letter-overlay--closing');
      setTimeout(onClose, 400);
    }
  });

  return overlay;
}
