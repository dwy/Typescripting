// ReSharper disable InconsistentNaming
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
//# sourceMappingURL=generics.js.map