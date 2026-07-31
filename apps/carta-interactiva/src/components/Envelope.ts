import { createElement } from '../utils/dom';

export function createEnvelope(onOpen: () => void): HTMLElement {
  const container = createElement('div', 'envelope-container');

  const envelope = createElement('div', 'envelope');

  const flap = createElement('div', 'envelope-flap');
  const body = createElement('div', 'envelope-body');
  const heart = createElement('div', 'envelope-heart', '&#10084;');

  const instruction = createElement('p', 'envelope-instruction', 'Toca para abrir');

  envelope.appendChild(flap);
  envelope.appendChild(body);
  envelope.appendChild(heart);
  container.appendChild(envelope);
  container.appendChild(instruction);

  container.addEventListener('click', () => {
    envelope.classList.add('envelope--opening');
    instruction.style.opacity = '0';
    setTimeout(() => {
      container.classList.add('envelope-container--hidden');
      onOpen();
    }, 1200);
  });

  return container;
}
