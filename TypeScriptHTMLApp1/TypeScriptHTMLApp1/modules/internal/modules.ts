/// <reference path="validation_interfaces.ts"/>
var validator: Validation.StringValidator = Validation.ValidatorFactory.create();

document.body.innerHTML = "string valid: " + validator.validate("stuff");