export function createElement(tag: string, className?: string, innerHTML?: string): HTMLElement {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

export function appendToApp(element: HTMLElement): void {
  const app = document.getElementById('app');
  if (app) app.appendChild(element);
}

export function clearApp(): void {
  const app = document.getElementById('app');
  if (app) app.innerHTML = '';
}

export function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
