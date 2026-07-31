import { createElement } from '../utils/dom';
import { OpenWhenLetter } from '../types/openWhen';
import { createLockedCard } from './LockedCard';

export function createLetterGrid(letters: OpenWhenLetter[], onOpen: (letter: OpenWhenLetter) => void): HTMLElement {
  const grid = createElement('div', 'letter-grid');

  letters.forEach(letter => {
    const card = createLockedCard(letter, onOpen);
    grid.appendChild(card);
  });

  return grid;
}
