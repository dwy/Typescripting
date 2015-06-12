var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var array = [1, 2, null];
// inferred: number[]
var array2 = [1, 2, null];
// no compatible type: infers {}[]
var array3 = [1, 2, "3"];
var Creature = (function () {
    function Creature() {
    }
    return Creature;
})();
var Adder = (function (_super) {
    __extends(Adder, _super);
    function Adder() {
        _super.apply(this, arguments);
    }
    return Adder;
})(Creature);
var Bear = (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        _super.apply(this, arguments);
    }
    return Bear;
})(Creature);
var Chimp = (function (_super) {
    __extends(Chimp, _super);
    function Chimp() {
        _super.apply(this, arguments);
    }
    return Chimp;
})(Creature);
var animals1 = [new Adder(), new Bear(), new Chimp()];
// inferred: Adder[] because all the types are compatible
// var animals1B: Adder[] = [new Adder(), new Bear(), new Chimp()];
// we can force it to be Creature[]
var animals1B = animals1;
// incompatible with the other Creatures
var Duck = (function (_super) {
    __extends(Duck, _super);
    function Duck() {
        _super.apply(this, arguments);
    }
    Duck.prototype.quack = function () { };
    return Duck;
})(Creature);
var animals2 = [new Duck(), new Bear(), new Chimp()];
// inferred: Bear[] because Bear is the first compatible type
var animals2B = animals2;
// incompatible with the other Creatures
var Eagle = (function (_super) {
    __extends(Eagle, _super);
    function Eagle() {
        _super.apply(this, arguments);
    }
    return Eagle;
})(Creature);
// inferred: {}[] because there is no compatible type
var animals3 = [new Duck(), new Eagle()];
// can force to Bear[] because bear is compatible with Duck and Eagle
var animals3B = animals3;
//# sourceMappingURL=type_inference.js.map