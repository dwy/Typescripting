define(["require", "exports"], function (require, exports) {
    var ValidatorFactory = (function () {
        function ValidatorFactory() {
        }
        ValidatorFactory.create = function () {
            return new EvenLengthStringValidator();
        };
        return ValidatorFactory;
    })();
    // not visible outside of module
    var EvenLengthStringValidator = (function () {
        function EvenLengthStringValidator() {
        }
        EvenLengthStringValidator.prototype.validate = function (s) {
            return s.length % 2 === 0;
        };
        return EvenLengthStringValidator;
    })();
    return ValidatorFactory;
});
//# sourceMappingURL=ValidationFactory2.js.map