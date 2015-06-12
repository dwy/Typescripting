// ReSharper disable InconsistentNaming
var player = {
    score: 12,
    play: function () {
        this.score += 42;
        return this.score;
    }
};
player.play();
document.body.innerHTML += "player score: " + player.score + "<br/>";
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
    // adding a new static member to existing class
    Album.totalCount = 0;
})(Album || (Album = {}));
var album = new Album();
Album.totalCount++;
album.label = new Album.AlbumLabel();
// merging a module with a function
function stringConcat() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i - 0] = arguments[_i];
    }
    return elements.join(stringConcat.separator);
}
var stringConcat;
(function (stringConcat) {
    stringConcat.separator = " -- ";
    function hi() { return "hello"; }
    stringConcat.hi = hi;
})(stringConcat || (stringConcat = {}));
var text = stringConcat("one", "two", "three");
document.body.innerHTML += "concatenated: " + text + "<br/>";
document.body.innerHTML += "hi: " + stringConcat.hi() + "<br/>";
// merging a module with an enum
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Success"] = 0] = "Success";
    TaskStatus[TaskStatus["Running"] = 1] = "Running";
    TaskStatus[TaskStatus["Waiting"] = 2] = "Waiting";
})(TaskStatus || (TaskStatus = {}));
// adding static members to the enum
var TaskStatus;
(function (TaskStatus) {
    function next(current) {
        if (current === TaskStatus.Waiting) {
            return TaskStatus.Running;
        }
        if (current === TaskStatus.Running) {
            return TaskStatus.Success;
        }
        return TaskStatus.Waiting;
    }
    TaskStatus.next = next;
})(TaskStatus || (TaskStatus = {}));
var next = TaskStatus.next;
var taskStatus = next(next(TaskStatus.Success));
document.body.innerHTML += "taskStatus: " + taskStatus + "<br/>";
//# sourceMappingURL=declaration_merging.js.map