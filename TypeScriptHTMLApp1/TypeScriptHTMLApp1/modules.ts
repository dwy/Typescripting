// ReSharper disable InconsistentNaming

module Validation { 
    export interface StringValidator {
        validate(s: string): boolean;
    }
    export class ValidatorFactory {
        static create() {
            return new EvenLengthStringValidator();
        }
    }

    // not visible outside of module
    class EvenLengthStringValidator implements StringValidator {
        validate(s: string) {
            return s.length % 2 == 0;
        }
    }
}

var validator: Validation.StringValidator = Validation.ValidatorFactory.create();

document.body.innerHTML = "string valid: " + validator.validate("stuff");