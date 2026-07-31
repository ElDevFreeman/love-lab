import { createHeroSection } from './components/HeroSection';
import { createDaysCounter } from './components/DaysCounter';
import { createTimeline } from './components/Timeline';
import { createFinalMessage } from './components/FinalMessage';
import { importantDates } from './data/importantDates';
import { timelineEvents } from './data/relationshipTimeline';
import { appendToApp } from './utils/dom';

export function initApp(): void {
  const hero = createHeroSection();
  appendToApp(hero);

  const counter = createDaysCounter(importantDates.startDate);
  appendToApp(counter);

  const timeline = createTimeline(timelineEvents);
  appendToApp(timeline);

  const finalMessage = createFinalMessage();
  appendToApp(finalMessage);
}
