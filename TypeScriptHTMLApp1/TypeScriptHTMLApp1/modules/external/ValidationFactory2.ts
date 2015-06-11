import validation = require("./Validation");

class ValidatorFactory {
    static create(): validation.StringValidator {
        return new EvenLengthStringValidator();
    }
}
// not visible outside of module
class EvenLengthStringValidator implements validation.StringValidator {
    validate(s: string) {
        return s.length % 2 === 0;
    }
}

// export the class directly
export = ValidatorFactory;