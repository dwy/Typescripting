var ValidatorFactory = (function () {
    function ValidatorFactory() {
    }
    ValidatorFactory.create = function () {
        return new EvenLengthStringValidator();
    };
    return ValidatorFactory;
})();
exports.ValidatorFactory = ValidatorFactory;
// not visible outside of module
var EvenLengthStringValidator = (function () {
    function EvenLengthStringValidator() {
    }
    EvenLengthStringValidator.prototype.validate = function (s) {
        return s.length % 2 === 0;
    };
    return EvenLengthStringValidator;
})();
//# sourceMappingURL=validation_classes.js.map