// src/lib/audioPlayer.ts

export function playAudio(audioFile: string) {
    const audio = new Audio(audioFile);
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}