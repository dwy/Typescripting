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
// contextual type: the type of an expression is implied by its location
// from the function onmousedown, the compiler infers the type of the parameter to be 'MouseEvent'.
window.onmousedown = function (mouseEvent) {
    //console.log(mouseEvent.butt);  // error 
    console.log(mouseEvent.button);
};
// contextual type is ignored when the type is set explicitely
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.butt); // no error 
    console.log(mouseEvent.button);
};
// in the context of this function, the return type is used to infer the best-suited type for the array
function createCreatures() {
    return [new Adder(), new Bear(), new Chimp(), new Duck(), new Eagle()];
}
// infers Creature[] because of the return type of the function
var creatures = createCreatures();
// type compatibility
// functions
var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
// OK, each parameter in x has a corresponding parameter with compatible type in y
y = x;
// error, no string parameter in x
//x = y; 
// return types
var a = function () { return ({ name: "Albert" }); };
var b = function () { return ({ name: "Beatrice", colour: "blue" }); };
// OK, each member of the return type of a is in b
a = b;
// error, a has no 'colour' property in return type
//b = a; 
//# sourceMappingURL=type_inference.js.map