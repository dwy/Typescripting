define(["require", "exports", "./ValidationFactory"], function (require, exports, factory) {
    var ValidatorFactory = factory.ValidatorFactory;
    var validator = ValidatorFactory.create();
    document.body.innerHTML = "string valid: " + validator.validate("stuff");
});
//# sourceMappingURL=modules.js.map