import { createElement } from '../utils/dom';
import { TimelineEvent } from '../types/timeline';
import { formatDate } from '../utils/dateUtils';

export function createTimelineCard(event: TimelineEvent, index: number): HTMLElement {
  const card = createElement('div', `timeline-card ${index % 2 === 0 ? 'timeline-card--left' : 'timeline-card--right'}`);
  card.style.animationDelay = `${index * 0.2}s`;

  const dot = createElement('div', 'timeline-dot');
  if (event.emoji) dot.innerHTML = event.emoji;

  const content = createElement('div', 'timeline-content');
  const date = createElement('span', 'timeline-date', formatDate(event.date));
  const title = createElement('h3', 'timeline-card-title', event.title);
  const description = createElement('p', 'timeline-card-description', event.description);

  if (event.photo) {
    const photo = createElement('img', 'timeline-photo') as HTMLImageElement;
    (photo as HTMLImageElement).src = event.photo;
    (photo as HTMLImageElement).alt = event.title;
    content.appendChild(photo);
  }

  content.appendChild(date);
  content.appendChild(title);
  content.appendChild(description);

  card.appendChild(dot);
  card.appendChild(content);

  return card;
}
