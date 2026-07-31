import { createElement } from '../utils/dom';
import { TimelineEvent } from '../types/timeline';
import { createTimelineCard } from './TimelineCard';

export function createTimeline(events: TimelineEvent[]): HTMLElement {
  const section = createElement('section', 'timeline-section');
  const title = createElement('h2', 'timeline-title', 'Momentos especiales');
  const timeline = createElement('div', 'timeline');

  events.forEach((event, index) => {
    const card = createTimelineCard(event, index);
    timeline.appendChild(card);
  });

  section.appendChild(title);
  section.appendChild(timeline);

  return section;
}
