import { createElement } from '../utils/dom';
import { CategoryInfo, MessageCategory } from '../types/message';

const categories: CategoryInfo[] = [
  { id: 'love', label: 'Te amo porque...', emoji: '\u{1F495}', color: '#e91e63' },
  { id: 'happy', label: 'Cuando sonrias', emoji: '\u{1F60A}', color: '#ff9800' },
  { id: 'sad', label: 'Cuando estes triste', emoji: '\u{1F917}', color: '#9c27b0' },
  { id: 'memories', label: 'Recuerdos', emoji: '\u{2728}', color: '#2196f3' },
];

export function createCategoryTabs(onSelect: (category: MessageCategory) => void, activeCategory: MessageCategory): HTMLElement {
  const tabs = createElement('div', 'category-tabs');

  categories.forEach(cat => {
    const tab = createElement('button', `category-tab ${cat.id === activeCategory ? 'category-tab--active' : ''}`);
    tab.innerHTML = `<span class="tab-emoji">${cat.emoji}</span><span class="tab-label">${cat.label}</span>`;
    tab.style.setProperty('--tab-color', cat.color);

    tab.addEventListener('click', () => {
      tabs.querySelectorAll('.category-tab').forEach(t => t.classList.remove('category-tab--active'));
      tab.classList.add('category-tab--active');
      onSelect(cat.id);
    });

    tabs.appendChild(tab);
  });

  return tabs;
}
