import { createEnvelope } from './components/Envelope';
import { createLetterPaper } from './components/LetterPaper';
import { createSurpriseButton } from './components/SurpriseButton';
import { letterContent, surpriseContent } from './data/letterContent';
import { appendToApp, clearApp, createElement } from './utils/dom';

export function initApp(): void {
  const envelope = createEnvelope(() => {
    showLetter();
  });

  appendToApp(envelope);
}

function showLetter(): void {
  clearApp();

  const letterContainer = createElement('div', 'letter-container');

  const paper = createLetterPaper(letterContent);
  letterContainer.appendChild(paper);

  const totalParagraphs = letterContent.paragraphs.length;
  const surpriseDelay = (totalParagraphs + 3) * 0.8;
  const surprise = createSurpriseButton(surpriseContent, surpriseDelay);
  letterContainer.appendChild(surprise);

  appendToApp(letterContainer);
}
