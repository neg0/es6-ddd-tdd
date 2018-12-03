import { ValueObjectInterface } from "./ValueObjectInterface";
import { NameValidator } from "../Validator/NameValidator";

export class Name extends ValueObjectInterface {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();

        const nameValidator = new NameValidator(name);
        if (true !== nameValidator.isValid()) {
            throw new Error(nameValidator.error);
        }

        this._value = name;
    }

    /**
     * @return {string}
     */
    get value() {
        return this._value;
    }
}
