import { wait } from '../utils/dom';

export async function typewriterEffect(element: HTMLElement, text: string, speed: number = 50): Promise<void> {
  element.textContent = '';
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await wait(speed);
  }
}
