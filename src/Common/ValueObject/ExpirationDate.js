import { ValueObjectInterface } from "./ValueObjectInterface";
import { ExpirationDateValidator } from "../Validator/ExpirationDateValidator";

export class ExpirationDate extends ValueObjectInterface {
    /**
     * @param {Date} date
     */
    constructor(date) {
        super();

        const expirationDateValidator = new ExpirationDateValidator(date);
        if (true !== expirationDateValidator.isValid()) {
            throw new Error(expirationDateValidator.error);
        }

        this._value = date;
    }

    /**
     * @return {Date}
     */
    get value() {
        return this._value;
    }
}
