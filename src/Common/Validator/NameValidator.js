import { ValidatorAbstract } from "./ValidatorAbstract";
import { AlphabetOnlyValidator } from "./AlphabetOnlyValidator";

export class NameValidator extends ValidatorAbstract {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();
        this.name = name;
        this.alphabetValidator = new AlphabetOnlyValidator(name);
    }

    /**
     * @inheritDoc
     */
    isValid() {
        if (true !== this.alphabetValidator.isValid()) {
            super.error = this.alphabetValidator.error;
        }

        if (this.name.length < 2) {
            super.error = "Does not minimum length requirement";
        }

        if (this.name.length > 32) {
            super.error = "Exceeds maximum length of name";
        }

        return !this._error;
    }
}
