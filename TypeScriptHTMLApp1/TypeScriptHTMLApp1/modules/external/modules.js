define(["require", "exports", "./ValidationFactory"], function (require, exports, factory) {
    var validator = factory.ValidatorFactory.create();
    document.body.innerHTML = "string valid: " + validator.validate("stuff");
});
//# sourceMappingURL=modules.js.map