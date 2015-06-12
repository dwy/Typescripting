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
        // someMember: NotExported; // error
        Eagle.prototype.screech = function () {
            return localValue;
        };
        return Eagle;
    })();
    Animals.Eagle = Eagle;
    var localValue = "I am local to this module";
})(Animals || (Animals = {}));
var Animals;
(function (Animals) {
    var Elephant = (function () {
        function Elephant() {
        }
        Elephant.prototype.talk = function () {
            // return localValue; // error
        };
        return Elephant;
    })();
    Animals.Elephant = Elephant;
    var NotExported = (function () {
        function NotExported() {
        }
        return NotExported;
    })();
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