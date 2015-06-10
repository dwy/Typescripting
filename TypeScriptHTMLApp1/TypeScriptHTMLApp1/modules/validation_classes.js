var Validation;
(function (Validation) {
    var ValidatorFactory = (function () {
        function ValidatorFactory() {
        }
        ValidatorFactory.create = function () {
            return new EvenLengthStringValidator();
        };
        return ValidatorFactory;
    })();
    Validation.ValidatorFactory = ValidatorFactory;
    // not visible outside of module
    var EvenLengthStringValidator = (function () {
        function EvenLengthStringValidator() {
        }
        EvenLengthStringValidator.prototype.validate = function (s) {
            return s.length % 2 === 0;
        };
        return EvenLengthStringValidator;
    })();
})(Validation || (Validation = {}));
//# sourceMappingURL=validation_classes.js.map