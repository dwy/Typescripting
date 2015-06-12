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
// merging a module with a class
var Album = (function () {
    function Album() {
    }
    return Album;
})();
// module declaration must follow the declaration it will merge with
var Album;
(function (Album) {
    var AlbumLabel = (function () {
        function AlbumLabel() {
        }
        return AlbumLabel;
    })();
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
var album = new Album();
album.label = new Album.AlbumLabel();
//# sourceMappingURL=declaration_merging.js.map