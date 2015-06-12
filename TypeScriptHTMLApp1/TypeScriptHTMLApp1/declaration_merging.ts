﻿// ReSharper disable InconsistentNaming

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

// function overload

interface ContentGenerator {
    generate(doc: Document): string;
}

interface ContentGenerator {
    generate(regex: string): void;
}

interface ContentGenerator {
    generate(text: "stuff"): Document;
}

// the functions defined later will have higher precedence.
// the merged interface will be:
interface ContentGenerator {
    generate(text: "stuff"): Document;
    generate(regex: string): void;
    generate(doc: Document): string;
}
