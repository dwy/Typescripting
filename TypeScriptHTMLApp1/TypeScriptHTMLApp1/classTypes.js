// explicit implementation
var ExplicitAdaptable = (function () {
    function ExplicitAdaptable() {
        this.name = "explicit";
    }
    ExplicitAdaptable.prototype.adapt = function () { return false; };
    return ExplicitAdaptable;
})();
// implicit implementation
var ImplicitAdaptable = (function () {
    function ImplicitAdaptable() {
        this.name = "implicit";
    }
    ImplicitAdaptable.prototype.adapt = function () { return true; };
    return ImplicitAdaptable;
})();
var adaptable1 = new ExplicitAdaptable();
var adaptable2 = new ImplicitAdaptable();
function adapt(adaptable) {
    adaptable.adapt();
    return "adapted " + adaptable.name;
}
var result = adapt(adaptable1);
result += "\n";
result += adapt(adaptable2);
document.body.innerHTML = result;
//# sourceMappingURL=classTypes.js.map