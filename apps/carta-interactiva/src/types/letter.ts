export interface LetterContent {
  greeting: string;
  paragraphs: string[];
  closing: string;
  signature: string;
}

export interface SurpriseContent {
  type: 'text' | 'image' | 'audio';
  value: string;
  label: string;
}
