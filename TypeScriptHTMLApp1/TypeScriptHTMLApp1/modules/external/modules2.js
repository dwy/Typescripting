define(["require", "exports", "./ValidationFactory2"], function (require, exports, factory) {
    // Note: since the ValidationFactory class is exported directly, no
    // need for factory.ValidatorFactory.create();
    var validator = factory.create();
    document.body.innerHTML = "string valid: " + validator.validate("stuff");
});
//# sourceMappingURL=modules2.js.map