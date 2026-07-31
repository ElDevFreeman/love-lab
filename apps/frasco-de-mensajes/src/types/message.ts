export interface Message {
  id: string;
  text: string;
  category: MessageCategory;
}

export type MessageCategory = 'love' | 'happy' | 'sad' | 'memories';

export interface CategoryInfo {
  id: MessageCategory;
  label: string;
  emoji: string;
  color: string;
}
