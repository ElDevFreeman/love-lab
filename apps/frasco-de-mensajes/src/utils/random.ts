import { Message } from '../types/message';

export function getRandomMessage(messages: Message[]): Message {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
