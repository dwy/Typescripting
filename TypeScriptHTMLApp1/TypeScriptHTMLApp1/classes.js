var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
//# sourceMappingURL=classes.js.map