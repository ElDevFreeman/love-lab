import { SlideshowState } from '../types/album';

export function createSlideshowController(
  totalItems: number,
  onChange: (index: number) => void,
  interval: number = 4000
): {
  play: () => void;
  pause: () => void;
  next: () => void;
  prev: () => void;
  getState: () => SlideshowState;
} {
  let timerId: number | null = null;
  const state: SlideshowState = {
    currentIndex: 0,
    isPlaying: false,
    interval
  };

  function next(): void {
    state.currentIndex = (state.currentIndex + 1) % totalItems;
    onChange(state.currentIndex);
  }

  function prev(): void {
    state.currentIndex = (state.currentIndex - 1 + totalItems) % totalItems;
    onChange(state.currentIndex);
  }

  function play(): void {
    if (state.isPlaying) return;
    state.isPlaying = true;
    timerId = window.setInterval(next, state.interval);
  }

  function pause(): void {
    state.isPlaying = false;
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  function getState(): SlideshowState {
    return { ...state };
  }

  return { play, pause, next, prev, getState };
}
