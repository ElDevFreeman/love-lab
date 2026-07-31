import { LetterContent, SurpriseContent } from '../types/letter';

export const letterContent: LetterContent = {
  greeting: 'Mi amor,',
  paragraphs: [
    'Hay tantas cosas que quiero decirte y no siempre encuentro las palabras perfectas. Pero hoy quise intentarlo de una forma especial.',
    'Cada dia contigo es un regalo. Tu sonrisa ilumina hasta los dias mas grises, y tu forma de ser me recuerda lo afortunado que soy.',
    'Gracias por ser mi persona favorita, mi refugio, mi alegria. Gracias por elegirme cada dia.',
    'Te amo mas de lo que las palabras pueden expresar, pero espero que esta carta te haga sentir aunque sea un poquito de todo lo que siento por ti.'
  ],
  closing: 'Con todo mi amor, hoy y siempre.',
  signature: 'Tu persona favorita'
};

export const surpriseContent: SurpriseContent = {
  type: 'text',
  value: 'Eres lo mejor que me ha pasado en la vida. Te amo infinitamente.',
  label: 'Una sorpresa para ti'
};
