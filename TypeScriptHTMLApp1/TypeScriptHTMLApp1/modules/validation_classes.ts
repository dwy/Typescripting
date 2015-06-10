module Validation {
    export class ValidatorFactory {
        static create(): StringValidator {
            return new EvenLengthStringValidator();
        }
    }
    // not visible outside of module
    class EvenLengthStringValidator implements StringValidator {
        validate(s: string) {
            return s.length % 2 === 0;
        }
    }
}
