class Sound {
    constructor() {
        this.isMuted = false;
        this.sounds = {
            jump: this.createSound('audio/freesound-jump.mp3', 0.4),
            collect: this.createSound('audio/floraphonic-game-collect.mp3', 0.5),
            throw: this.createSound('audio/floraphonic-throw.mp3', 0.5),
            collision: this.createSound('audio/floraphonic-collision.mp3', 0.6),
            gameOver: this.createSound('audio/floraphonic-game-over.mp3', 0.7),
            button: this.createSound('audio/floraphonic-arcade-click.mp3', 1.0),
            gameSound: this.createSound('audio/moodmode-that-game-arcade.mp3', 1.0)
        };
    }

    createSound(path, volume) {
        const sound = new Audio(path);
        sound.volume = volume;
        return sound;
    }

    play(name) {
        const sound = this.sounds[name];
        if (!sound) return;
        sound.currentTime = 0;
        sound.muted = this.isMuted;
        sound.play();
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
    }
}