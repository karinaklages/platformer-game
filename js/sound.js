/**
 * Handles all game sound effects and background music.
 */
class Sound {
    /**
     * Initializes the sound system and loads all audio files.
     */
    constructor() {
        this.isMuted = localStorage.getItem('isMuted') === 'true';
        this.sounds = {
            gameSound: this.createSound('audio/moodmode-that-game-arcade.mp3', 0.08),
            button: this.createSound('audio/floraphonic-arcade-click.mp3', 0.09),
            jump: this.createSound('audio/freesound-jump.mp3', 0.07),
            collect: this.createSound('audio/floraphonic-game-collect.mp3', 0.03),
            throw: this.createSound('audio/floraphonic-throw.mp3', 0.04),
            collision: this.createSound('audio/floraphonic-collision.mp3', 0.05),
            fight: this.createSound('audio/floraphonic-metal-whoosh-hit.mp3', 0.05),
            spiderDeath: this.createSound('audio/floraphonic-animal-squeak.mp3', 0.05),
            dinoDeath: this.createSound('audio/floraphonic-animal-dying.mp3', 0.07),
            bearDeath: this.createSound('audio/floraphonic-growl.mp3', 0.09),
            endbossDeath: this.createSound('audio/endboss-dying.mp3', 0.05),
            gameOver: this.createSound('audio/floraphonic-game-over.mp3', 0.05),
            win: this.createSound('audio/floraphonic-you-win.mp3', 0.2)
        };
    }

    /**
     * Creates an audio object with the given path and volume.
     * @param {string} path - The file path or URL of the audio file.
     * @param {number} volume - The volume level (0.0 to 1.0).
     */
    createSound(path, volume) {
        const sound = new Audio(path);
        sound.volume = volume;
        return sound;
    }

    /**
     * Plays a sound by its name.
     * @param {string} name - The key of the sound in the sounds collection.
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
        localStorage.setItem('isMuted', this.isMuted);
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

    /**
     * Applies the saved mute state (local storage) to the sound icon on page load.
     */
    applyMuteState() {
        const onIcon = document.getElementById('soundIconOn');
        const offIcon = document.getElementById('soundIconOff');
        if (this.isMuted) {
            onIcon.classList.add('d-none');
            offIcon.classList.remove('d-none');
        } else {
            onIcon.classList.remove('d-none');
            offIcon.classList.add('d-none');
        }
    }
}