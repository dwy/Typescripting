// ReSharper disable InconsistentNaming
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
// error: Clock incorrectly implements IClockInterface
/* class Clock implements IClockInterface {
    constructor(hours: number, minutes: number, seconds: number) { }
} */
// this is because when a class implements an interface, only the instance
// side of the class is checked, but the constructor is on the static side
// of the class.
var Clock = (function () {
    function Clock(hours, minutes, seconds) {
    }
    return Clock;
})();
// need to work with the static part of the class
var ClockStatic = Clock;
var clock = new ClockStatic(8, 59, 12);
var square = {}; // empty object of type Square
square.x = 12;
square.y = -7;
square.length = 42;
square.colour = "white";
//# sourceMappingURL=classTypes.js.map