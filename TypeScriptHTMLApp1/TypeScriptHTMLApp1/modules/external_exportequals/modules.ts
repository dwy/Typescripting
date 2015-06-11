import validation = require("../external/Validation");
import factory = require("./ValidationFactory");

// Note: since the ValidationFactory class is exported directly, no
// need for factory.ValidatorFactory.create();
var validator: validation.StringValidator = factory.create();

document.body.innerHTML = "string valid: " + validator.validate("stuff");