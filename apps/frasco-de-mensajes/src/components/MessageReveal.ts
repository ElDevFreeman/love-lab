import { createElement } from '../utils/dom';
import { Message } from '../types/message';
import { createMessageCard } from './MessageCard';

export function showMessageReveal(message: Message, container: HTMLElement): void {
  const existingCards = container.querySelectorAll('.message-card');
  existingCards.forEach(card => card.remove());

  const card = createMessageCard(message);
  container.appendChild(card);
}
