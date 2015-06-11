import validation = require("./Validation");
import factory = require("./ValidationFactory2");

// Note: since the ValidationFactory class is exported directly, no
// need for factory.ValidatorFactory.create();
var validator: validation.StringValidator = factory.create();

document.body.innerHTML = "string valid: " + validator.validate("stuff");