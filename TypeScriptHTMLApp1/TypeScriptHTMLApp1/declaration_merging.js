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
// module merging
var Animals;
(function (Animals) {
    var Eagle = (function () {
        function Eagle() {
        }
        return Eagle;
    })();
    Animals.Eagle = Eagle;
})(Animals || (Animals = {}));
var Animals;
(function (Animals) {
    var Elephant = (function () {
        function Elephant() {
        }
        return Elephant;
    })();
    Animals.Elephant = Elephant;
})(Animals || (Animals = {}));
// exported members are merged: 
/*
module Animals {
    export interface CanFly { maximumAltitude: number; }
    export class Eagle { }
    export class Elephant { }
}
*/
//# sourceMappingURL=declaration_merging.js.map