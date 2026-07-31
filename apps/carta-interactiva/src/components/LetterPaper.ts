import { createElement } from '../utils/dom';
import { LetterContent } from '../types/letter';

export function createLetterPaper(content: LetterContent): HTMLElement {
  const paper = createElement('div', 'letter-paper');

  const greeting = createElement('p', 'letter-greeting', content.greeting);
  paper.appendChild(greeting);

  content.paragraphs.forEach((text, index) => {
    const paragraph = createElement('p', 'letter-paragraph');
    paragraph.textContent = text;
    paragraph.style.animationDelay = `${(index + 1) * 0.8}s`;
    paper.appendChild(paragraph);
  });

  const closing = createElement('p', 'letter-closing', content.closing);
  closing.style.animationDelay = `${(content.paragraphs.length + 1) * 0.8}s`;
  paper.appendChild(closing);

  const signature = createElement('p', 'letter-signature', content.signature);
  signature.style.animationDelay = `${(content.paragraphs.length + 2) * 0.8}s`;
  paper.appendChild(signature);

  return paper;
}
