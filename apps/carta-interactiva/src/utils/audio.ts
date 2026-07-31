let backgroundAudio: HTMLAudioElement | null = null;

export function playBackgroundMusic(src: string, volume: number = 0.3): void {
  if (backgroundAudio) {
    backgroundAudio.pause();
  }
  backgroundAudio = new Audio(src);
  backgroundAudio.loop = true;
  backgroundAudio.volume = volume;
  backgroundAudio.play().catch(() => {
    // Browser may block autoplay
    console.log('Audio autoplay blocked, will play on interaction');
  });
}

export function stopBackgroundMusic(): void {
  if (backgroundAudio) {
    backgroundAudio.pause();
    backgroundAudio = null;
  }
}

export function playSound(src: string, volume: number = 0.5): void {
  const audio = new Audio(src);
  audio.volume = volume;
  audio.play().catch(() => {});
}
