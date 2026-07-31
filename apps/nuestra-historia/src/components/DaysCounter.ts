import { createElement } from '../utils/dom';
import { calculateDaysTogether, calculateMonths } from '../utils/dateUtils';

export function createDaysCounter(startDate: string): HTMLElement {
  const section = createElement('section', 'counter-section');

  const days = calculateDaysTogether(startDate);
  const months = calculateMonths(startDate);

  const title = createElement('h2', 'counter-title', 'Nuestro tiempo juntos');

  const countersRow = createElement('div', 'counters-row');

  const daysCounter = createElement('div', 'counter-item');
  daysCounter.innerHTML = `<span class="counter-number">${days}</span><span class="counter-label">dias</span>`;

  const monthsCounter = createElement('div', 'counter-item');
  monthsCounter.innerHTML = `<span class="counter-number">${months}</span><span class="counter-label">meses</span>`;

  countersRow.appendChild(daysCounter);
  countersRow.appendChild(monthsCounter);

  section.appendChild(title);
  section.appendChild(countersRow);

  return section;
}
