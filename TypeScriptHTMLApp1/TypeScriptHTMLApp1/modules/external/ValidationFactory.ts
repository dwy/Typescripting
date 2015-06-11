import validation = require("./Validation");

export class ValidatorFactory {
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
