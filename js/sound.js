/**
 * Handles all game sound effects and background music.
 */
class Sound {
    /**
     * Initializes the sound system and loads all audio files.
     */
    constructor() {
        this.isMuted = false;
        this.sounds = {
            jump: this.createSound('audio/freesound-jump.mp3', 0.4),
            collect: this.createSound('audio/floraphonic-game-collect.mp3', 0.5),
            throw: this.createSound('audio/floraphonic-throw.mp3', 0.5),
            collision: this.createSound('audio/floraphonic-collision.mp3', 0.6),
            gameOver: this.createSound('audio/floraphonic-game-over.mp3', 0.7),
            button: this.createSound('audio/floraphonic-arcade-click.mp3', 1.0),
            gameSound: this.createSound('audio/moodmode-that-game-arcade.mp3', 0.9)
        };
    }

    /**
     * Creates an audio object with the given path and volume.
     */
    createSound(path, volume) {
        const sound = new Audio(path);
        sound.volume = volume;
        return sound;
    }

    /**
     * Plays a sound by its name.
     */
    play(name) {
        const sound = this.sounds[name];
        if (!sound) return;
        sound.currentTime = 0;
        sound.muted = this.isMuted;
        sound.play();
    }

    /**
     * Toggles the mute state for all sounds and updates the sound icon.
     */
    toggleMute() {
        this.isMuted = !this.isMuted;
        const onIcon = document.getElementById('soundIconOn');
        const offIcon = document.getElementById('soundIconOff');
        if (this.isMuted) {
            onIcon.classList.add('d-none');
            offIcon.classList.remove('d-none');
            this.sounds.gameSound.pause();
        } else {
            onIcon.classList.remove('d-none');
            offIcon.classList.add('d-none');
            this.sounds.gameSound.play();
        }
    }
}