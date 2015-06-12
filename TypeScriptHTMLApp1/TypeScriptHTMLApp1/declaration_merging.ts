// ReSharper disable InconsistentNaming

// merging interfaces
interface Player {
    play(): number;
    // score: number; // error: non-function members must be unique
}

interface Player {
    score: number;
}

var player: Player = {
    score: 12,
    play() {
        this.score += 42;
        return this.score;
    }
};

player.play();

document.body.innerHTML += "player score: " + player.score;
