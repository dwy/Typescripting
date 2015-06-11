// ReSharper disable InconsistentNaming
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// type parameter
function me(arg) {
    return arg;
}
var me1 = me(2);
var me2 = me(["hi", "sup"]);
document.body.innerHTML = me1 + "<br/>";
document.body.innerHTML += me2 + "<br/>";
// type of generic function
var meFunction = me;
var meFunctionObjectNotation = me;
var meFunctionFromInterface = me;
// need to specify the type T
var meFunctionFromInterface2 = me;
// generic class
var TheBlackAdder = (function () {
    function TheBlackAdder(values) {
        this.values = values;
    }
    TheBlackAdder.prototype.add = function (element) {
        this.values.push(element);
        return this.values;
    };
    return TheBlackAdder;
})();
var adder = new TheBlackAdder([1]);
var added = adder.add(42);
document.body.innerHTML += added + "<br/>";
// constraints
// parameter must have at least a 'text' property of type string
// Note: can also define an interface with member text: string;
function searchText(somewhere, element) {
    return somewhere.text.search(element);
}
var index = searchText({ text: "abc" }, "b");
document.body.innerHTML += index + "<br/>";
// using class types in generics
// because the type information is erased in the compiled javascript,
// need to refer to the type by its constructor function: 'new()'
function create(classType) {
    return new classType();
}
var Tester = (function () {
    function Tester() {
    }
    return Tester;
})();
var testerInstance = create(Tester);
// constraint on prototype
function findLabel(classType) {
    return new classType().label;
}
var Tester1 = (function (_super) {
    __extends(Tester1, _super);
    function Tester1() {
        _super.call(this);
        this.label = { numberOfCases: 12 };
    }
    return Tester1;
})(Tester);
var Tester2 = (function (_super) {
    __extends(Tester2, _super);
    function Tester2() {
        _super.call(this);
        this.label = { nameOfPhase: "phase 1" };
    }
    return Tester2;
})(Tester);
var numberOfCases = findLabel(Tester1).numberOfCases;
var nameOfPhase = findLabel(Tester2).nameOfPhase;
// error: Tester2.label object has no property 'numberOfCases'
// var numberOfCases: number = findLabel(Tester2).numberOfCases;
document.body.innerHTML += "numberOfCases: " + numberOfCases + "<br/>";
document.body.innerHTML += "nameOfPhase: " + nameOfPhase + "<br/>";
//# sourceMappingURL=generics.js.map