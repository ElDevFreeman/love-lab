export interface AlbumItem {
  id: string;
  photo: string;
  title: string;
  caption: string;
  date: string;
}

export interface SlideshowState {
  currentIndex: number;
  isPlaying: boolean;
  interval: number;
}
