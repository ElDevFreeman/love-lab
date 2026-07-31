import { createJarView } from './components/JarView';
import { createCategoryTabs } from './components/CategoryTabs';
import { showMessageReveal } from './components/MessageReveal';
import { reasonsILoveYou } from './data/reasonsILoveYou';
import { openWhenHappy } from './data/openWhenHappy';
import { openWhenSad } from './data/openWhenSad';
import { randomMemories } from './data/randomMemories';
import { getRandomMessage } from './utils/random';
import { appendToApp, createElement } from './utils/dom';
import { Message, MessageCategory } from './types/message';

let currentCategory: MessageCategory = 'love';

function getMessagesForCategory(category: MessageCategory): Message[] {
  switch (category) {
    case 'love': return reasonsILoveYou;
    case 'happy': return openWhenHappy;
    case 'sad': return openWhenSad;
    case 'memories': return randomMemories;
  }
}

export function initApp(): void {
  const header = createElement('header', 'app-header');
  header.innerHTML = '<h1 class="app-title">Frasco de Mensajes</h1><p class="app-subtitle">Saca un papelito y descubre algo bonito</p>';
  appendToApp(header);

  const tabs = createCategoryTabs((category) => {
    currentCategory = category;
  }, currentCategory);
  appendToApp(tabs);

  const messageArea = createElement('div', 'message-area');

  const jar = createJarView(() => {
    const messages = getMessagesForCategory(currentCategory);
    const message = getRandomMessage(messages);
    showMessageReveal(message, messageArea);
  });

  appendToApp(jar);
  appendToApp(messageArea);
}
