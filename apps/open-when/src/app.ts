import { createHeartHeader } from './components/HeartHeader';
import { createLetterGrid } from './components/LetterCategory';
import { createOpenLetter } from './components/OpenLetter';
import { openWhenLetters } from './data/openWhenData';
import { appendToApp, clearApp } from './utils/dom';
import { OpenWhenLetter } from './types/openWhen';

export function initApp(): void {
  renderMain();
}

function renderMain(): void {
  clearApp();

  const header = createHeartHeader();
  appendToApp(header);

  const grid = createLetterGrid(openWhenLetters, (letter) => {
    openLetter(letter);
  });
  appendToApp(grid);
}

function openLetter(letter: OpenWhenLetter): void {
  const overlay = createOpenLetter(letter, () => {
    overlay.remove();
  });
  document.body.appendChild(overlay);
}
