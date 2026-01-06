// Clapping sound URL (royalty-free)
const CLAP_SOUND_URL =
  "https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3";
const SUCCESS_SOUND_URL =
  "https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3";

let clapSound: HTMLAudioElement | null = null;
let successSound: HTMLAudioElement | null = null;

export function preloadSounds(): void {
  clapSound = new Audio(CLAP_SOUND_URL);
  clapSound.preload = "auto";

  successSound = new Audio(SUCCESS_SOUND_URL);
  successSound.preload = "auto";
}

export function playClapSound(): void {
  if (clapSound) {
    clapSound.currentTime = 0;
    clapSound.play().catch(() => {
      // Ignore autoplay errors
    });
  } else {
    const audio = new Audio(CLAP_SOUND_URL);
    audio.play().catch(() => {});
  }
}

export function playSuccessSound(): void {
  if (successSound) {
    successSound.currentTime = 0;
    successSound.play().catch(() => {});
  } else {
    const audio = new Audio(SUCCESS_SOUND_URL);
    audio.play().catch(() => {});
  }
}
