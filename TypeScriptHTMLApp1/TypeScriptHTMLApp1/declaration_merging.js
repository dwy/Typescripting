// ReSharper disable InconsistentNaming
var player = {
    score: 12,
    play: function () {
        this.score += 42;
        return this.score;
    }
};
player.play();
document.body.innerHTML += "player score: " + player.score;
//# sourceMappingURL=declaration_merging.js.map