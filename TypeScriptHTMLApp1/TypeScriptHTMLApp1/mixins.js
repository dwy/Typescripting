// example taken from http://www.typescriptlang.org/Handbook#mixins-mixin-sample
// Disposable Mixin
var Disposable = (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
})();
// Activatable Mixin
var Activatable = (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
})();
var SmartObject = (function () {
    function SmartObject() {
        // stand-ins for the mixins
        // Disposable
        this.isDisposed = false;
        // Activatable
        this.isActive = false;
    }
    SmartObject.prototype.interact = function () {
        this.activate();
    };
    return SmartObject;
})();
applyMixins(SmartObject, [Disposable, Activatable]);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
var smart = new SmartObject();
smart.interact();
smart.dispose();
document.body.innerHTML += "isActive: " + smart.isActive + "<br/>";
document.body.innerHTML += "isDisposed: " + smart.isDisposed + "<br/>";
//# sourceMappingURL=mixins.js.map