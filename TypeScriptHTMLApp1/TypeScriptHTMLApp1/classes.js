var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// ReSharper disable InconsistentNaming
var Animal = (function () {
    function Animal(name) {
        this.name = name;
        this.weight = 0.1;
    }
    Animal.prototype.jump = function (distance) {
        if (distance === void 0) { distance = 0.5; }
        return this.name + " jumps " + distance + " meters!";
    };
    return Animal;
})();
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        _super.call(this, "Lion");
        this.weight = 120;
    }
    Lion.prototype.jump = function (distance) {
        if (distance === void 0) { distance = 4; }
        var preJumpAction = this.name + " roars and ";
        var jumpAction = _super.prototype.jump.call(this, distance); // calling base method
        return preJumpAction + jumpAction;
    };
    return Lion;
})(Animal);
var lion = new Lion();
var jump = lion.jump(12);
document.body.innerHTML = jump;
// public / private modifiers
var Dog = (function (_super) {
    __extends(Dog, _super);
    // private weight: number; // error: private is incompatible with the public definition in the base class
    function Dog() {
        _super.call(this, "Dog");
        this.favouriteFood = "Royal Canin";
        this.height = 0.3;
    }
    return Dog;
})(Animal);
// parameter properties: create and initialise public and private properties
var Person = (function () {
    function Person(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    return Person;
})();
var person = new Person("Chateaubriand", 50000);
document.body.innerHTML += person.name;
// accessors: get and set
var LazyStudent = (function () {
    function LazyStudent(name) {
        this._name = name;
    }
    Object.defineProperty(LazyStudent.prototype, "name", {
        get: function () {
            return this._name + " (from getter)";
        },
        set: function (newName) {
            if (this._name !== newName) {
                this._name = newName + " (from setter)";
            }
        },
        enumerable: true,
        configurable: true
    });
    return LazyStudent;
})();
var lazyStudent = new LazyStudent("First Name");
lazyStudent.name = "Second name";
document.body.innerHTML += "<br/>" + lazyStudent.name;
//# sourceMappingURL=classes.js.map