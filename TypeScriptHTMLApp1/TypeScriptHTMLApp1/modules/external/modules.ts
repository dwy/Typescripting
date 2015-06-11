import validation = require("./Validation");
import factory = require("./ValidationFactory");

// aliases
import StringValidator = validation.StringValidator;
import ValidatorFactory = factory.ValidatorFactory;

var validator: StringValidator = ValidatorFactory.create();

document.body.innerHTML = "string valid: " + validator.validate("stuff");