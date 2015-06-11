import validation = require("./Validation");
import factory = require("./ValidationFactory");

var validator: validation.StringValidator = factory.ValidatorFactory.create();

document.body.innerHTML = "string valid: " + validator.validate("stuff");