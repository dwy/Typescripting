// explicit implementation
var ExplicitAdaptable = (function () {
    function ExplicitAdaptable() {
    }
    ExplicitAdaptable.prototype.adapt = function () { return false; };
    return ExplicitAdaptable;
})();
// implicit implementation
var ImplicitAdaptable = (function () {
    function ImplicitAdaptable() {
    }
    ImplicitAdaptable.prototype.adapt = function () { return true; };
    return ImplicitAdaptable;
})();
var adaptable1 = new ExplicitAdaptable();
var adaptable2 = new ImplicitAdaptable();
//# sourceMappingURL=classTypes.js.map