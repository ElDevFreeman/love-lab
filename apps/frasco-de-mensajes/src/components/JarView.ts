import { createElement } from '../utils/dom';

export function createJarView(onPull: () => void): HTMLElement {
  const container = createElement('div', 'jar-container');

  const jar = createElement('div', 'jar');
  const jarBody = createElement('div', 'jar-body');
  const jarLid = createElement('div', 'jar-lid');
  const papers = createElement('div', 'jar-papers');

  for (let i = 0; i < 8; i++) {
    const paper = createElement('div', 'jar-paper');
    paper.style.setProperty('--rotation', `${Math.random() * 40 - 20}deg`);
    paper.style.setProperty('--offset', `${Math.random() * 60 - 30}px`);
    papers.appendChild(paper);
  }

  jarBody.appendChild(papers);
  jar.appendChild(jarLid);
  jar.appendChild(jarBody);

  const button = createElement('button', 'pull-button', 'Sacar un mensaje');
  button.addEventListener('click', onPull);

  container.appendChild(jar);
  container.appendChild(button);

  return container;
}
